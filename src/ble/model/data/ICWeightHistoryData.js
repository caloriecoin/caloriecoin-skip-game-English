/**
 体重历史数据
 */
import ICConstant from "../other/ICConstant";

class ICWeightHistoryData {

    /**
     体重(g)
     */
    weight_g = 0;

    /**
     体重(kg)
     */
    weight_kg = 0.0;

    /**
     体重(lb)
     */
    weight_lb = 0.0;

    /**
     体重(st:lb)，注:这个字段跟weight_st_lb一起使用
     */
    weight_st = 0.0;

    /**
     体重(st:lb)，注:这个字段跟weight_st一起使用
     */
    weight_st_lb = 0.0;

    /**
     kg体重小数点位数,如:weight_kg=70.12,则precision=2，weight_kg=71.5,则precision_kg=1
     */
    precision_kg = 0.0;

    /**
     lb体重小数点位数,如:weight_lb=70.12,则precision=2，weight_lb=71.5,则precision_lb=1
     */
    precision_lb = 0.0;

    /**
     st:lb体重小数点位数
     */
    precision_st_lb = 0.0;

    /**
     kg分度值
     */
    kg_scale_division = 0.0;

    /**
     lb分度值
     */
    lb_scale_division = 0.0;

    /**
     测量时间戳(秒)
     */
    time = 0;

    /**
     心率值
     */
    hr = 0;

    /**
     电极数，4电极或者8电极
     */
    electrode = 4;

    /**
     全身阻抗(单位:欧姆ohm), `electrode=4`时，只使用这个阻抗,如阻抗等于0，则代表测量不到阻抗
     */
    imp = 0;

    /**
     左手阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
     */
    imp2 = 0;

    /**
     右手阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
     */
    imp3 = 0;

    /**
     左腳阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
     */
    imp4 = 0;

    /**
     右腳阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
     */
    imp5 = 0;

    /**
     平衡数据
     */
    centerData = null;

    /**
     数据计算方式(0:sdk，1:设备计算)
     */
    data_calc_type = 2;

    /**
     本次体脂数据计算的算法类型
     */
    bfa_type = ICConstant.ICBFAType.ICBFATypeContainWater;
    /**
     阻抗列表
     */
    impendences = [];
    constructor() {}
}

export {ICWeightHistoryData}