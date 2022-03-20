
/**
 设备类型
 **/
var ICDeviceType = {
    /**
     * 未知
     **/
    ICDeviceTypeUnKnown : 0,

    /**
     * 体重秤
     **/
    ICDeviceTypeWeightScale : 1,

    /**
     * 脂肪秤
     **/
    ICDeviceTypeFatScale : 2,

    /**
     * 脂肪秤(带温度显示)
     **/
    ICDeviceTypeFatScaleWithTemperature : 3,

    /**
     * 厨房秤
     **/
    ICDeviceTypeKitchenScale : 4,

    /**
     * 围尺
     **/
    ICDeviceTypeRuler : 5,

    /**
     * 平衡秤
     **/
    ICDeviceTypeBalance : 6,
    /**
     * 跳绳
     **/
    ICDeviceTypeSkip : 7,

};


/**
 设备子类型
 **/
var  ICDeviceSubType =  {
    /**
     * 默认
     **/
    ICDeviceSubTypeDefault : 0,

    /**
     * 8电极设备
     **/
    ICDeviceSubTypeEightElectrode : 1,

    /**
     * 身高设备
     **/
    ICDeviceSubTypeHeight : 2,

    /**
     * 8电极设备2
     **/
    ICDeviceSubTypeEightElectrode2 : 3,

    /**
     * 双模设备
     **/
    ICDeviceSubTypeScaleDual : 4,
};

/**
 蓝牙状态
 */
var ICBleState = {
    /**
     * 未知状态
     **/
    ICBleStateUnknown : 0,

    /**
     * 手机不支持BLE
     **/
    ICBleStateUnsupported : 1,

    /**
     * 应用未获取蓝牙授权
     **/
    ICBleStateUnauthorized : 2,

    /**
     * 蓝牙关闭
     **/
    ICBleStatePoweredOff : 3,

    /**
     * 蓝牙打开
     **/
    ICBleStatePoweredOn : 4,

    /**
     * 蓝牙异常,建议开关蓝牙或重启手机
     **/
    ICBleStateException : 5,

};


/**
 设备通讯方式

 */
var ICDeviceCommunicationType = {
    /**
     未知
     */
    ICDeviceCommunicationTypeUnknown : 0,

    /**
     连接式
     */
    ICDeviceCommunicationTypeConnect : 1,

    /**
     广播式
     */
    ICDeviceCommunicationTypeBroadcast : 2,
};


/**
 设备连接状态

 */
var ICDeviceConnectState = {
    /**
     * 已连接
     **/
    ICDeviceConnectStateConnected : 0,

    /**
     * 已断开
     **/
    ICDeviceConnectStateDisconnected : 1,
};



/**
 * 添加设备回调代码
 */
var ICAddDeviceCallBackCode = {
    /**
     * 添加成功
     */
    ICAddDeviceCallBackCodeSuccess : 0,

    /**
     * 添加失败,SDK未初始化
     */
    ICAddDeviceCallBackCodeFailedAndSDKNotInit : 1,

    /**
     * 添加失败，设备已存在
     */
    ICAddDeviceCallBackCodeFailedAndExist : 2,

    /**
     * 添加失败，设备参数有错
     */
    ICAddDeviceCallBackCodeFailedAndDeviceParamError : 3,
};

/**
 添加设备回调
 */
function ICAddDeviceCallBack(macAddr, code) {

}



/**
 * 删除设备回调代码
 */
var ICRemoveDeviceCallBackCode =
    {
        /**
         * 删除成功
         */
        ICRemoveDeviceCallBackCodeSuccess : 0,

        /**
         * 删除失败,SDK未初始化
         */
        ICRemoveDeviceCallBackCodeFailedAndSDKNotInit : 1,

        /**
         * 删除失败，设备不存在
         */
        ICRemoveDeviceCallBackCodeFailedAndNotExist : 2,

        /**
         * 删除失败，设备参数有错
         */
        ICRemoveDeviceCallBackCodeFailedAndDeviceParamError : 3,
    };

/**
 删除设备回调
 */

function ICRemoveDeviceCallBack(macAddr, code){

}

/**
 设置回调错误代码

 */
var ICSettingCallBackCode =
    {
        /**
         * 设置成功
         **/
        ICSettingCallBackCodeSuccess : 0,

        /**
         * 设置失败，SDK没有初始化
         **/
        ICSettingCallBackCodeSDKNotInit : 1,

        /**
         * 设置失败，SDK没有启动
         **/
        ICSettingCallBackCodeSDKNotStart : 2,

        /**
         * 设置失败，找不到设备或者设备未连接，请等待设备连接上后再设置
         **/
        ICSettingCallBackCodeDeviceNotFound : 3,

        /**
         * 设置失败，设备不支持该功能
         **/
        ICSettingCallBackCodeFunctionIsNotSupport : 4,

        /**
         * 设置失败，设备已断开
         **/
        ICSettingCallBackCodeDeviceDisConnected : 5,

        /**
         * 设置失败，无效参数
         **/
        ICSettingCallBackCodeInvalidParameter : 6,

        /**
         * 设置失败
         **/
        ICSettingCallBackCodeFailed : 7,
    };

/**
 体重秤单位
 */
var ICWeightUnit =
    {

        /**
         * 公斤
         */
        ICWeightUnitKg : 0,

        /**
         * 磅
         */
        ICWeightUnitLb : 1,

        /**
         * 英石
         */
        ICWeightUnitSt : 2,

        /**
         * 斤
         */
        ICWeightUnitJin : 3
    };

/**
 围尺单位
 */
var ICRulerUnit =
    {

        /**
         * 厘米cm
         */
        ICRulerUnitCM : 1,

        /**
         * 英寸inch
         */
        ICRulerUnitInch : 2,
    };

/**
 围尺测量模式
 */
var ICRulerMeasureMode =
    {

        /**
         * 长度模式
         */
        ICRulerMeasureModeLength : 1,

        /**
         * 围度模式
         */
        ICRulerMeasureModeGirth : 2
    };


/**
 围尺设置的部位类型
 */
var ICRulerBodyPartsType =
    {
        /**
         * 肩膀
         */
        ICRulerPartsTypeShoulder : 1,

        /**
         * 手臂
         */
        ICRulerPartsTypeBicep : 2,

        /**
         * 胸
         */
        ICRulerPartsTypeChest :3,

        /**
         * 腰
         */
        ICRulerPartsTypeWaist : 4,

        /**
         * 臀
         */
        ICRulerPartsTypeHip : 5,

        /**
         * 大腿
         */
        ICRulerPartsTypeThigh : 6,

        /**
         * 小腿
         */
        ICRulerPartsTypeCalf : 7,

    };

/**
 性别
 */
var ICSexType =
    {
        /**
         * 未知/保密
         */
        ICSexTypeUnknown : 0,

        /**
         * 男
         */
        ICSexTypeMale : 1,

        /**
         * 女
         */
        ICSexTypeFemal : 2,
    };


/**
 厨房秤单位
 */
var ICKitchenScaleUnit =
    {

        /**
         * 克
         */
        ICKitchenScaleUnitG : 0,
        /**
         * ml
         */
        ICKitchenScaleUnitMl : 1,

        /**
         * 磅
         */
        ICKitchenScaleUnitLb : 2,

        /**
         * 盎司
         */
        ICKitchenScaleUnitOz : 3
    };


/**
 厨房秤营养成分类型
 */
var ICKitchenScaleNutritionFactType =
    {
        /*
         *  卡路里, 最大不超过4294967295
         */
        ICKitchenScaleNutritionFactTypeCalorie : 0,

        /*
         *  总卡路里, 最大不超过4294967295
         */
        ICKitchenScaleNutritionFactTypeTotalCalorie : 1,

        /*
         *  总脂肪
         */
        ICKitchenScaleNutritionFactTypeTotalFat : 2,

        /*
         *  总蛋白质
         */
        ICKitchenScaleNutritionFactTypeTotalProtein : 3,

        /*
         *  总碳水化合物
         */
        ICKitchenScaleNutritionFactTypeTotalCarbohydrates : 4,

        /*
         *  总脂肪纤维
         */
        ICKitchenScaleNutritionFactTypeTotalFiber : 5,

        /*
         *  总胆固醇
         */
        ICKitchenScaleNutritionFactTypeTotalCholesterd : 6,

        /*
         *  总钠含量
         */
        ICKitchenScaleNutritionFactTypeTotalSodium : 7,

        /*
         *  总糖含量
         */
        ICKitchenScaleNutritionFactTypeTotalSugar : 8,

        /*
         * 脂肪
         */
        ICKitchenScaleNutritionFactTypeFat : 9,

        /*
         * 蛋白质
         */
        ICKitchenScaleNutritionFactTypeProtein : 10,

        /*
         * 碳水化合物
         */
        ICKitchenScaleNutritionFactTypeCarbohydrates : 11,

        /*
         * 膳食纤维
         */
        ICKitchenScaleNutritionFactTypeFiber : 12,

        /*
         * 胆固醇
         */
        ICKitchenScaleNutritionFactTypeCholesterd : 13,

        /*
         * 钠含量
         */
        ICKitchenScaleNutritionFactTypeSodium : 14,

        /*
         * 糖含量
         */
        ICKitchenScaleNutritionFactTypeSugar : 15,
    };

/**
 算法版本
 */
var ICBFAType = {
    /*
     * 含水肌肉率
     */
    ICBFATypeContainWater : 0,
    /*
     * 不含水肌肉率
     */
    ICBFATypeNoContainWater : 1,

    ICBFATypeUnknown: 900,

} ;

/**
 用户类型
 */
var ICPeopleType = {
    /*
     * 普通人
     */
    ICPeopleTypeNormal : 0,

    /*
     * 运动员
     */
    ICPeopleTypeSportman : 1,
} ;




/**
 数据类型
 */
var ICMeasureStep = {
    /*
     * 测量体重 (ICWeightData)
     */
    ICMeasureStepMeasureWeightData : 0,

    /*
     * 测量平衡 (ICWeightCenterData)
     */
    ICMeasureStepMeasureCenterData : 1,

    /*
     * 开始测量阻抗
     */
    ICMeasureStepAdcStart : 2,

    /*
     * 测量阻抗结束 (ICWeightData)
     */
    ICMeasureStepAdcResult : 3,

    /*
     * 开始测量心率
     */
    ICMeasureStepHrStart : 4,

    /*
     * 测量心率结束 (ICWeightData)
     */
    ICMeasureStepHrResult : 5,

    /*
     * 测量结束
     */
    ICMeasureStepMeasureOver : 6,

} ;


/**
 * 跳绳模式
 */
var ICSkipMode = {
    /**
     * 自由跳
     */
    ICSkipModeFreedom : 0,

    /**
     * 计时跳
     */
    ICSkipModeTiming : 1,

    /**
     * 计次跳
     */
    ICSkipModeCount : 2
};

/**
 * Wifi配网状态
 */
var ICConfigWifiState = {
    /**
     * 配网成功
     */
    ICConfigWifiStateSuccess : 0,
    /**
     * 路由器连接中
     */
    ICConfigWifiStateWifiConnecting : 1,
    /**
     * 服务器连接中
     */
    ICConfigWifiStateServerConnecting : 2,
    /**
     * 配网失败，连接路由器失败
     */
    ICConfigWifiStateWifiConnectFail : 3,
    /**
     * 配网失败，服务器连接不上
     */
    ICConfigWifiStateServerConnectFail : 4,
    /**
     * 配网失败，密码不对
     */
    ICConfigWifiStatePasswordFail : 5,
    /**
     * 配网失败
     */
    ICConfigWifiStateFail : 6,
};

module.exports = {
    ICDeviceSubType : ICDeviceSubType,
    ICDeviceType : ICDeviceType,
    ICBleState : ICBleState,
    ICDeviceCommunicationType : ICDeviceCommunicationType,
    ICDeviceConnectState: ICDeviceConnectState,
    ICAddDeviceCallBackCode: ICAddDeviceCallBackCode,
    ICAddDeviceCallBack: ICAddDeviceCallBack,
    ICRemoveDeviceCallBackCode: ICRemoveDeviceCallBackCode,
    ICRemoveDeviceCallBack: ICRemoveDeviceCallBack,
    ICSettingCallBackCode: ICSettingCallBackCode,
    ICWeightUnit: ICWeightUnit,
    ICRulerUnit: ICRulerUnit,
    ICRulerMeasureMode: ICRulerMeasureMode,
    ICRulerBodyPartsType: ICRulerBodyPartsType,
    ICSexType: ICSexType,
    ICKitchenScaleUnit: ICKitchenScaleUnit,
    ICKitchenScaleNutritionFactType: ICKitchenScaleNutritionFactType,
    ICBFAType: ICBFAType,
    ICPeopleType: ICPeopleType,
    ICMeasureStep: ICMeasureStep,
    ICSkipMode: ICSkipMode,
    ICConfigWifiState: ICConfigWifiState,
};


