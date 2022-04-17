//
//  ICSkipData.h
//  ICDeviceManager
//
//  Created by Symons on 2019/10/19.
//  Copyright © 2019 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ICConstant.h"

NS_ASSUME_NONNULL_BEGIN

/**
 * 跳绳频次
 */
@interface ICSkipFreqData : NSObject

/**
 * 持续时间
 */
@property (nonatomic, assign) NSUInteger duration;

/**
 * 次数
 */
@property (nonatomic, assign) NSUInteger skip_count;

@end

/**
 * 跳绳数据
 */
@interface ICSkipData : NSObject


    /**
     是否稳定
     */
    @property (nonatomic, assign) BOOL isStabilized;
    
    /**
     * 测量时间，单位:秒
     */
    @property (nonatomic, assign) NSUInteger time;
    
    /**
     * 跳绳模式
     */
    @property (nonatomic, assign) ICSkipMode mode;
    
    /**
     * 设置的参数
     */
    @property (nonatomic, assign) NSUInteger  setting;
    
    /**
     * 跳绳使用的时间
     */
    @property (nonatomic, assign) NSUInteger elapsed_time;
    
    /**
     * 跳的次数
     */
    @property (nonatomic, assign) NSUInteger skip_count;
    
    /**
     * 平均频次
     */
    @property (nonatomic, assign) NSUInteger  avg_freq;
    
    /**
     * 最快频次
     */
    @property (nonatomic, assign) NSUInteger fastest_freq;

    /**
     * 热量消耗
     */
    @property (nonatomic, assign) double calories_burned;

    /**
     * 燃脂效率
     */
    @property (nonatomic, assign) double fat_burn_efficiency;

    /**
     * 绊绳总数
     */
    @property (nonatomic, assign) NSUInteger freq_count;

    /**
     * 最多连跳
     */
    @property (nonatomic, assign) NSUInteger most_jump;


    /**
     * 跳绳频次数据
     */
    @property (nonatomic, strong) NSArray<ICSkipFreqData *> *freqs;
@end

NS_ASSUME_NONNULL_END
