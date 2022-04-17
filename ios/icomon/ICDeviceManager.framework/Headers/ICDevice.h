//
//  ICDevice.h
//  ICDeviceManager
//
//  Created by Symons on 2018/7/28.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>

/**
 沃莱设备类
 */
@interface ICDevice : NSObject

/**
 设备mac地址
 */
@property (nonatomic, copy) NSString *macAddr;

@end
