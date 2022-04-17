//
//  ICKitchenScaleData.h
//  ICDeviceManager
//
//  Created by Symons on 2018/8/20.
//  Copyright © 2018年 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICConstant.h"

/**
 厨房秤数据
 */
@interface ICKitchenScaleData : NSObject

/**
 数据是否稳定数, 不稳定的数据只做展示用，请勿保存
 */
@property (nonatomic, assign) BOOL isStabilized;

/**
 数据值,单位:mg
 */
@property (nonatomic, assign) NSUInteger value_mg;

/**
 数据值,单位:G
 */
@property (nonatomic, assign) float value_g;

/**
 数据值,单位:ml
 */
@property (nonatomic, assign) float value_ml;

/**
 数据值,单位:ml milk
 */
@property (nonatomic, assign) float value_ml_milk;

/**
 数据值,单位:oz
 */
@property (nonatomic, assign) float value_oz;

/**
 数据值,单位:lb:oz中的lb
 */
@property (nonatomic, assign) NSUInteger value_lb;

/**
 数据值,单位:lb:oz中的oz
 */
@property (nonatomic, assign) float value_lb_oz;

/**
 数据值,单位:fl.oz
 */
@property (nonatomic, assign) float value_fl_oz;

/**
 数据值,单位:fl.oz，英制
 */
@property (nonatomic, assign) float value_fl_oz_uk;

/**
 数据值,单位:fl.oz,美制
 */
@property (nonatomic, assign) float value_fl_oz_milk;

/**
 数据值,单位:fl.oz，英制
 */
@property (nonatomic, assign)  float value_fl_oz_milk_uk;
/**
 测量时间戳(秒)
 */
@property (nonatomic, assign) NSUInteger time;

/**
 本次数据单位
 */
@property (nonatomic, assign) ICKitchenScaleUnit unit;

/**
 小数点位数,如:value_g=70.12,则precision=2，value_g=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_g ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_ml ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_lboz ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_oz ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_ml_milk ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_floz_us ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_floz_uk ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_floz_milk_us ;
/**
 小数点位数,如:value_lb=70.12,则precision=2，value_lb=71.5,则precision=1
 */
@property (nonatomic, assign) NSUInteger precision_floz_milk_uk ;

/**
  设备数据单位类型,0:公制，1:美制，2:英制
 */
@property (nonatomic, assign) NSUInteger unitType;


/**
 数字是否负数
 */
@property (nonatomic, assign) BOOL isNegative;

/**
 是否去皮模式
 */
@property (nonatomic, assign) BOOL isTare;



@end
