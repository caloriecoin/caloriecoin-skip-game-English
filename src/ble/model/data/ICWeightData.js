// import {ICWeightExtData} from "./ICWeightExtData";

/**
 体重数据
 */
class ICWeightData {

    /**
     是否稳定数据,如果数据不稳定，则只有weight有效，不稳定的数据只做展示用，请勿保存
     */
    isStabilized = false;

    /**
     体重(kg)
     */
    weight_kg = 0.0;

    /**
     体重(磅)
     */
    weight_lb = 0.0;

    /**
     体重(st:lb)，注:这个字段跟weight_st_lb一起使用
     */
    weight_st = 0;

    /**
     体重(st:lb)，注:这个字段跟weight_st一起使用
     */
    weight_st_lb = 0.0;

    /**
     kg体重小数点位数,如:weight_kg=70.12,则precision=2，weight_kg=71.5,则precision_kg=1
     */
    precision_kg = 1;

    /**
     lb体重小数点位数,如:weight_lb=70.12,则precision=2，weight_lb=71.5,则precision_lb=1
     */
    precision_lb = 1;

    /**
     st:lb体重小数点位数
     */
    precision_st_lb = 1;

    /**
     温度
     */
    temperature = 0.0;

    /**
     时间戳
     */
    time = 0;

    /**
     身体质量指数BMI(精度:0.1)
     */
    bmi = 0.0;

    /**
     支持心率测量
     */
    isSupportHR = false;

    /**
     心率值
     */
    hr = 0;

    /**
     体脂率(百分比, 精度:0.1)
     */
    bodyFatPercent = 0.0;

    /**
     皮下脂肪率(百分比, 精度:0.1)
     */
    subcutaneousFatPercent = 0.0;

    /**
     内脏脂肪指数(精度:0.1)
     */
    visceralFat = 0.0;

    /**
     肌肉率(百分比, 精度:0.1)
     */
    musclePercent = 0.0;

    /**
     基础代谢率(单位:kcal)
     */
    bmr = 0;

    /**
     骨重量(单位:kg,精度:0.1)
     */
    boneMass = 0.0;

    /**
     水含量(百分比,精度:0.1)
     */
    moisturePercent = 0.0;

    /**
     身体年龄
     */
    physicalAge = 0.0;

    /**
     蛋白率(百分比,精度:0.1)
     */
    proteinPercent = 0.0;

    /**
     骨骼肌率(百分比,精度:0.1)
     */
    smPercent = 0.0;

    /**
     电极数，4电极或者8电极
     */
    electrode = 4;

    /**
     阻抗(单位:欧姆ohm,精度:0.1)
     */
    imp = 0.0;

    /**
     阻抗2(单位:欧姆ohm,精度:0.1)
     */
    imp2 = 0.0;

    /**
     阻抗3(单位:欧姆ohm,精度:0.1)
     */
    imp3 = 0.0;

    /**
     阻抗4(单位:欧姆ohm,精度:0.1)
     */
    imp4 = 0.0;

    /**
     阻抗5(单位:欧姆ohm,精度:0.1)
     */
    imp5 = 0.0;


    /**
     数据计算方式(0:sdk，1:设备计算)
     */
    data_calc_type = 0;
    /**
     算法类型
     */
    bfa_type = 0;
    /**
     阻抗列表
     */
    impendences = [];


    constructor() {}
}

export {ICWeightData}