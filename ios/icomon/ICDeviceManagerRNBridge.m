//
//  ICDeviceManagerRNBridge.m
//  BleDemo
//
//  Created by Symons on 2021/7/7.
//

#import "ICDeviceManagerRNBridge.h"
#import <ICDeviceManager/ICDeviceManager.h>
#import "MJExtension.h"

//#define CALL_RET_STATE(ret) if (callback) {callback(ret ? @"ok" : @"fail", NO);}
#define CALL_RET_INT(ret) if (callback) {callback(ret);}

#define ToDevice(dict) ICDevice *deviceObj = [ICDevice new]; deviceObj.macAddr = dict[@"macAddr"];


@interface ICDeviceManagerRNBridge () <ICDeviceManagerDelegate, ICScanDeviceDelegate>

@end


@implementation ICDeviceManagerRNBridge

RCT_EXPORT_MODULE(ICDeviceManagerRNBridge);



- (NSArray<NSString *> * )supportedEvents
{
  return @[@"onScanResult", @"onDeviceManagerDelegate"];
}


RCT_EXPORT_METHOD(initMgr)
{
  [ICDeviceManager shared].delegate = self;
  [[ICDeviceManager shared] initMgr];
}

RCT_EXPORT_METHOD(updateUserInfo:(NSDictionary *)userInfoDict)
{
    ICUserInfo *userInfo = [ICUserInfo new];
    if (userInfoDict[@"age"]) {
        userInfo.age = [userInfoDict[@"age"] intValue];
    }
    if (userInfoDict[@"height"]) {
        userInfo.height = [userInfoDict[@"height"] intValue];
    }
    if (userInfoDict[@"sex"]) {
        userInfo.sex = [userInfoDict[@"sex"] intValue];
    }
    if (userInfoDict[@"weight"]) {
        userInfo.weight = [userInfoDict[@"weight"] floatValue];
    }
    if (userInfoDict[@"bfaType"]) {
        userInfo.bfaType = [userInfoDict[@"bfaType"] intValue];
    }
    if (userInfoDict[@"weightUnit"]) {
        userInfo.weightUnit = [userInfoDict[@"weightUnit"] intValue];
    }
    if (userInfoDict[@"rulerUnit"]) {
        userInfo.rulerUnit = [userInfoDict[@"rulerUnit"] intValue];
    }
    if (userInfoDict[@"peopleType"]) {
        userInfo.peopleType = [userInfoDict[@"peopleType"] intValue];
    }
    if (userInfoDict[@"rulerMode"]) {
        userInfo.rulerMode = [userInfoDict[@"rulerMode"] intValue];
    }
    if (userInfoDict[@"targetWeight"]) {
        userInfo.targetWeight = [userInfoDict[@"targetWeight"] floatValue];
    }
    if (userInfoDict[@"kitchenUnit"]) {
        userInfo.kitchenUnit = [userInfoDict[@"kitchenUnit"] intValue];
    }
    if (userInfoDict[@"userIndex"]) {
        userInfo.userIndex = [userInfoDict[@"userIndex"] intValue];
    }
    if (userInfoDict[@"weightDirection"]) {
        userInfo.weightDirection = [userInfoDict[@"weightDirection"] intValue];
    }
    if (userInfoDict[@"enableMeasureImpendence"]) {
        userInfo.enableMeasureImpendence = [userInfoDict[@"enableMeasureImpendence"] intValue];
    }
    if (userInfoDict[@"enableMeasureBalance"]) {
        userInfo.enableMeasureBalance = [userInfoDict[@"enableMeasureBalance"] intValue];
    }
    if (userInfoDict[@"enableMeasureHr"]) {
        userInfo.enableMeasureHr = [userInfoDict[@"enableMeasureHr"] intValue];
    }
    if (userInfoDict[@"enableMeasureGravity"]) {
        userInfo.enableMeasureGravity = [userInfoDict[@"enableMeasureGravity"] intValue];
    }
    [[ICDeviceManager shared] updateUserInfo:userInfo];
}



RCT_EXPORT_METHOD(setUserList:(NSArray<NSDictionary *> *)userlist)
{
    NSMutableArray<ICUserInfo *> *userInfoList = [NSMutableArray arrayWithCapacity:4];
    if (userlist.count > 0) {
        for (NSDictionary *userInfoDict in userlist) {
            ICUserInfo *userInfo = [ICUserInfo new];
            if (userInfoDict[@"age"]) {
                userInfo.age = [userInfoDict[@"age"] intValue];
            }
            if (userInfoDict[@"height"]) {
                userInfo.height = [userInfoDict[@"height"] intValue];
            }
            if (userInfoDict[@"sex"]) {
                userInfo.sex = [userInfoDict[@"sex"] intValue];
            }
            if (userInfoDict[@"weight"]) {
                userInfo.weight = [userInfoDict[@"weight"] floatValue];
            }
            if (userInfoDict[@"bfaType"]) {
                userInfo.bfaType = [userInfoDict[@"bfaType"] intValue];
            }
            if (userInfoDict[@"weightUnit"]) {
                userInfo.weightUnit = [userInfoDict[@"weightUnit"] intValue];
            }
            if (userInfoDict[@"rulerUnit"]) {
                userInfo.rulerUnit = [userInfoDict[@"rulerUnit"] intValue];
            }
            if (userInfoDict[@"peopleType"]) {
                userInfo.peopleType = [userInfoDict[@"peopleType"] intValue];
            }
            if (userInfoDict[@"rulerMode"]) {
                userInfo.rulerMode = [userInfoDict[@"rulerMode"] intValue];
            }
            if (userInfoDict[@"targetWeight"]) {
                userInfo.targetWeight = [userInfoDict[@"targetWeight"] floatValue];
            }
            if (userInfoDict[@"kitchenUnit"]) {
                userInfo.kitchenUnit = [userInfoDict[@"kitchenUnit"] intValue];
            }
            if (userInfoDict[@"userIndex"]) {
                userInfo.userIndex = [userInfoDict[@"userIndex"] intValue];
            }
            if (userInfoDict[@"weightDirection"]) {
                userInfo.weightDirection = [userInfoDict[@"weightDirection"] intValue];
            }
            if (userInfoDict[@"enableMeasureImpendence"]) {
                userInfo.enableMeasureImpendence = [userInfoDict[@"enableMeasureImpendence"] intValue];
            }
            if (userInfoDict[@"enableMeasureBalance"]) {
                userInfo.enableMeasureBalance = [userInfoDict[@"enableMeasureBalance"] intValue];
            }
            if (userInfoDict[@"enableMeasureHr"]) {
                userInfo.enableMeasureHr = [userInfoDict[@"enableMeasureHr"] intValue];
            }
            if (userInfoDict[@"enableMeasureGravity"]) {
                userInfo.enableMeasureGravity = [userInfoDict[@"enableMeasureGravity"] intValue];
            }
            [userInfoList addObject:userInfo];
        }
        [[ICDeviceManager shared] setUserList:userInfoList];
    }
    else {
    }
}

/**
 扫描设备
*/
RCT_EXPORT_METHOD(scanDevice)
{
  [[ICDeviceManager shared] scanDevice:self];
}

/**
 停止扫描
 */
RCT_EXPORT_METHOD(stopScan)
{
    [[ICDeviceManager shared] stopScan];
}

/**
 添加设备
 */
RCT_EXPORT_METHOD(addDevice:(NSDictionary *)device callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[ICDeviceManager shared] addDevice:deviceObj callback:^(ICDevice *device, ICAddDeviceCallBackCode code) {
      if (callback) {
        callback(@[ [device mj_keyValues], @(code)]);
      }
    }];
}

/**
 添加设备列表(注:有多少个device就会通过block回调多少次)
 */
RCT_EXPORT_METHOD(addDevices:(NSArray<NSDictionary *> *)devices  callback:(RCTResponseSenderBlock)callback)
{
    NSMutableArray<ICDevice *> *deviceObjs = [NSMutableArray arrayWithCapacity:4];
    for (NSDictionary *dict in devices) {
        ToDevice(dict);
        [deviceObjs addObject:deviceObj];
    }
    [[ICDeviceManager shared] addDevices:deviceObjs callback:^(ICDevice *device, ICAddDeviceCallBackCode code) {
      if (callback) {
        callback(@[ [device mj_keyValues], @(code)]);
      }
    }];
}

/**
 删除设备
 */
RCT_EXPORT_METHOD(removeDevice:(NSDictionary *)device  callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);

    [[ICDeviceManager shared] removeDevice:deviceObj callback:^(ICDevice *device, ICRemoveDeviceCallBackCode code) {
        if (callback) {
          callback(@[ [device mj_keyValues], @(code)]);
        }
    }];
}

/**
 删除设备列表(注:有多少个device就会通过block回调多少次)
 */
RCT_EXPORT_METHOD(removeDevices:(NSArray<NSDictionary *> *)devices  callback:(RCTResponseSenderBlock)callback)
{
    NSMutableArray<ICDevice *> *deviceObjs = [NSMutableArray arrayWithCapacity:4];
    for (NSDictionary *dict in devices) {
        ToDevice(dict);
        [deviceObjs addObject:deviceObj];
    }

    [[ICDeviceManager shared] removeDevices:deviceObjs callback:^(ICDevice *device, ICRemoveDeviceCallBackCode code) {
      if (callback) {
        callback(@[ [device mj_keyValues], @(code)]);
      }
    }];

}

RCT_EXPORT_METHOD(upgradeDevice:(NSDictionary *)device filePath:(NSString *)filePath)
{
    ToDevice(device);

    [[ICDeviceManager shared] upgradeDevice:deviceObj filePath:filePath];
}

RCT_EXPORT_METHOD(stopUpgradeDevice:(NSDictionary *)device)
{
    ToDevice(device);

    [[ICDeviceManager shared] stopUpgradeDevice:deviceObj];
}

RCT_EXPORT_METHOD(upgradeDevices:(NSArray<NSDictionary *> *)devices filePath:(NSString *)filePath)
{
    NSMutableArray<ICDevice *> *deviceObjs = [NSMutableArray arrayWithCapacity:4];
    for (NSDictionary *dict in devices) {
        ToDevice(dict);
        [deviceObjs addObject:deviceObj];
    }
    [[ICDeviceManager shared] upgradeDevices:deviceObjs filePath:filePath];
}

#pragma mark 设置类

/**
 设置称单位
 
 @param device          设备
 @param unit            单位
 @param callback        回调
 */
RCT_EXPORT_METHOD(setScaleUnit:(NSDictionary *)device unit:(ICWeightUnit)unit callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setScaleUnit:deviceObj unit:unit callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
 设置围尺单位
 
 @param device      设备
 @param unit        单位
 @param callback    回调
 */
RCT_EXPORT_METHOD(setRulerUnit:(NSDictionary *)device unit:(ICRulerUnit)unit callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setRulerUnit:deviceObj unit:unit callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
 设置当前围尺身体部位
 
 @param device      设备
 @param type        身体部位
 @param callback    回调
 */
RCT_EXPORT_METHOD(setRulerBodyPartsType:(NSDictionary *)device type:(ICRulerBodyPartsType)type callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setRulerBodyPartsType:deviceObj type:type callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
 设置重量到厨房秤，单位:毫克

 @param device 设备
 @param weight 重量，单位:毫克，最大不能超过65535毫克
 @param callback 回调
 */
RCT_EXPORT_METHOD(setWeight:(NSDictionary *)device weight:(NSInteger)weight callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setWeight:deviceObj weight:weight callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
 设置厨房秤去皮重量

 @param device 设备
 @param callback 回调
 */
RCT_EXPORT_METHOD(deleteTareWeight:(NSDictionary *)device callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] deleteTareWeight:deviceObj callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
 设置厨房秤计量单位

 @param device 设备
 @param unit 单位，注:如果秤不支持该单位，将不会生效
 @param callback 回调
 */
RCT_EXPORT_METHOD(setKitchenScaleUnit:(NSDictionary *)device unit:(ICKitchenScaleUnit)unit callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setKitchenScaleUnit:deviceObj unit:unit callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
 设置营养成分值到厨房秤

 @param device 设备
 @param type 营养类型
 @param value 营养值
 @param callback 回调
 */
RCT_EXPORT_METHOD(setNutritionFacts:(NSDictionary *)device type:(ICKitchenScaleNutritionFactType)type value:(NSInteger)value callback:(RCTResponseSenderBlock)callback)
{
    
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setNutritionFacts:deviceObj type:type value:value callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
 设置围尺测量模式
 
 @param device      设备
 @param mode        测量模式
 @param callback    回调
 */
RCT_EXPORT_METHOD(setRulerMeasureMode:(NSDictionary *)device mode:(ICRulerMeasureMode)mode callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setRulerMeasureMode:deviceObj mode:mode callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}


/**
 * 开始跳绳
 * @param device 设备
 * @param mode   跳绳模式
 * @param param  模式参数
 * @param callback 回调
 */
RCT_EXPORT_METHOD(startSkip:(NSDictionary *)device mode:(ICSkipMode)mode param:(NSUInteger)param callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] startSkip:deviceObj mode:mode param:param callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}


/**
 * 停止跳绳
 * @param device 设备
 * @param callback 回调
 */
RCT_EXPORT_METHOD(stopSkip:(NSDictionary *)device callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] stopSkip:deviceObj callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}

/**
设置厨房秤关机

@param device 设备
@param callback 回调
*/
RCT_EXPORT_METHOD(powerOffKitchenScale:(NSDictionary *)device callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] powerOffKitchenScale:deviceObj callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];

}


/**
 双模设备配网

@param device        设备
@param ssid             WIFI SSID
@param password    WIFI Password
*/
RCT_EXPORT_METHOD(configWifi:(NSDictionary *)device  ssid:(NSString *)ssid password:(NSString *)password callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] configWifi:deviceObj ssid:ssid password:password callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}


/**
 双模设备更换设备域名

@param device        设备
@param server          App服务器域名,如:https://www.google.com
*/
RCT_EXPORT_METHOD(setServerUrl:(NSDictionary *)device  server:(NSString *)server callback:(RCTResponseSenderBlock)callback)
{
    ToDevice(device);
    [[[ICDeviceManager shared] getSettingManager] setServerUrl:deviceObj server:server callback:^(ICSettingCallBackCode code) {
      callback(@[ [device mj_keyValues], @(code)]);
    }];
}




/**
 设置用户信息给设备，调用该接口后，updateUserInfo接口将不会再对该设备生效
 注意:目前仅跳绳设备支持

@param device      设备
@param userInfoDict    用户信息
*/
RCT_EXPORT_METHOD(setUserInfoToDevice:(NSDictionary *)device userInfo:(NSDictionary *)userInfoDict)
{
    ToDevice(device);
    ICUserInfo *userInfo = [ICUserInfo new];
    if (userInfoDict[@"age"]) {
        userInfo.age = [userInfoDict[@"age"] intValue];
    }
    if (userInfoDict[@"height"]) {
        userInfo.height = [userInfoDict[@"height"] intValue];
    }
    if (userInfoDict[@"sex"]) {
        userInfo.sex = [userInfoDict[@"sex"] intValue];
    }
    if (userInfoDict[@"weight"]) {
        userInfo.weight = [userInfoDict[@"weight"] floatValue];
    }
    if (userInfoDict[@"bfaType"]) {
        userInfo.bfaType = [userInfoDict[@"bfaType"] intValue];
    }
    if (userInfoDict[@"weightUnit"]) {
        userInfo.weightUnit = [userInfoDict[@"weightUnit"] intValue];
    }
    if (userInfoDict[@"rulerUnit"]) {
        userInfo.rulerUnit = [userInfoDict[@"rulerUnit"] intValue];
    }
    if (userInfoDict[@"peopleType"]) {
        userInfo.peopleType = [userInfoDict[@"peopleType"] intValue];
    }
    if (userInfoDict[@"rulerMode"]) {
        userInfo.rulerMode = [userInfoDict[@"rulerMode"] intValue];
    }
    if (userInfoDict[@"targetWeight"]) {
        userInfo.targetWeight = [userInfoDict[@"targetWeight"] floatValue];
    }
    if (userInfoDict[@"kitchenUnit"]) {
        userInfo.kitchenUnit = [userInfoDict[@"kitchenUnit"] intValue];
    }
    if (userInfoDict[@"userIndex"]) {
        userInfo.userIndex = [userInfoDict[@"userIndex"] intValue];
    }
    if (userInfoDict[@"weightDirection"]) {
        userInfo.weightDirection = [userInfoDict[@"weightDirection"] intValue];
    }
    if (userInfoDict[@"enableMeasureImpendence"]) {
        userInfo.enableMeasureImpendence = [userInfoDict[@"enableMeasureImpendence"] intValue];
    }
    if (userInfoDict[@"enableMeasureBalance"]) {
        userInfo.enableMeasureBalance = [userInfoDict[@"enableMeasureBalance"] intValue];
    }
    if (userInfoDict[@"enableMeasureHr"]) {
        userInfo.enableMeasureHr = [userInfoDict[@"enableMeasureHr"] intValue];
    }
    if (userInfoDict[@"enableMeasureGravity"]) {
        userInfo.enableMeasureGravity = [userInfoDict[@"enableMeasureGravity"] intValue];
    }
    [[[ICDeviceManager shared] getSettingManager] setUserInfo:deviceObj userInfo:userInfo];
}



#pragma mark 扫描回调
/**
 扫描结果回调

 @param deviceInfo 扫描到的设备
 */
- (void)onScanResult:(ICScanDeviceInfo *)deviceInfo
{
    
    NSDictionary *deviceInfoDict = @{
                   @"name" : deviceInfo.name,
                   @"type" :@(deviceInfo.type),
                   @"subType" : @(deviceInfo.subType),
                   @"communicationType" : @(deviceInfo.communicationType),
                   @"macAddr" : deviceInfo.macAddr,
                   @"services" : deviceInfo.services ? deviceInfo.services : @[],
                   @"rssi" : @(deviceInfo.rssi),
           };
  
  [self sendEventWithName:@"onScanResult" body:@[deviceInfoDict]];
//  if (_scanBlock) {
//    _scanBlock(@[deviceInfoDict]);
//  }
}

#pragma mark 蓝牙SDK回调

- (void)callDelegate:(NSString *)funName datas:(NSArray *)datas
{
  NSMutableArray* ret = [NSMutableArray array];
  [ret addObject:funName];
  [ret addObjectsFromArray:datas];
  [self sendEventWithName:@"onDeviceManagerDelegate" body:ret];
}

/**
 SDKc初始化完成回调
 
 @param bSuccess 初始化是否成功
 */
- (void)onInitFinish:(BOOL)bSuccess
{
  [self callDelegate:@"onInitFinish" datas:@[@(bSuccess)]];
}


/**
 蓝牙改变状态回调
 
 @param state 蓝牙状态
 */
- (void)onBleState:(ICBleState)state
{
  [self callDelegate:@"onBleState" datas:@[@(state)]];
}

/**
 设备连接状态回调
 
 @param device 设备
 @param state 连接状态
 */
- (void)onDeviceConnectionChanged:(ICDevice *)device state:(ICDeviceConnectState)state
{
  [self callDelegate:@"onDeviceConnectionChanged" datas:@[[device mj_keyValues], @(state)]];
}

/**
 体重秤数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveWeightData:(ICDevice *)device data:(ICWeightData *)data
{
    if (data.isStabilized && data.weight_g == 0) {
        return;
    }
  [self callDelegate:@"onReceiveWeightData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}


/**
 厨房秤数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveKitchenScaleData:(ICDevice *)device data:(ICKitchenScaleData *)data
{
  [self callDelegate:@"onReceiveKitchenScaleData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}

/**
 厨房秤单位改变

 @param device 设备
 @param unit 改变后的单位
 */
- (void)onReceiveKitchenScaleUnitChanged:(ICDevice *)device unit:(ICKitchenScaleUnit)unit
{
  [self callDelegate:@"onReceiveKitchenScaleUnitChanged" datas:@[[device mj_keyValues], @(unit)]];
}


/**
 平衡秤坐标数据回调
 
 @param device 设备
 @param data 测量坐标数据
 */
- (void)onReceiveCoordData:(ICDevice *)device data:(ICCoordData *)data
{
  [self callDelegate:@"onReceiveCoordData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}

/**
 围尺数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveRulerData:(ICDevice *)device data:(ICRulerData *)data
{
  [self callDelegate:@"onReceiveRulerData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}

/**
 围尺历史数据回调
 
 @param device 设备
 @param data 测量数据
 */
- (void)onReceiveRulerHistoryData:(ICDevice *)device data:(ICRulerData *)data
{
  [self callDelegate:@"onReceiveRulerHistoryData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}

/**
 平衡数据回调
 
 @param device 设备
 @param data 平衡数据
 */
- (void)onReceiveWeightCenterData:(ICDevice *)device data:(ICWeightCenterData *)data
{
  [self callDelegate:@"onReceiveWeightCenterData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}

/**
 设备单位改变回调

 @param device  设备
 @param unit    设备当前单位
 */
- (void)onReceiveWeightUnitChanged:(ICDevice *)device unit:(ICWeightUnit)unit
{
  [self callDelegate:@"onReceiveWeightUnitChanged" datas:@[[device mj_keyValues], @(unit)]];
}


/**
 围尺单位改变回调
 
 @param device 设备
 @param unit 设备当前单位
 */
- (void)onReceiveRulerUnitChanged:(ICDevice *)device unit:(ICRulerUnit)unit
{
  [self callDelegate:@"onReceiveRulerUnitChanged" datas:@[[device mj_keyValues], @(unit)]];
}

/**
 围尺测量模式改变回调
 
 @param device 设备
 @param mode 设备当前测量模式
 */
- (void)onReceiveRulerMeasureModeChanged:(ICDevice *)device mode:(ICRulerMeasureMode)mode
{
  [self callDelegate:@"onReceiveRulerUnitChanged" datas:@[[device mj_keyValues], @(mode)]];
}


/**
 4个传感器数据回调
 
 @param device 设备
 @param data 传感器数据
 */
- (void)onReceiveElectrodeData:(ICDevice *)device data:(ICElectrodeData *)data
{
    
}

/**
 分步骤体重、平衡、阻抗、心率数据回调
 
 @param device  设备
 @param step    当前处于的步骤
 @param data    数据
 */
- (void)onReceiveMeasureStepData:(ICDevice *)device step:(ICMeasureStep)step data:(NSObject *)data
{
  [self callDelegate:@"onReceiveMeasureStepData" datas:@[[device mj_keyValues], @(step), [data mj_keyValues]]];
}

/**
 体重历史数据回调
 
 @param device 设备
 @param data 体重历史数据
 */
- (void)onReceiveWeightHistoryData:(ICDevice *)device data:(ICWeightHistoryData *)data
{
  [self callDelegate:@"onReceiveWeightHistoryData" datas:@[[device mj_keyValues], [data mj_keyValues]]];

}


/**
 跳绳实时数据回调
 
 @param device 设备
 @param data 体重历史数据
 */
- (void)onReceiveSkipData:(ICDevice *)device data:(ICSkipData *)data
{
  [self callDelegate:@"onReceiveSkipData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}


/**
 跳绳历史数据回调
 
 @param device 设备
 @param data 跳绳历史数据
 */
- (void)onReceiveHistorySkipData:(ICDevice *)device data:(ICSkipData *)data
{
  [self callDelegate:@"onReceiveHistorySkipData" datas:@[[device mj_keyValues], [data mj_keyValues]]];
}

/**
 跳绳电量
 
 @param device 设备
 @param battery 电量，范围:0~100
 */
- (void)onReceiveSkipBattery:(ICDevice *)device battery:(NSUInteger)battery
{
  [self callDelegate:@"onReceiveSkipBattery" datas:@[[device mj_keyValues], @(battery)]];
}

/**
 设备升级状态回调
 @param device 设备
 @param status 升级状态
 @param percent 升级进度,范围:0~100
 */
- (void)onReceiveUpgradePercent:(ICDevice *)device status:(ICUpgradeStatus)status percent:(NSUInteger)percent
{
  [self callDelegate:@"onReceiveUpgradePercent" datas:@[[device mj_keyValues], @(status), @(percent)]];
}

/**
 设备信息回调

 @param device 设备
 @param deviceInfo 设备信息
 */
- (void)onReceiveDeviceInfo:(ICDevice *)device deviceInfo:(ICDeviceInfo *)deviceInfo
{
  [self callDelegate:@"onReceiveDeviceInfo" datas:@[[device mj_keyValues], [deviceInfo mj_keyValues]]];
}


/*
 * 配网结果回调
 * @param device 设备
 * @param state 配网状态
 */
- (void)onReceiveConfigWifiResult:(ICDevice *)device state:(ICConfigWifiState)state
{
  [self callDelegate:@"onReceiveConfigWifiResult" datas:@[[device mj_keyValues], @(state)]];

}

@end
