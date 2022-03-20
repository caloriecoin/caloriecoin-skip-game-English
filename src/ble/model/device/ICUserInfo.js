import * as ICConstant from "../other/ICConstant";

class ICUserInfo {

    /**
     用户编号,默认:1
     */
    userIndex = 1;

    /**
     身高(cm),默认:172cm
     */
    height = 172;

    /**
     体重(kg),默认:60.0kg
     */
    weight = 60;

    /**
     年龄,默认:24
     */
    age = 24;
    /**
     目标体重(kg),默认:50.0kg
     */
    targetWeight = 50.0;

    /**
     体重方向,默认:0 减重，1:增重
     */
    weightDirection = 0;

    /**
     用户类型,默认:ICPeopleTypeNormal
     */
    peopleType = ICConstant.ICPeopleType.ICPeopleTypeNormal;

    /**
     性别,默认:ICSexTypeMale
     */
    sex = ICConstant.ICSexType.ICSexTypeFemal;

    /**
     用户默认的体重单位,默认:ICWeightUnitKg
     */
    weightUnit = ICConstant.ICWeightUnit.ICWeightUnitKg;

    /**
     用户默认的围尺单位,默认:ICRulerUnitCM
     */
    rulerUnit = ICConstant.ICRulerUnit.ICRulerUnitCM;

    /**
     用户默认的围尺测量模式,默认:ICRulerMeasureModeLength
     */
    rulerMode = ICConstant.ICRulerMeasureMode.ICRulerMeasureModeLength;

    /**
     厨房秤默认单位,默认:ICKitchenScaleUnitG
     */
    kitchenUnit = ICConstant.ICKitchenScaleUnit.ICKitchenScaleUnitG;

    constructor() {}
}

export {ICUserInfo}
