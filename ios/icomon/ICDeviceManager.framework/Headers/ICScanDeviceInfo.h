//
//  ICScanDeviceInfo.h
//  ICDeviceManager
//
//  Created by Symons on 2018/7/28.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICConstant.h"

/**
 扫描到的蓝牙设备信息
 */
@interface ICScanDeviceInfo : NSObject

/**
 广播名
 */
@property (nonatomic, strong) NSString *name;

/**
 设备类型
 */
@property (nonatomic, assign) ICDeviceType type;

/**
 设备子类型
 */
@property (nonatomic, assign) ICDeviceSubType subType;

/**
 设备通讯方式
 */
@property (nonatomic, assign) ICDeviceCommunicationType communicationType;
    
/**
 mac地址
 */
@property (nonatomic, strong) NSString *macAddr;

/**
 服务ID列表
 */
@property (nonatomic, strong) NSArray<NSString *> *services;

/**
 信号强度(越小越大，0:系统配对设备，-128:信号值有误)
 */
@property (nonatomic, assign) NSInteger rssi;

@end
