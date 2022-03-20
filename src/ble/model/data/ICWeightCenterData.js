class ICWeightCenterData {

    /**
     数据是否稳定, 不稳定的数据只做展示用，请勿保存
     */
    isStabilized = false;

    /**
     测量时间戳(秒)
     */
    time = 0;

    /**
     kg体重小数点位数,如:weight=70.12,则precision=2，weight=71.5,则precision_kg=1
     */
    precision_kg = 1;

    /**
     lb体重小数点位数,如:weight=70.12,则precision=2，weight=71.5,则precision_lb=1
     */
    precision_lb = 1;

    /**
     st:lb体重小数点位数
     */
    precision_st_lb = 1;

    /**
     左边体重占比(%)
     */
    leftPercent = 0;

    /**
     右边体重占比(%)
     */
    rightPercent = 0;

    /**
     左边体重(kg)
     */
    left_weight_kg = 0.0;

    /**
     右边体重(kg)
     */
    right_weight_kg = 0.0;

    /**
     左边体重(lb)
     */
    left_weight_lb = 0.0;

    /**
     右边体重(lb)
     */
    right_weight_lb = 0.0;

    /**
     左边体重(st:lb)
     */
    left_weight_st = 0;

    /**
     右边体重(st:lb)
     */
    right_weight_st = 0.0;

    /**
     左边体重(st:lb)
     */
    left_weight_st_lb = 0.0;

    /**
     右边体重(st:lb)
     */
    right_weight_st_lb = 0.0;

    constructor() {}

}

export {ICWeightCenterData}