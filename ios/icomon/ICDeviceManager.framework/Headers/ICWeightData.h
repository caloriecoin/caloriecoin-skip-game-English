//
//  ICWeightData.h
//  ICDeviceManager
//
//  Created by Symons on 2018/8/7.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICConstant.h"

/**
 体重扩展数据,主要是8电极的部分数据
 */
@interface ICWeightExtData : NSObject

/**
 左手体脂率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float left_arm;

/**
 右手体脂率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float right_arm;

/**
 左脚体脂率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float left_leg;

/**
 右脚体脂率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float right_leg;

/**
 躯干体脂率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float all_body;


/**
 左手脂肪量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float left_arm_kg;

/**
 右手脂肪量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float right_arm_kg;

/**
 左脚脂肪量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float left_leg_kg;

/**
 右脚脂肪量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float right_leg_kg;

/**
 躯干脂肪量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float all_body_kg;

/**
 左手肌肉率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float left_arm_muscle;

/**
 右手肌肉率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float right_arm_muscle;

/**
 左脚肌肉率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float left_leg_muscle;

/**
 右脚肌肉率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float right_leg_muscle;

/**
 躯干肌肉率(单位:%, 精度:0.1)
 */
@property (nonatomic, assign) float all_body_muscle;


/**
 左手肌肉量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float left_arm_muscle_kg;

/**
 右手肌肉量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float right_arm_muscle_kg;

/**
 左脚肌肉量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float left_leg_muscle_kg;

/**
 右脚肌肉量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float right_leg_muscle_kg;

/**
 躯干肌肉量(单位:kg, 精度:0.1)
 */
@property (nonatomic, assign) float all_body_muscle_kg;

@end

/**
 体重数据
 */
@interface ICWeightData : NSObject

/**
 数据是否稳定
 @notice 如果数据不稳定，则只有weight_kg和weight_lb有效，不稳定的数据只做展示用，请勿保存
 */
@property (nonatomic, assign) BOOL isStabilized;

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
 温度,单位:摄氏度
 */
@property (nonatomic, assign) float temperature;

/**
 测量时间戳(秒)
 */
@property (nonatomic, assign) NSUInteger time;

/**
 支持心率测量
 */
@property (nonatomic, assign) BOOL isSupportHR;

/**
 心率值
 */
@property (nonatomic, assign) NSUInteger hr;

/**
 身体质量指数BMI(精度:0.1)
 */
@property (nonatomic, assign) float bmi;

/**
 体脂率(百分比, 精度:0.1)
 */
@property (nonatomic, assign) float bodyFatPercent;

/**
 皮下脂肪率(百分比, 精度:0.1)
 */
@property (nonatomic, assign) float subcutaneousFatPercent;

/**
 内脏脂肪指数(精度:0.1)
 */
@property (nonatomic, assign) float visceralFat;

/**
 肌肉率(百分比, 精度:0.1)
 */
@property (nonatomic, assign) float musclePercent;

/**
 基础代谢率(单位:kcal)
 */
@property (nonatomic, assign) NSUInteger bmr;

/**
 骨重(单位:kg,精度:0.1)
 */
@property (nonatomic, assign) float boneMass;

/**
 水含量(百分比,精度:0.1)
 */
@property (nonatomic, assign) float moisturePercent;

/**
 身体年龄
 */
@property (nonatomic, assign) float physicalAge;

/**
 蛋白率(百分比,精度:0.1)
 */
@property (nonatomic, assign) float proteinPercent;

/**
 骨骼肌率(百分比,精度:0.1)
 */
@property (nonatomic, assign) float smPercent;

/**
 身体评分
 */
@property (nonatomic, assign) float bodyScore;

/**
 身体类型
 */
@property (nonatomic, assign) NSUInteger bodyType;

/**
 目标体重
 */
@property (nonatomic, assign) float targetWeight;

/**
 标准脂肪量
 */
@property (nonatomic, assign) float targetBodyfatMass;

/**
 标准肌肉量
 */
@property (nonatomic, assign) float targetSMMMass;

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
 体重扩展数据(8电极的部分数据在这里面)
 */
@property (nonatomic, strong) ICWeightExtData *extData;

/**
 数据计算方式(0:sdk，1:设备计算)
 */
@property (nonatomic, assign) NSUInteger data_calc_type;

/**
 本次体脂数据计算的算法类型
 */
@property (nonatomic, assign) ICBFAType bfa_type;

@property (nonatomic, assign) NSUInteger state;

@property (nonatomic, assign) NSUInteger impendenceType;

@property (nonatomic, assign) NSUInteger impendenceProperty;
@property (nonatomic, strong) NSArray<NSNumber *> *impendences;

@end
