//
//  ICDeviceManager.h
//  ICDeviceManager
//
//  Created by Symons on 2018/7/27.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICDeviceManagerDelegate.h"
#import "ICDeviceManagerSettingManager.h"
#import "ICModels_Inc.h"
#import "ICCallback_Inc.h"
#import "ICBodyFatAlgorithmsManager.h"


@interface ICDeviceManager : NSObject

/**
 数据以及状态回调
 */
@property (nonatomic, weak) id<ICDeviceManagerDelegate> delegate;

/**
 蓝牙设备管理单例对象
 
 @return 蓝牙设备管理单例对象
 */
+ (instancetype)shared;

/**
 初始化SDK(默认配置)
 */
- (void)initMgr;

/**
 使用配置类来初始化SDK
 
 @param config 配置项
 */
- (void)initMgrWithConfig:(ICDeviceManagerConfig *)config;

/**
释放
*/
- (void)deInit;

/**
 更新用户信息

 @param userInfo 用户信息
 */
- (void)updateUserInfo:(ICUserInfo *)userInfo;

- (void)setUserList:(NSArray<ICUserInfo *> *)userlist;

/**
 扫描设备
 
 @param delegate 扫描回调
 */
- (void)scanDevice:(id<ICScanDeviceDelegate>)delegate;

/**
 停止扫描
 */
- (void)stopScan;

/**
 添加设备
 */
- (void)addDevice:(ICDevice *)device callback:(ICAddDeviceCallBack)callback;

/**
 添加设备列表(注:有多少个device就会通过block回调多少次)
 */
- (void)addDevices:(NSArray<ICDevice *> *)devices callback:(ICAddDeviceCallBack)callback;

/**
 删除设备
 */
- (void)removeDevice:(ICDevice *)device callback:(ICRemoveDeviceCallBack)callback;

/**
 删除设备列表(注:有多少个device就会通过block回调多少次)
 */
- (void)removeDevices:(NSArray<ICDevice *> *)devices callback:(ICRemoveDeviceCallBack)callback;

- (void)upgradeDevice:(ICDevice *)device filePath:(NSString *)filePath;

- (void)stopUpgradeDevice:(ICDevice *)device;

- (void)upgradeDevices:(NSArray<ICDevice *> *)devices filePath:(NSString *)filePath;

/**
 获取设备设置接口
 
 @return 设备设置接口实例
 */
- (id<ICDeviceManagerSettingManager>)getSettingManager;

/**
 获取体脂算法接口

 @return 体脂算法接口实例
 */
- (id<ICBodyFatAlgorithmsManager>)getBodyFatAlgorithmsManager;

/**
 蓝牙是否已经开启
 @notice 请在初始化回调成功后再调用，否则将返回NO
 */
- (BOOL)isBLEEnable;

/**
 SDK版本
 
 @return SDK版本
 */
+ (NSString *)version;

/**
 sdk日志文件夹路径,仅保留最近7天的日志

 @return 日志文件夹路径
 */
- (NSString *)getLogPath;

@end
