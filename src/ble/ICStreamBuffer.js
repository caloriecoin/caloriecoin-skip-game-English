
const IC_STREAM_BUFFER_SEEK_BEGIN = 0;
const IC_STREAM_BUFFER_SEEK_CUR = 1;
const IC_STREAM_BUFFER_SEEK_END = 2;

class ICStreamBuffer {
    m_pCur = 0;
    m_nPos = 0;
    m_nSize = 0;
    m_bCanFree = false;
    m_nCapacity = 0;
    m_bLittle = false;
    m_pBuffer = null;

    constructor(param)
    {
        if (param instanceof ArrayBuffer) {
            this.setBufferData(param);
        }
        else {
            this.setBufferSize(param);
        }
    }

    setBufferData(data) {
        this.m_bCanFree = false;
        this.m_nCapacity = data.byteLength;
        this.m_nSize = data.byteLength;
        this.m_pBuffer = data;
        this.m_pCur = new DataView(this.m_pBuffer);
    }

    setBufferSize(size) {
        this.m_bCanFree = true;
        this.m_nCapacity = size;
        this.m_pBuffer = new ArrayBuffer(size);
        this.m_pCur = new DataView(this.m_pBuffer);
    }

    setLittleEndian(b) {
        this.m_bLittle = b;
    }

    readByte() {
        if (this.isEOF()) {
            return 0;
        }
        var c = this.m_pCur.getUint8(this.m_nPos);
        this.m_nPos++;
        return c;
    }

    readShort() {
        if ((this.m_nPos + 2) > this.m_nSize)
        {
            return 0;
        }
        var c = this.m_pCur.getUint16(this.m_nPos, this.m_bLittle);
        this.m_nPos+=2;
        return c;
    }

    readInt() {
        if ((this.m_nPos + 4) > this.m_nSize)
        {
            return 0;
        }
        var c = this.m_pCur.getUint32(this.m_nPos, this.m_bLittle);
        this.m_nPos+=4;
        return c;
    }

    readData(len) {
        var slen = this.m_nSize - this.m_nPos;
        if (slen > len) {
            slen = len;
        }
        if (slen <= 0)
        {
            return null;
        }
        var buffer = new ArrayBuffer(slen);
        var datav = new DataView(buffer);

        for (var i = this.m_nPos; i < this.m_nPos + slen; i++) {
            var s = this.m_pCur.getUint8(i);
            datav.setUint8(i - this.m_nPos, s);
        }

        this.m_nPos += slen;
        return buffer;
    }

    readDataInBuffer(buffer, offset, size) {
        var datav = new DataView(buffer);
        var slen = this.m_nSize - this.m_nPos;
        if (slen > size) {
            slen = size;
        }

        if (slen <= 0)
        {
            return null;
        }
        for (var i = this.m_nPos; i < this.m_nPos + slen; i++) {
            var s = this.m_pCur.getUint8(i);
            // console.log(i + '-' + s);
            datav.setUint8((i - this.m_nPos) + offset, s);
        }

        this.m_nPos += slen;
        return slen;
    }


    writeByte(b) {
        if ((this.m_nPos + 1) >= this.m_nCapacity) {
            if (this.m_bCanFree) {
                if (!this.Resize(128)) {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }
        this.m_pCur.setUint8(this.m_nPos, b);
        this.m_nPos++;
        this.RecordSize();
        return 1;
    }

    writeShort(sn) {
        if ((this.m_nPos + 2) >= this.m_nCapacity) {
            if (this.m_bCanFree) {
                if (!this.Resize(128)) {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }
        this.m_pCur.setUint16(this.m_nPos, sn, this.m_bLittle);
        this.m_nPos += 2;
        this.RecordSize();
        return 2;
    }

    writeInt(n) {
        if ((this.m_nPos + 4) >= this.m_nCapacity) {
            if (this.m_bCanFree) {
                if (!this.Resize(128)) {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }
        this.m_pCur.setUint32(this.m_nPos, n, this.m_bLittle);
        this.m_nPos += 4;
        this.RecordSize();
        return 4;
    }

    writeData(data) {
        var len = data.byteLength;
        if (len <= 0 || (this.m_nPos + len) >= this.m_nCapacity ) {
            if (this.m_bCanFree) {
                if(!this.Resize(len))
                    return 0;
            }else{
                return 0;
            }
        }

        var datav = new DataView(data);

        for (var i = 0; i < len; i++) {
            this.m_pCur.setUint8(this.m_nPos, datav.getUint8(i));
            this.m_nPos += 1;
        }
        this.RecordSize();
        return len;
    }

    write(data, offset, size) {
        var len = data.byteLength;
        if (len <= 0 || (this.m_nPos + len) >= this.m_nCapacity ) {
            if (this.m_bCanFree) {
                if(!this.Resize(len))
                    return 0;
            }else{
                return 0;
            }
        }

        if (size > len) {
            size = len;
        }

        var datav = new DataView(data);

        for (var i = offset; i < offset + size; i++) {
            this.m_pCur.setUint8(this.m_nPos, datav.getUint8(i));
            this.m_nPos += 1;
        }
        this.RecordSize();
        return len;
    }


    skip(size) {
        this.m_nPos += size;
    }

    getAllBuffer() {
        return this.m_pBuffer.slice(0, this.m_nSize);
    }

    getPosition() {
        return this.m_nPos;
    }

    getCapacity() {
        return this.m_nCapacity;
    }

    getSize() {
        return this.m_nSize;
    }

    seek(seek, offset) {
        switch (seek) {
            case IC_STREAM_BUFFER_SEEK_BEGIN:
                this.m_nPos = 0;
                this.m_nPos += offset;
                break;
            case IC_STREAM_BUFFER_SEEK_CUR:
                this.m_nPos += offset;
                break;
            case IC_STREAM_BUFFER_SEEK_END:
                this.m_nPos = this.m_nSize;
                this.m_nPos += offset;
                break;
        }
        return this.m_nPos;
    }

    rewind() {
        this.m_nPos = 0;
    }

    clear() {
        this.m_nPos = 0;
        this.m_nSize = 0;
    }

    RecordSize() {
        if (this.m_nPos > this.m_nSize) {
            this.m_nSize = this.m_nPos;
        }
    }


    isEOF() {
        return this.m_nPos > this.m_nSize;
    }


    Resize(size) {
        return false;
    }
}


export {ICStreamBuffer}