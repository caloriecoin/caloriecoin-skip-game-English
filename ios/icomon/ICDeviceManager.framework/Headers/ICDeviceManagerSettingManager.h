//
//  LSSettingManager.h
//  ICDeviceManager
//
//  Created by lifesense－mac on 17/3/20.
//  Copyright © 2017年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICModels_Inc.h"

@class ICDevice;


/**
 设置回调

 @param code 设置回调代码
 */
typedef void(^ICSettingCallback)(ICSettingCallBackCode code);

/**
 设备设置
 */
@protocol ICDeviceManagerSettingManager <NSObject>

/**
 设置称单位
 
 @param device          设备
 @param unit            单位
 @param callback        回调
 */
- (void)setScaleUnit:(ICDevice *)device unit:(ICWeightUnit)unit callback:(ICSettingCallback)callback;

/**
 设置围尺单位
 
 @param device      设备
 @param unit        单位
 @param callback    回调
 */
- (void)setRulerUnit:(ICDevice *)device unit:(ICRulerUnit)unit callback:(ICSettingCallback)callback;

/**
 设置当前围尺身体部位
 
 @param device      设备
 @param type        身体部位
 @param callback    回调
 */
- (void)setRulerBodyPartsType:(ICDevice *)device type:(ICRulerBodyPartsType)type callback:(ICSettingCallback)callback;

/**
 设置重量到厨房秤，单位:毫克

 @param device 设备
 @param weight 重量，单位:毫克，最大不能超过65535毫克
 @param callback 回调
 */
- (void)setWeight:(ICDevice *)device weight:(NSInteger)weight callback:(ICSettingCallback)callback;

/**
 设置厨房秤去皮重量

 @param device 设备
 @param callback 回调
 */
- (void)deleteTareWeight:(ICDevice *)device callback:(ICSettingCallback)callback;
/**
设置厨房秤关机

@param device 设备
@param callback 回调
*/
- (void)powerOffKitchenScale:(ICDevice *)device callback:(ICSettingCallback)callback;
/**
 设置厨房秤计量单位

 @param device 设备
 @param unit 单位，注:如果秤不支持该单位，将不会生效
 @param callback 回调
 */
- (void)setKitchenScaleUnit:(ICDevice *)device unit:(ICKitchenScaleUnit)unit callback:(ICSettingCallback)callback;

/**
 设置营养成分值到厨房秤

 @param device 设备
 @param type 营养类型
 @param value 营养值
 @param callback 回调
 */
- (void)setNutritionFacts:(ICDevice *)device type:(ICKitchenScaleNutritionFactType)type value:(NSInteger)value callback:(ICSettingCallback)callback;

/**
 设置围尺测量模式
 
 @param device      设备
 @param mode        测量模式
 @param callback    回调
 */
- (void)setRulerMeasureMode:(ICDevice *)device mode:(ICRulerMeasureMode)mode callback:(ICSettingCallback)callback;


/**
 * 开始跳绳
 * @param device 设备
 * @param mode   跳绳模式
 * @param param  模式参数
 * @param callback 回调
 */
- (void)startSkip:(ICDevice *)device mode:(ICSkipMode)mode param:(NSUInteger)param callback:(ICSettingCallback)callback;


/**
 * 停止跳绳
 * @param device 设备
 * @param callback 回调
 */
- (void)stopSkip:(ICDevice *)device callback:(ICSettingCallback)callback;

/**
 设置用户信息给设备，调用该接口后，updateUserInfo接口将不会再对该设备生效
 注意:目前仅跳绳设备支持

@param device      设备
@param userInfo    用户信息
*/
- (void)setUserInfo:(ICDevice *)device userInfo:(ICUserInfo *)userInfo;


/**
 双模设备配网

@param device        设备
@param ssid             WIFI SSID
@param password    WIFI Password
*/
- (void)configWifi:(ICDevice *)device  ssid:(NSString *)ssid password:(NSString *)password callback:(ICSettingCallback)callback;

/**
 双模设备更换设备域名

@param device        设备
@param server          App服务器域名,如:https://www.google.com
*/
- (void)setServerUrl:(ICDevice *)device  server:(NSString *)server callback:(ICSettingCallback)callback;



/**
 设置厂商特定参数

 @param device      设备
 @param type        根据客户意思不一样
 */
- (void)setOtherParams:(ICDevice *)device type:(NSUInteger)type param:(NSObject *)param callback:(ICSettingCallback)callback;


/**
 * 设置跳绳设备灯效
 * @param device 设备
 * @param lightEffects 跳绳灯效颜色
 * @param mode 等效的模式
 * @param callback 回调
 */
- (void)setSkipLightSetting:(ICDevice *)device lightEffects:(NSArray<ICSkipLightSettingData *> *)lightEffects mode:(ICSkipLightMode)mode callback:(ICSettingCallback)callback;


@end
