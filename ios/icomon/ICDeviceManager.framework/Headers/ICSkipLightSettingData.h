//
//  ICSkipLightSettingData.h
//  ICDeviceManager
//
//  Created by Symons on 2021/8/6.
//  Copyright © 2021 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface ICSkipLightSettingData : NSObject


/**
 红色(0~255)
 */
@property (nonatomic, assign) NSUInteger r;

/**
 绿色(0~255)
 */
@property (nonatomic, assign) NSUInteger g;

/**
 蓝色(0~255)
 */
@property (nonatomic, assign) NSUInteger b;

/**
 速度(0~255)
 */
@property (nonatomic, assign) NSUInteger modeValue;

@end

NS_ASSUME_NONNULL_END
