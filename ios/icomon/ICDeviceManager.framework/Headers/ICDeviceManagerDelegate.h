//
//  ICDeviceManagerDelegate.h
//  ICDeviceManager
//
//  Created by Symons on 2018/7/28.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICModels_Inc.h"

@protocol ICDeviceManagerDelegate <NSObject>

@required
/**
 SDKc初始化完成回调
 
 @param bSuccess 初始化是否成功
 */
- (void)onInitFinish:(BOOL)bSuccess;

@optional

/**
 蓝牙改变状态回调
 
 @param state 蓝牙状态
 */
- (void)onBleState:(ICBleState)state;

/**
 设备连接状态回调
 
 @param device 设备
 @param state 连接状态
 */
- (void)onDeviceConnectionChanged:(ICDevice *)device state:(ICDeviceConnectState)state;

/**
 体重秤数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveWeightData:(ICDevice *)device data:(ICWeightData *)data;


/**
 厨房秤数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveKitchenScaleData:(ICDevice *)device data:(ICKitchenScaleData *)data;


/**
 厨房秤单位改变

 @param device 设备
 @param unit 改变后的单位
 */
- (void)onReceiveKitchenScaleUnitChanged:(ICDevice *)device unit:(ICKitchenScaleUnit)unit;


/**
 平衡秤坐标数据回调
 
 @param device 设备
 @param data 测量坐标数据
 */
- (void)onReceiveCoordData:(ICDevice *)device data:(ICCoordData *)data;

/**
 围尺数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveRulerData:(ICDevice *)device data:(ICRulerData *)data;

/**
 围尺历史数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveRulerHistoryData:(ICDevice *)device data:(ICRulerData *)data;

/**
 平衡数据回调
 
 @param device 设备
 @param data 平衡数据
 */
- (void)onReceiveWeightCenterData:(ICDevice *)device data:(ICWeightCenterData *)data;

/**
 设备单位改变回调

 @param device  设备
 @param unit    设备当前单位
 */
- (void)onReceiveWeightUnitChanged:(ICDevice *)device unit:(ICWeightUnit)unit;


/**
 围尺单位改变回调
 
 @param device 设备
 @param unit 设备当前单位
 */
- (void)onReceiveRulerUnitChanged:(ICDevice *)device unit:(ICRulerUnit)unit;

/**
 围尺测量模式改变回调
 
 @param device 设备
 @param mode 设备当前测量模式
 */
- (void)onReceiveRulerMeasureModeChanged:(ICDevice *)device mode:(ICRulerMeasureMode)mode;


/**
 4个传感器数据回调
 
 @param device 设备
 @param data 传感器数据
 */
- (void)onReceiveElectrodeData:(ICDevice *)device data:(ICElectrodeData *)data;

/**
 分步骤体重、平衡、阻抗、心率数据回调
 
 @param device  设备
 @param step    当前处于的步骤
 @param data    数据
 */
- (void)onReceiveMeasureStepData:(ICDevice *)device step:(ICMeasureStep)step data:(NSObject *)data;

/**
 体重历史数据回调
 
 @param device 设备
 @param data 体重历史数据
 */
- (void)onReceiveWeightHistoryData:(ICDevice *)device data:(ICWeightHistoryData *)data;


/**
 跳绳实时数据回调
 
 @param device 设备
 @param data 体重历史数据
 */
- (void)onReceiveSkipData:(ICDevice *)device data:(ICSkipData *)data;


/**
 跳绳历史数据回调
 
 @param device 设备
 @param data 跳绳历史数据
 */
- (void)onReceiveHistorySkipData:(ICDevice *)device data:(ICSkipData *)data;

/**
 跳绳电量
 
 @param device 设备
 @param battery 电量，范围:0~100
 */
- (void)onReceiveSkipBattery:(ICDevice *)device battery:(NSUInteger)battery;

/**
 设备升级状态回调
 @param device 设备
 @param status 升级状态
 @param percent 升级进度,范围:0~100
 */
- (void)onReceiveUpgradePercent:(ICDevice *)device status:(ICUpgradeStatus)status percent:(NSUInteger)percent;

/**
 设备信息回调

 @param device 设备
 @param deviceInfo 设备信息
 */
- (void)onReceiveDeviceInfo:(ICDevice *)device deviceInfo:(ICDeviceInfo *)deviceInfo;

/**
 * 配网结果回调
 * @param device 设备
 * @param state 配网状态
 */
- (void)onReceiveConfigWifiResult:(ICDevice *)device state:(ICConfigWifiState)state;

@end
