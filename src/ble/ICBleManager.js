import { NativeModules, NativeEventEmitter } from 'react-native'
import { ICUserInfo } from "./model/device/ICUserInfo";
import ICBleManagerDelegate from "./ICBleManagerDelegate";
import { ICSkipData } from './model/data/ICSkipData';

var ICDeviceManagerRNBridge = NativeModules.ICDeviceManagerRNBridge;
const ICDeviceManagerRNBridgeEvent = new NativeEventEmitter(ICDeviceManagerRNBridge);

class ICBleManager {

  delegate = null;
  scanDelegate = null;

  setDelegate(delegate : ICBleManagerDelegate) {
    this.delegate = delegate;
  }

  constructor() {
    // this.manager = new BleManager();
    var that = this;
    ICDeviceManagerRNBridgeEvent.addListener('onScanResult', function  (body) {
      if (that.scanDelegate) {
        that.scanDelegate(body[0]);
      }
    });

    ICDeviceManagerRNBridgeEvent.addListener('onDeviceManagerDelegate', function  (body) {
      var params = body;
      // console.log(params);
      var funcName = params[0];
      if (funcName === "onInitFinish") {
        var bInitRet = params[1];
        if (that.delegate && that.delegate.onInitFinish) {
          that.delegate.onInitFinish(bInitRet);
        }
      }
      else if (funcName === 'onBleState') {
        var state = params[1];
        if (that.delegate && that.delegate.onBleState) {
          that.delegate.onBleState(state);
        }
      }
      else if (funcName === 'onDeviceConnectionChanged') {
        var device = params[1];
        var state = params[2];
        if (that.delegate && that.delegate.onDeviceConnectionChanged) {
          that.delegate.onDeviceConnectionChanged(device.macAddr, state);
        }
      }
      else if (funcName === 'onReceiveWeightData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveWeightData) {
          that.delegate.onReceiveWeightData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveKitchenScaleData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveKitchenScaleData) {
          that.delegate.onReceiveKitchenScaleData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveKitchenScaleUnitChanged') {
        var device = params[1];
        var unit = params[2];
        if (that.delegate && that.delegate.onReceiveKitchenScaleUnitChanged) {
          that.delegate.onReceiveKitchenScaleUnitChanged(device.macAddr, unit);
        }
      }
      else if (funcName === 'onReceiveCoordData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveCoordData) {
          that.delegate.onReceiveCoordData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveRulerData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveRulerData) {
          that.delegate.onReceiveRulerData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveRulerHistoryData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveRulerHistoryData) {
          that.delegate.onReceiveRulerHistoryData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveWeightCenterData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveWeightCenterData) {
          that.delegate.onReceiveWeightCenterData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveWeightUnitChanged') {
        var device = params[1];
        var unit = params[2];
        if (that.delegate && that.delegate.onReceiveWeightUnitChanged) {
          that.delegate.onReceiveWeightUnitChanged(device.macAddr, unit);
        }
      }
      else if (funcName === 'onReceiveRulerUnitChanged') {
        var device = params[1];
        var unit = params[2];
        if (that.delegate && that.delegate.onReceiveRulerUnitChanged) {
          that.delegate.onReceiveRulerUnitChanged(device.macAddr, unit);
        }
      }
      else if (funcName === 'onReceiveRulerUnitChanged') {
        var device = params[1];
        var mode = params[2];
        if (that.delegate && that.delegate.onReceiveRulerUnitChanged) {
          that.delegate.onReceiveRulerUnitChanged(device.macAddr, mode);
        }
      }
      else if (funcName === 'onReceiveMeasureStepData') {
        var device = params[1];
        var step = params[2];
        var data = params[3];
        if (that.delegate && that.delegate.onReceiveMeasureStepData) {
          that.delegate.onReceiveMeasureStepData(device.macAddr, step, data);
        }
      }
      else if (funcName === 'onReceiveWeightHistoryData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveWeightHistoryData) {
          that.delegate.onReceiveWeightHistoryData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveSkipData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveSkipData) {
          that.delegate.onReceiveSkipData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveHistorySkipData') {
        var device = params[1];
        var data = params[2];
        if (that.delegate && that.delegate.onReceiveHistorySkipData) {
          that.delegate.onReceiveHistorySkipData(device.macAddr, data);
        }
      }
      else if (funcName === 'onReceiveSkipBattery') {
        var device = params[1];
        var battery = params[2];
        if (that.delegate && that.delegate.onReceiveSkipBattery) {
          that.delegate.onReceiveSkipBattery(device.macAddr, battery);
        }
      }
      else if (funcName === 'onReceiveUpgradePercent') {
        var device = params[1];
        var status = params[2];
        var percent = params[3];
        if (that.delegate && that.delegate.onReceiveUpgradePercent) {
          that.delegate.onReceiveUpgradePercent(device.macAddr, status, percent);
        }
      }
      else if (funcName === 'onReceiveDeviceInfo') {
        var device = params[1];
        var info = params[2];
        if (that.delegate && that.delegate.onReceiveDeviceInfo) {
          that.delegate.onReceiveDeviceInfo(device.macAddr, info);
        }
      }
      else if (funcName === 'onReceiveConfigWifiResult') {
        var device = params[1];
        var state = params[2];
        if (that.delegate && that.delegate.onReceiveConfigWifiResult) {
          that.delegate.onReceiveConfigWifiResult(device.macAddr, state);
        }
      }
    });

  }

  initMgr()
  {
    ICDeviceManagerRNBridge.initMgr();
  }

  updateUserInfo(userInfo:ICUserInfo)
  {
      ICDeviceManagerRNBridge.updateUserInfo(userInfo);
  }

  setUserList(userInfoList:Array<ICUserInfo>)
  {
    ICDeviceManagerRNBridge.setUserList(userInfoList);
  }

  startScan(callback:function)
  {
    this.scanDelegate = callback;
    ICDeviceManagerRNBridge.scanDevice();
  }

  stopScan()
  {
    this.scanDelegate = null;
    ICDeviceManagerRNBridge.stopScan();
  }

  addDevice(macAddr : string, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.addDevice(device, (device, code) => {
        if (callback) {
          callback(device.macAddr, code);
        }
    });
  }

  removeDevice(macAddr : string, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.removeDevice(device, (device, code) => {
        if (callback) {
          callback(device.macAddr, code);
        }
    });
  }

  setScaleUnit(macAddr : string, unit : number, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.setScaleUnit(device, unit, (device, code) => {
        if (callback) {
          callback(device.macAddr, code);
        }
    });
  }


  setRulerUnit(macAddr : string, unit:number, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.setRulerUnit(device, unit, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  setRulerBodyPartsType(macAddr : string, type:number, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.setRulerBodyPartsType(device, type, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  deleteTareWeight(macAddr : string, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.deleteTareWeight(device, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  setKitchenScaleUnit(macAddr : string, unit:number, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.setKitchenScaleUnit(device, unit, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  setRulerMeasureMode(macAddr : string, mode:number, callback:function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.setRulerMeasureMode(device, mode, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }


  startSkip(macAddr : string, mode : number, param : number, callback : function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.startSkip(device, mode, param, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  stopSkip(macAddr : string, callback : function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.stopSkip(device, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  powerOffKitchenScale(macAddr : string, callback : function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.powerOffKitchenScale(device, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  configWifi(macAddr : string, ssid : string, pwd : string, callback : function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.configWifi(device, ssid, pwd, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  setServerUrl(macAddr : string, server : string, callback : function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.setServerUrl(device, server, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }

  setUserInfoToDevice(macAddr : string, userInfo : ICUserInfo, callback : function)
  {
    var device = {macAddr: macAddr};
    ICDeviceManagerRNBridge.setUserInfoToDevice(device, userInfo, (device, code) => {
      if (callback) {
        callback(device.macAddr, code);
      }
    });
  }
}

export {ICBleManager}
