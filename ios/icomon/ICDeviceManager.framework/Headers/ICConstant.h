//
//  ICConstant.h
//  ICDeviceManager
//
//  Created by Symons on 2018/7/28.
//  Copyright © 2018年 Symons. All rights reserved.
//

#ifndef ICConstant_h
#define ICConstant_h

#import "ICAlgDef.h"

@class ICDevice;


/**
 设备类型
 **/
typedef NS_ENUM(NSUInteger, ICDeviceType)
{
    /**
     * 未知
     **/
    ICDeviceTypeUnKnown = 0,
    
    /**
     * 体重秤
     **/
    ICDeviceTypeWeightScale,
    
    /**
     * 脂肪秤
     **/
    ICDeviceTypeFatScale,

    /**
     * 脂肪秤(带温度显示)
     **/
    ICDeviceTypeFatScaleWithTemperature,
    
    /**
     * 厨房秤
     **/
    ICDeviceTypeKitchenScale,

    /**
     * 围尺
     **/
    ICDeviceTypeRuler,

    /**
     * 平衡秤
     **/
    ICDeviceTypeBalance,

    /**
     * 跳绳
     **/
    ICDeviceTypeSkip,


};

/**
 设备子类型
 **/
typedef NS_ENUM(NSUInteger, ICDeviceSubType)
{
    /**
     * 默认
     **/
    ICDeviceSubTypeDefault = 0,
    
    /**
     * 8电极设备
     **/
    ICDeviceSubTypeEightElectrode,
    
    /**
     * 身高设备
     **/
    ICDeviceSubTypeHeight,
    /**
     * 8电极设备2
     **/
    ICDeviceSubTypeEightElectrode2,
    /**
     * 双模设备
     **/
    ICDeviceSubTypeScaleDual,
    /**
     * 跳绳带灯效
     **/
    ICDeviceSubTypeLightEffect,

};

/**
 设备通讯方式
 
 */
typedef NS_ENUM(NSUInteger, ICDeviceCommunicationType) {
    /**
     未知
     */
    ICDeviceCommunicationTypeUnknown,
    
    /**
     连接式
     */
    ICDeviceCommunicationTypeConnect,
    
    /**
     广播式
     */
    ICDeviceCommunicationTypeBroadcast,
};

/**
 蓝牙状态
 */
typedef NS_ENUM(NSUInteger, ICBleState)
{
    /**
     * 未知状态
     **/
    ICBleStateUnknown = 0,
    
    /**
     * 手机不支持BLE
     **/
    ICBleStateUnsupported,
    
    /**
     * 应用未获取蓝牙授权
     **/
    ICBleStateUnauthorized,
    
    /**
     * 蓝牙关闭
     **/
    ICBleStatePoweredOff,
    
    /**
     * 蓝牙打开
     **/
    ICBleStatePoweredOn,
};


/**
 设备连接状态
 
 */
typedef NS_ENUM(NSUInteger, ICDeviceConnectState)
{
    /**
     * 已连接
     **/
    ICDeviceConnectStateConnected,
    
    /**
     * 已断开
     **/
    ICDeviceConnectStateDisconnected,
};



/**
 * 添加设备回调代码
 */
typedef NS_ENUM(NSUInteger, ICAddDeviceCallBackCode)
{
    /**
     * 添加成功
     */
    ICAddDeviceCallBackCodeSuccess,
    
    /**
     * 添加失败,SDK未初始化
     */
    ICAddDeviceCallBackCodeFailedAndSDKNotInit,
    
    /**
     * 添加失败，设备已存在
     */
    ICAddDeviceCallBackCodeFailedAndExist,
    
    /**
     * 添加失败，设备参数有错
     */
    ICAddDeviceCallBackCodeFailedAndDeviceParamError,
};

/**
 添加设备回调
 */
typedef void(^ICAddDeviceCallBack)(ICDevice *device, ICAddDeviceCallBackCode code);


/**
 * 删除设备回调代码
 */
typedef NS_ENUM(NSUInteger, ICRemoveDeviceCallBackCode)
{
    /**
     * 删除成功
     */
    ICRemoveDeviceCallBackCodeSuccess,
    
    /**
     * 删除失败,SDK未初始化
     */
    ICRemoveDeviceCallBackCodeFailedAndSDKNotInit,
    
    /**
     * 删除失败，设备不存在
     */
    ICRemoveDeviceCallBackCodeFailedAndNotExist,
    
    /**
     * 删除失败，设备参数有错
     */
    ICRemoveDeviceCallBackCodeFailedAndDeviceParamError,
};

/**
 删除设备回调
 */
typedef void(^ICRemoveDeviceCallBack)(ICDevice *device, ICRemoveDeviceCallBackCode code);



/**
 设置回调错误代码
 
 */
typedef NS_ENUM(NSUInteger, ICSettingCallBackCode)
{
    /**
     * 设置成功
     **/
    ICSettingCallBackCodeSuccess = 0,
    
    /**
     * 设置失败，SDK没有初始化
     **/
    ICSettingCallBackCodeSDKNotInit,
    
    /**
     * 设置失败，SDK没有启动
     **/
    ICSettingCallBackCodeSDKNotStart,
    
    /**
     * 设置失败，找不到设备或者设备未连接，请等待设备连接上后再设置
     **/
    ICSettingCallBackCodeDeviceNotFound,
    
    /**
     * 设置失败，设备不支持该功能
     **/
    ICSettingCallBackCodeFunctionIsNotSupport,
    
    /**
     * 设置失败，设备已断开
     **/
    ICSettingCallBackCodeDeviceDisConnected,
    
    /**
     * 设置失败，无效参数
     **/
    ICSettingCallBackCodeInvalidParameter,

    /**
     * 设置失败
     **/
    ICSettingCallBackCodeFailed,
};

/**
 体重秤单位
 */
typedef NS_ENUM(NSUInteger, ICWeightUnit)
{
    
    /**
     * 公斤
     */
    ICWeightUnitKg = 0,
    
    /**
     * 磅
     */
    ICWeightUnitLb,
    
    /**
     * 英石
     */
    ICWeightUnitSt,
    
    /**
     * 斤
     */
    ICWeightUnitJin
};


/**
 围尺单位
 */
typedef NS_ENUM(NSUInteger, ICRulerUnit)
{
    
    /**
     * 厘米cm
     */
    ICRulerUnitCM = 1,
    
    /**
     * 英寸inch
     */
    ICRulerUnitInch,
    /**
     * 英尺'英寸
     */
    ICRulerUnitFtInch,

};


/**
 围尺测量模式
 */
typedef NS_ENUM(NSUInteger, ICRulerMeasureMode)
{
    
    /**
     * 长度模式
     */
    ICRulerMeasureModeLength = 0,
    
    /**
     * 围度模式
     */
    ICRulerMeasureModeGirth,
    
};



/**
 厨房秤单位
 */
typedef NS_ENUM(NSUInteger, ICKitchenScaleUnit)
{
    
    /**
     * 克
     */
    ICKitchenScaleUnitG,

    /**
     * ml
     */
    ICKitchenScaleUnitMl,

    /**
     * 磅
     */
    ICKitchenScaleUnitLb,
    
    /**
     * 盎司
     */
    ICKitchenScaleUnitOz,
    /**
     * 毫克
     */
    ICKitchenScaleUnitMg,
    /**
     * ml(牛奶)
     */
    ICKitchenScaleUnitMlMilk,
    /**
     * 盎司(水)
     */
    ICKitchenScaleUnitFlOzWater,
    /**
     * 盎司(牛奶)
     */
    ICKitchenScaleUnitFlOzMilk
};


/**
 围尺设置的部位类型
 */
typedef NS_ENUM(NSUInteger, ICRulerBodyPartsType)
{
    /**
     * 肩膀
     */
    ICRulerPartsTypeShoulder = 1,
    
    /**
     * 手臂
     */
    ICRulerPartsTypeBicep,
    
    /**
     * 胸
     */
    ICRulerPartsTypeChest,

    /**
     * 腰
     */
    ICRulerPartsTypeWaist,
    
    /**
     * 臀
     */
    ICRulerPartsTypeHip,
    
    /**
     * 大腿
     */
    ICRulerPartsTypeThigh,
    
    /**
     * 小腿
     */
    ICRulerPartsTypeCalf,
    

};

/**
 性别
 */
typedef NS_ENUM(NSInteger,ICSexType)
{
    /**
     * 未知/保密
     */
    ICSexTypeUnknown = 0,

    /**
     * 男
     */
    ICSexTypeMale = 1,
    
    /**
     * 女
     */
    ICSexTypeFemal
};

/**
 厨房秤营养成分类型
 */
typedef NS_ENUM(NSUInteger, ICKitchenScaleNutritionFactType) {
    /*
     *  卡路里, 最大不超过4294967295
     */
    ICKitchenScaleNutritionFactTypeCalorie,
    
    /*
     *  总卡路里, 最大不超过4294967295
     */
    ICKitchenScaleNutritionFactTypeTotalCalorie,
    
    /*
     *  总脂肪
     */
    ICKitchenScaleNutritionFactTypeTotalFat,
    
    /*
     *  总蛋白质
     */
    ICKitchenScaleNutritionFactTypeTotalProtein,
    
    /*
     *  总碳水化合物
     */
    ICKitchenScaleNutritionFactTypeTotalCarbohydrates,
    
    /*
     *  总脂肪纤维
     */
    ICKitchenScaleNutritionFactTypeTotalFiber,
    
    /*
     *  总胆固醇
     */
    ICKitchenScaleNutritionFactTypeTotalCholesterd,
    
    /*
     *  总钠含量
     */
    ICKitchenScaleNutritionFactTypeTotalSodium,
    
    /*
     *  总糖含量
     */
    ICKitchenScaleNutritionFactTypeTotalSugar,
    
    /*
     * 脂肪
     */
    ICKitchenScaleNutritionFactTypeFat,
    
    /*
     * 蛋白质
     */
    ICKitchenScaleNutritionFactTypeProtein,
    
    /*
     * 碳水化合物
     */
    ICKitchenScaleNutritionFactTypeCarbohydrates,
    
    /*
     * 膳食纤维
     */
    ICKitchenScaleNutritionFactTypeFiber,
    
    /*
     * 胆固醇
     */
    ICKitchenScaleNutritionFactTypeCholesterd,
    
    /*
     * 钠含量
     */
    ICKitchenScaleNutritionFactTypeSodium,
    
    /*
     * 糖含量
     */
    ICKitchenScaleNutritionFactTypeSugar,
};

/**
 算法版本
 */
typedef enum : NSUInteger {
#if ENABLE_WLA01
    /*
     * 含水肌肉率
     */
    ICBFATypeWLA01 = 0,
#endif
#if ENABLE_WLA02
    /*
     * 不含水肌肉率
     */
    ICBFATypeWLA02 = 1,
#endif
#if ENABLE_WLA03
    /*
     * 新算法1
     */
    ICBFATypeWLA03 = 2,
#endif
#if ENABLE_WLA04
    /*
     * 新算法2
     */
    ICBFATypeWLA04 = 3,
#endif
#if ENABLE_WLA05
    /*
     * 新算法3
     */
    ICBFATypeWLA05 = 4,
#endif
#if ENABLE_WLA06
    /*
     * 新算法4
     */
    ICBFATypeWLA06 = 5,
#endif
#if ENABLE_WLA07
    /*
     * 新算法WLA07
     */
    ICBFATypeWLA07 = 6,
#endif
#if ENABLE_WLA08
    /*
     * 新算法WLA08
     */
    ICBFATypeWLA08 = 7,
#endif
#if ENABLE_WLA09
    /*
     * 新算法WLA09
     */
    ICBFATypeWLA09 = 8,
#endif
#if ENABLE_WLA10
    /*
     * 新算法WLA10
     */
    ICBFATypeWLA10 = 9,
#endif
#if ENABLE_WLA11
    /*
     * 新算法WLA11
     */
    ICBFATypeWLA11 = 10,
#endif
#if ENABLE_WLA12
    /*
     * 新算法WLA12
     */
    ICBFATypeWLA12 = 11,
#endif
#if ENABLE_WLA13
    /*
     * 新算法WLA13
     */
    ICBFATypeWLA13 = 12,
#endif
#if ENABLE_WLA14
    /*
     * 新算法WLA14
     */
    ICBFATypeWLA14 = 13,
#endif
#if ENABLE_WLA15
    /*
     * 新算法WLA15
     */
    ICBFATypeWLA15 = 14,
#endif
#if ENABLE_WLA16
    /*
     * 新算法WLA16
     */
    ICBFATypeWLA16 = 15,
#endif
#if ENABLE_WLA17
    /*
     * 新算法WLA17
     */
    ICBFATypeWLA17 = 16,
#endif
#if ENABLE_WLA18
    /*
     * 新算法WLA18
     */
    ICBFATypeWLA18 = 17,
#endif
#if ENABLE_WLA19
    /*
     * 新算法WLA19
     */
    ICBFATypeWLA19 = 18,
#endif
#if ENABLE_WLA22
    /*
     * 新算法WLA22
     */
    ICBFATypeWLA22 = 21,
#endif
#if ENABLE_WLA23
    /*
     * 新算法WLA23
     */
    ICBFATypeWLA23 = 22,
#endif
#if ENABLE_WLA24
    /*
     * 新算法WLA24
     */
    ICBFATypeWLA24 = 23,
#endif
    ICBFATypeUnknown = 100,
    ICBFATypeRev = 101

} ICBFAType;

/**
 用户类型
 */
typedef enum : NSUInteger {
    /*
     * 普通人
     */
    ICPeopleTypeNormal,

    /*
     * 运动员
     */
    ICPeopleTypeSportman,
} ICPeopleType;

/**
 数据类型
 */
typedef enum : NSUInteger {
    /*
     * 测量体重 (ICWeightData)
     */
    ICMeasureStepMeasureWeightData,
    
    /*
     * 测量平衡 (ICWeightCenterData)
     */
    ICMeasureStepMeasureCenterData,
    
    /*
     * 开始测量阻抗
     */
    ICMeasureStepAdcStart,

    /*
     * 测量阻抗结束 (ICWeightData)
     */
    ICMeasureStepAdcResult,
    
    /*
     * 开始测量心率
     */
    ICMeasureStepHrStart,
    
    /*
     * 测量心率结束 (ICWeightData)
     */
    ICMeasureStepHrResult,
    
    /*
     * 测量结束
     */
    ICMeasureStepMeasureOver,

} ICMeasureStep;



/**
 * 跳绳模式
 */
typedef enum : NSUInteger {
    /**
     * 自由跳
     */
    ICSkipModeFreedom = 0,
    
    /**
     * 计时跳
     */
    ICSkipModeTiming,
    
    /**
     * 计次跳
     */
    ICSkipModeCount
} ICSkipMode;

/**
 * 升级状态
 */
typedef NS_ENUM(NSUInteger, ICUpgradeStatus) {
    /**
     * 升级成功
     */
    ICUpgradeStatusSuccess,
    /**
     * 升级中
     */
    ICUpgradeStatusUpgrading,
    /**
     * 升级失败
     */
    ICUpgradeStatusFail,
    /**
     * 升级失败，文件无效
     */
    ICUpgradeStatusFailFileInvalid,
    /**
     * 升级失败，设备不支持升级
     */
    ICUpgradeStatusFailNotSupport,
};


/**
 * Wifi配网状态
 */
typedef NS_ENUM(NSUInteger, ICConfigWifiState) {
    ICConfigWifiStateSuccess,
    ICConfigWifiStateWifiConnecting,
    ICConfigWifiStateServerConnecting,
    ICConfigWifiStateWifiConnectFail,
    ICConfigWifiStateServerConnectFail,
    ICConfigWifiStatePasswordFail,
    ICConfigWifiStateFail,
};


/*
 * 跳绳灯效模式
 */
typedef NS_ENUM(NSUInteger, ICSkipLightMode) {
    /*
     * 无
     */
    ICSkipLightModeNone,
    /*
     * 速度模式
     */
    ICSkipLightModeRPM,
    /*
     * 计时模式
     */
    ICSkipLightModeTimer,
    /*
     * 计次模式
     */
    ICSkipLightModeCount,
    /*
     * 百分比模式
     */
    ICSkipLightModePercent,
    /*
     * 绊绳次数模式
     */
    ICSkipLightModeTripRope,
    /*
     * 测量模式模式
     */
    ICSkipLightModeMeasuring,
};

#endif /* ICConstant_h */
