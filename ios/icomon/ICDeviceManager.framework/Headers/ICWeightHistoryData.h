//
//  ICWeightHistoryData.h
//  ICDeviceManager
//
//  Created by Symons on 2019/4/22.
//  Copyright © 2019 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICWeightCenterData.h"
#import "ICWeightData.h"
#import "ICConstant.h"

/**
 体重历史数据
 */
@interface ICWeightHistoryData : NSObject

/**
 体重(g)
 */
@property (nonatomic, assign) NSUInteger weight_g;

/**
 体重(kg)
 */
@property (nonatomic, assign) float weight_kg;

/**
 体重(lb)
 */
@property (nonatomic, assign) float weight_lb;

/**
 体重(st:lb)，注:这个字段跟weight_st_lb一起使用
 */
@property (nonatomic, assign) NSUInteger weight_st;

/**
 体重(st:lb)，注:这个字段跟weight_st一起使用
 */
@property (nonatomic, assign) float weight_st_lb;

/**
 kg体重小数点位数,如:weight_kg=70.12,则precision=2，weight_kg=71.5,则precision_kg=1
 */
@property (nonatomic, assign) NSUInteger precision_kg;

/**
 lb体重小数点位数,如:weight_lb=70.12,则precision=2，weight_lb=71.5,则precision_lb=1
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
 测量时间戳(秒)
 */
@property (nonatomic, assign) NSUInteger time;

/**
 心率值
 */
@property (nonatomic, assign) NSUInteger hr;

/**
 电极数，4电极或者8电极
 */
@property (nonatomic, assign) NSUInteger electrode;

/**
 全身阻抗(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
 */
@property (nonatomic, assign) float imp;

/**
 左手阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
 */
@property (nonatomic, assign) float imp2;

/**
 右手阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
 */
@property (nonatomic, assign) float imp3;

/**
 左腳阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
 */
@property (nonatomic, assign) float imp4;

/**
 右腳阻抗(8电极)(单位:欧姆ohm),如阻抗等于0，则代表测量不到阻抗
 */
@property (nonatomic, assign) float imp5;

/**
 平衡数据
 */
@property (nonatomic, strong) ICWeightCenterData *centerData;

/**
 数据计算方式(0:sdk，1:设备计算)
 */
@property (nonatomic, assign) NSUInteger data_calc_type;

/**
 本次体脂数据计算的算法类型
 */
@property (nonatomic, assign) ICBFAType bfa_type;


@property (nonatomic, assign) NSUInteger impendenceType;

@property (nonatomic, assign) NSUInteger impendenceProperty;

@property (nonatomic, strong) NSArray<NSNumber *> *impendences;

@end


