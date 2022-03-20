class ICTimer {
    callback = null;
    delayTime = 0;
    timeHandle = null;
    inst = null;

    constructor(inst, interval, callback) {
        this.callback = callback;
        this.delayTime = interval;
        this.inst = inst;
    }

    start() {
        var that = this;
        this.timeHandle = setInterval(function () {
            if (that.callback) {
                that.callback(that.inst);
            }
        }, this.delayTime);
    }

    stop() {
        if (this.timeHandle) {
            clearInterval(this.timeHandle);
            this.timeHandle = null;
        }
    }

}

export {ICTimer}