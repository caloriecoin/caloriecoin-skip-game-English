class ICCommon {
    constructor(){
    }
    static isEqualMac(mac1, mac2) {
        var macAddr1 = mac1.replace(/:/g, "").toUpperCase();
        var macAddr2 = mac2.replace(/:/g, "").toUpperCase();
        if (macAddr1.length !== 12 || macAddr2.length !== 12) {
            return false;
        }
        if (macAddr1 === macAddr2) {
            return true;
        }

        for (var i = 0; i < 6; i++) {
            var m1 = macAddr1.substring(i * 2, i * 2 + 2);
            var m2 = macAddr2.substring((5 - i) * 2, (5 - i) * 2 + 2);
            if (!(m1 === m2)) {
                return false;
            }
        }
        return true;
    }

    /**
     列表转字符串

     @param arrs 列表
     @return 字符串
     */
    static convertArrayToString(arrs) {
        if (arrs == null || arrs.length === 0) {
            return "[]";
        }
        var temp = "";
        temp += "[";
        var index = 0;
        var count = arrs.length;
        for (var i = 0; i < count; i++) {

            var value = arrs[i];
            if (value instanceof Map || value instanceof Object) {
                value = this.convertDictToString(value);
            } else if (value instanceof Array) {
                value = this.convertArrayToString(value);
            }
            temp += value;
            if (index !== count - 1) {
                temp += ",";
            }
            index++;
        }
        temp += "]";
        return temp;
    }

    /**
     字典转字符串

     @param dicts 字典
     @return 字符串
     */
    static convertDictToString(dicts) {
        if (dicts == null || Object.keys(dicts).length === 0) {
            return "{}";
        }
        var temp = "{";
        var index = 0;
        var count = dicts.length;
        var s = this;

        if (dicts instanceof Map) {
            dicts.forEach(function (value, key, map) {
                if (value instanceof Map || value instanceof Object) {
                    value = s.convertDictToString(value);
                } else if (value instanceof Array) {
                    value = s.convertArrayToString(value);
                }
                else if (value instanceof ArrayBuffer) {
                    value = s.byte2hex(value);
                }
                temp += key + ":" + value;
                if (index !== count - 1) {
                    temp += ",";
                }
                index++;

            });
        }
        else if (dicts instanceof Object) {
            Object.keys(dicts).forEach(function(key){
                var value = dicts[key];
                if (value instanceof Map || value instanceof Object) {
                    value = s.convertDictToString(value);
                } else if (value instanceof Array) {
                    value = s.convertArrayToString(value);
                }
                else if (value instanceof ArrayBuffer) {
                    value = s.byte2hex(value);
                }
                temp += key + ":" + value;
                if (index !== count - 1) {
                    temp += ",";
                }
                index++;
            });
        }

        temp += "}";
        return temp;
    }

    static byte2hex(buffer) {
        var hexArr = Array.prototype.map.call(
            new Uint8Array(buffer),
            function (bit) {
                return ('00' + bit.toString(16)).slice(-2)
            }
        );

        return hexArr.join('').toUpperCase();
    }


    static hex2byte(str) {
        var len = str.length;
        len /= 2;
        var buff = new ArrayBuffer(len);
        var datav = new DataView(buff);
        for (var i = 0; i < len; i++) {
            var code = str.substr(i * 2, 2);
            code = parseInt(code, 16);
            datav.setUint8(i, code);
        }
        return buff;
    }

    // 获取位,从0开始
    static GetBit(value, bit) {
        return (value & (1 << bit)) != 0 ? 1 : 0;
    }

    // 设置位为1，从0开始
    static SetBit(value, bit) {
        return (value | (1 << bit));
    }

    // 设置位为0，从0开始
    static ClearBit(value, bit) {
        return (value | ~(1 << bit));
    }

    static g2kg_general(g, per, precision)
    {
        var kg = g / 1000.0;

        var v = ICCommon.gunit_general(kg, per, precision);
        return v;
    }

    static g2lb_general(g, per, precision)
    {
        var lb = g * 0.0022046;
        var v = ICCommon.gunit_general(lb, per, precision);
        return v;
    }

    static getInt(v)
    {
        var v2 = parseInt(v * 10);
        var mod = v2 % 10;

        if (mod >= 9) {
            return v + 1;
        }
        return v;
    }


    static gunit_general(kg, per, precision)
    {
        var v = kg;
        switch (per) {
            case 0:
            {
                // 0.01
                var v2 = v * 1000;
                var weight = this.getInt(v2);
                weight += 5;
                weight = parseInt(weight / 10.0);
                return (weight / 100.0);
            }
                break;
            case 1: {
                // 0.02
                var v2 = v * 1000;
                var weight = this.getInt(v2);
                if (weight % 10 == 9) {
                    weight += 10;
                }
                weight = parseInt(weight / 10.0);
                if ((weight % 2) != 0) {
                    weight += 1;
                }
                return (weight / 100.0);
            }
                break;
            case 2: {
                // 0.05
                var v2 = v * 1000;
                var weight = this.getInt(v2);
                weight += 20;
                weight = parseInt(weight / 10.0);
                var mod = weight % 10;
                if (mod >= 5) {
                    weight = parseInt((weight / 10)) * 10 + 5;
                }
                else {
                    weight = parseInt((weight / 10)) * 10;
                }
                return (weight / 100.0);
            }
                break;
            case 3:
            {
                // 0.1
                var v2 = v * 100;
                var weight = this.getInt(v2);
                weight = weight + 5;
                weight = parseInt(weight / 10.0);
                return (weight / 10.0);
            }
                break;
            case 4: {
                // 0.2
                var v2 = v * 100;
                //            v2 = 11369;
                var weight = this.getInt(v2);
                //            weight += 10;
                if (weight % 10 == 9) {
                    weight += 10;
                }
                weight = parseInt(weight / 10.0);
                if ((weight % 2) != 0) {
                    weight += 1;
                }
                return (weight / 10.0);
            }
                break;
            default:
                break;
        }
        return v;
    }

    static reverseByteArray(data)
    {
        if (data === null || data.byteLength === 0) {
            return null;
        }
        var pDataSrc = new DataView(data);

        var size = data.byteLength;
        var buff = new ArrayBuffer(size);
        var pData = new DataView(buff);
        var index = 0;
        for (var i = size - 1; i >= 0; i--) {
            pData.setUint8(index, pDataSrc.getUint8(i));
            index++;
        }
        return buff;
    }

    static reverseMacAddr(macAddr)
    {
        var buff = "";
        var m2 = "";
        for (var i = 5; i >= 0; i--)
        {
            m2 = macAddr.substr(i * 2, 2);
            buff += m2;
        }
        return buff;
    }


    static deleteMapByKey(obj, key) {
        delete obj[key];
    }

    static deleteArrayByIndex(arr, obj) {
        var index = arr.indexOf(obj);
        if (index < 0)
            return;
        arr.splice(index, 1);
    }

    static addArray(arr, obj){
        arr[arr.length] = obj;
    }

    static prettyMacAddr(macAddr)
    {
        var macAddr1 = macAddr.replace(/:/g, "").toUpperCase();
        var size = macAddr1.length / 2;
        var pr = "";
        for (var i = 0; i < size; i++) {
            var t = macAddr1.substr(i * 2, 2);
            if (i ===size - 1) {
                pr = pr + t;
            }
            else {
                pr = pr + t + ":";
            }
        }
        return pr;
    }

    static currentTimestamp()
    {
        return parseInt(new Date().getTime() / 1000);
    }


    static stringToBuffer(str) {
        let val = ""
        for (let i = 0; i < str.length; i++) {
            if (val === '') {
                val = str.charCodeAt(i).toString(16)
            } else {
                val += ',' + str.charCodeAt(i).toString(16)
            }
        }
        return new Uint8Array(val.match(/[\da-f]{2}/gi).map(function (h) {
            return parseInt(h, 16)
        })).buffer
    }
}


export {ICCommon}
