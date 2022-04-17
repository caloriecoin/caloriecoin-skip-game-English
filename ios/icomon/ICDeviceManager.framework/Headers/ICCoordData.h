//
//  ICCoordData.h
//  ICDeviceManager
//
//  Created by Symons on 2018/8/10.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>

/**
 坐标数据
 */
@interface ICCoordData : NSObject

/**
 测量时间戳(秒)
 */
@property (nonatomic, assign) NSUInteger time;

/**
 x坐标
 */
@property (nonatomic, assign) NSInteger x;

/**
 y坐标
 */
@property (nonatomic, assign) NSInteger y;

@end
