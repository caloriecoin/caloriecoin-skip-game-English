class ICKitchenScaleData {

    /**
     是否稳定数据, 不稳定的数据只做展示用，请勿保存
     */
    isStabilized = false;


    /**
     数据值,单位:g
     */
    value_g = 0.0;

    /**
     数据值,单位:ml
     */
    value_ml = 0.0;

    /**
     数据值,单位:lb:oz中的lb
     */
    value_lb = 0;

    /**
     数据值,单位:lb:oz中的oz
     */
    value_lb_oz = 0.0;

    /**
     数据值,单位:fl.oz
     */
    value_fl_oz = 0.0;

    /**
     测量时间戳(秒)
     */
    time = 0;

    /**
     小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
     */
    precision = 1;

    constructor() {}

}

export {ICKitchenScaleData}