//
//  ICBodyFatAlgorithms.h
//  ICDeviceManager
//
//  Created by Symons on 2018/9/26.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICModels_Inc.h"

/**
 体脂算法接口
 */
@protocol ICBodyFatAlgorithmsManager <NSObject>

/**
 BMI
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 身体指数，浮点精度:0.1
 */
- (float)getBMI:(float)weight height:(NSUInteger)height bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 体脂率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型

 @return 体脂率,浮点精度:0.01
 */
- (float)getBodyFatPercent:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 皮下脂肪率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 皮下脂肪率,浮点精度:0.01
 */
- (float)getSubcutaneousFatPercent:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 内脏脂肪率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 内脏脂肪率,浮点精度:0.01
 */
- (float)getVisceralFat:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 肌肉率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 肌肉率,浮点精度:0.01
 */
- (float)getMusclePercent:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 基础代谢率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 基础代谢率,浮点精度:0.01
 */
- (NSUInteger)getBMR:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 骨量
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 骨量,浮点精度:0.01
 */
- (float)getBoneMass:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 水分率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 水分率,浮点精度:0.01
 */
- (float)getMoisturePercent:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 身体年龄
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 身体年龄
 */
- (NSUInteger)getPhysicalAge:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 蛋白率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 蛋白率
 */
- (float)getProtein:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;


/**
 骨骼肌率
 
 @param weight 体重,单位:kg，浮点精度:0.1
 @param height 身高,单位:cm
 @param age 年龄
 @param imp 阻抗,单位:ohm
 @param sex 性别
 @param bfaType 体脂算法版本
 @param peopleType 用户类型
 @return 骨骼肌率
 */
- (float)getSkeletalMuscle:(float)weight height:(NSUInteger)height age:(NSUInteger)age imp:(double)imp sex:(ICSexType)sex bfaType:(ICBFAType)bfaType peopleType:(ICPeopleType)peopleType;

/**
 重算体脂数据

 @param weightData 体重数据(原来sdk回调出去的数据)
 @param userInfo 用户信息
 @return 重算后的数据
 */
- (ICWeightData *)reCalcBodyFatWithWeightData:(ICWeightData *)weightData userInfo:(ICUserInfo *)userInfo;

@end
