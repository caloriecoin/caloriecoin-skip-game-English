//
//  ICElectrodeData.h
//  ICDeviceManager
//
//  Created by Symons on 2019/3/12.
//  Copyright © 2019 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>


/**
 电极数据
 */
@interface ICElectrodeData : NSObject

/**
 左上重量(单位:kg)
 */
@property (nonatomic, assign) NSUInteger weightLT_kg;

/**
 左下重量(单位:kg)
 */
@property (nonatomic, assign) NSUInteger weightLB_kg;

/**
 右上重量(单位:kg)
 */
@property (nonatomic, assign) NSUInteger weightRT_kg;

/**
 右下重量(单位:kg)
 */
@property (nonatomic, assign) NSUInteger weightRB_kg;


@end

