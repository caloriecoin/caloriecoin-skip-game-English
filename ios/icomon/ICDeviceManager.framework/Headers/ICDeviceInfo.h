//
//  ICDeviceInfo.h
//  ICDeviceManager
//
//  Created by Symons on 2020/4/29.
//  Copyright © 2020 Symons. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface ICDeviceInfo : NSObject

@property(nonatomic, strong) NSString *mac;

@property(nonatomic, strong) NSString *model;

@property(nonatomic, strong) NSString *sn;

@property(nonatomic, strong) NSString *firmwareVer;

@property(nonatomic, strong) NSString *hardwareVer;

@property(nonatomic, strong) NSString *softwareVer;

@property(nonatomic, strong) NSString *manufactureName;

@end

NS_ASSUME_NONNULL_END
