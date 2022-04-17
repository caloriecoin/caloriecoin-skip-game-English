//
//  ICDeviceManagerConfig.h
//  ICDeviceManager
//
//  Created by Symons on 2018/7/28.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>

/**
 SDK配置类，用于配置SDK
 */
@interface ICDeviceManagerConfig : NSObject

/**
 蓝牙未打开时,打开app是否弹出的蓝牙未打开对话框(默认:YES)
 */
@property (nonatomic, assign) BOOL isShowPowerAlert;


/**
 是否自动填充连接秤的阻抗(默认:NO)
 */
@property (nonatomic, assign) BOOL is_fill_adc;




@end
