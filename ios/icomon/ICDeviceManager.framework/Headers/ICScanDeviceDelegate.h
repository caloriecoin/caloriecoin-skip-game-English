//
//  ICScanDeviceDelegate.h
//  ICDeviceManager
//

#import <Foundation/Foundation.h>

@class ICScanDeviceInfo;

/**
 扫描结果回调代理
 */
@protocol ICScanDeviceDelegate <NSObject>

/**
 扫描结果回调

 @param deviceInfo 扫描到的设备
 */
- (void)onScanResult:(ICScanDeviceInfo *)deviceInfo;

@end
