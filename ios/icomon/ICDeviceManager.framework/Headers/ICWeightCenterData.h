//
//  ICWeightCenterData.h
//  ICDeviceManager
//
//  Created by Symons on 2018/11/5.
//  Copyright © 2018 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 体重重心数据
 */
@interface ICWeightCenterData : NSObject

/**
 数据是否稳定, 不稳定的数据只做展示用，请勿保存
 */
@property (nonatomic, assign) BOOL isStabilized;

/**
 测量时间戳(秒)
 */
@property (nonatomic, assign) NSUInteger time;

/**
 kg体重小数点位数,如:weight=70.12,则precision=2，weight=71.5,则precision_kg=1
 */
@property (nonatomic, assign) NSUInteger precision_kg;

/**
 lb体重小数点位数,如:weight=70.12,则precision=2，weight=71.5,则precision_lb=1
 */
@property (nonatomic, assign) NSUInteger precision_lb;

/**
 st:lb体重小数点位数
 */
@property (nonatomic, assign) NSUInteger precision_st_lb;

/**
 kg分度值
 */
@property (nonatomic, assign) NSUInteger kg_scale_division;

/**
 lb分度值
 */
@property (nonatomic, assign) NSUInteger lb_scale_division;

/**
 左边体重(g)
 */
@property (nonatomic, assign) NSUInteger left_weight_g;

/**
 右边体重(g)
 */
@property (nonatomic, assign) NSUInteger right_weight_g;


/**
 左边体重占比(%)
 */
@property (nonatomic, assign) NSUInteger leftPercent;

/**
 右边体重占比(%)
 */
@property (nonatomic, assign) NSUInteger rightPercent;

/**
 左边体重(kg)
 */
@property (nonatomic, assign) float left_weight_kg;

/**
 右边体重(kg)
 */
@property (nonatomic, assign) float right_weight_kg;

/**
 左边体重(lb)
 */
@property (nonatomic, assign) float left_weight_lb;

/**
 右边体重(lb)
 */
@property (nonatomic, assign) float right_weight_lb;

/**
 左边体重(st:lb)
 */
@property (nonatomic, assign) NSUInteger left_weight_st;

/**
 右边体重(st:lb)
 */
@property (nonatomic, assign) NSUInteger right_weight_st;

/**
 左边体重(st:lb)
 */
@property (nonatomic, assign) float left_weight_st_lb;

/**
 右边体重(st:lb)
 */
@property (nonatomic, assign) float right_weight_st_lb;

@end

NS_ASSUME_NONNULL_END
