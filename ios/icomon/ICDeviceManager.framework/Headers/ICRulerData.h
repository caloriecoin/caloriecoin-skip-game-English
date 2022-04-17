//
//  ICRulerData.h
//  ICDeviceManager
//
//  Created by Symons on 2018/8/9.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICConstant.h"

/**
 围尺数据
 */
@interface ICRulerData : NSObject

/**
 数据是否稳定
 @notice 如果数据不稳定，则只有distance有效，不稳定的数据只做展示用，请勿保存
 */
@property (nonatomic, assign) BOOL isStabilized;

/**
 距离inch
 */
@property (nonatomic, assign) float distance_in;

/**
 距离cm
 */
@property (nonatomic, assign) float distance_cm;


/**
 距离ft
 */
@property (nonatomic, assign) NSUInteger distance_ft;

/**
 距离ft_in
 */
@property (nonatomic, assign) float distance_ft_in;


/**
 测量长度(0.1mm)
 */
@property (nonatomic, assign) NSUInteger distance;

/**
 测量时间戳(秒)
 */
@property (nonatomic, assign) NSUInteger time;

/**
 身体部位类型
 */
@property (nonatomic, assign) ICRulerBodyPartsType partsType;

/**
 inch距离小数点位数,如:distance_in=70.12,则precision_in=2，distance_in=71.5,则precision_in=1
 */
@property (nonatomic, assign) NSUInteger precision_in;

/**
 cm距离小数点位数,如:distance_cm=70.12,则precision_cm=2，distance_cm=71.5,则precision_cm=1
 */
@property (nonatomic, assign) NSUInteger precision_cm;

/**
 本次测量的单位
 */
@property (nonatomic, assign) ICRulerUnit unit;

/**
 本次的测量模式
 */
@property (nonatomic, assign) ICRulerMeasureMode mode;

@end
