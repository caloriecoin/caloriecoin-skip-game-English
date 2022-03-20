import * as ICConstant from "../other/ICConstant";

/**
 围尺数据
 */
class ICRulerData {
    /**
     是否稳定数据
     @notice 如果数据不稳定，则只有distance有效，不稳定的数据只做展示用，请勿保存
     */
    isStabilized = false;

    /**
     测量长度(0.1mm)
     */
    distance = 0.0;

    /**
     距离inch
     */
    distance_in = 0.0;

    /**
     距离cm
     */
    distance_cm = 0.0;

    /**
     inch距离小数点位数,如:distance_in=70.12,则precision_in=2，distance_in=71.5,则precision_in=1
     */
    precision_in = 1;

    /**
     cm距离小数点位数,如:distance_cm=70.12,则precision_cm=2，distance_cm=71.5,则precision_cm=1
     */
    precision_cm = 1;

    /**
     *
     本次测量的单位
     */
    unit = ICConstant.ICRulerUnit.ICRulerUnitCM;

    /**
     本次测量的单位
     */
    mode = ICConstant.ICRulerMeasureMode.ICRulerMeasureModeLength;


    /**
     时间戳
     */
    time = 0;

    /**
     身体部位类型
     */
    partsType = ICConstant.ICRulerBodyPartsType.ICRulerPartsTypeShoulder;

    constructor() {}
}

export {ICRulerData}
