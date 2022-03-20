import * as ICConstant from "./model/other/ICConstant";
import { ICRulerData } from "./model/data/ICRulerData";
import { ICCoordData } from "./model/data/ICCoordData";
import { ICKitchenScaleData } from "./model/data/ICKitchenScaleData";
import { ICWeightData } from "./model/data/ICWeightData";
import { ICSkipData } from "./model/data/ICSkipData";
import { ICWeightHistoryData } from "./model/data/ICWeightHistoryData";
import { ICWeightCenterData } from "./model/data/ICWeightCenterData";

export default class ICBleManagerDelegate {
  /**
   * SDK初始化完成回调
   * @param bSuccess 初始化是否成功
   */
  onInitFinish(bSuccess : boolean)
  {

  }


  /**
   蓝牙改变状态回调

   @param state 蓝牙状态
   */
  onBleState( state : ICConstant.ICBleState)
  {

  }

  /**
   设备连接状态回调

   @param device 设备
   @param state 连接状态
   */
  onDeviceConnectionChanged(device : string, state : ICConstant.ICDeviceConnectState)
  {

  }

  /**
   体重秤数据回调

   @param device 设备
   @param data 测量数据
   */
  onReceiveWeightData(device : string, data :  ICWeightData)
  {

  }

  /**
   厨房秤数据回调

   @param device 设备
   @param data 测量数据
   */
  onReceiveKitchenScaleData(device : string,  data : ICKitchenScaleData)
  {

  }

  /**
   厨房秤单位改变

   @param device 设备
   @param unit 改变后的单位
   */
  onReceiveKitchenScaleUnitChanged(device : string,  unit : ICConstant.ICKitchenScaleUnit)
  {

  }

  /**
   平衡秤坐标数据回调

   @param device 设备
   @param data 测量坐标数据
   */
  onReceiveCoordData(device : string,  data : ICCoordData)
  {

  }

  /**
   围尺数据回调

   @param device 设备
   @param data 测量数据
   */
  onReceiveRulerData(device : string, data : ICRulerData )
  {

  }

  /**
   围尺历史数据回调

   @param device 设备
   @param data 测量数据
   */
  onReceiveRulerHistoryData(device : string,  data : ICRulerData)
  {

  }

  /**
   重心秤重心数据回调

   @param device 设备
   @param data 重心数数据
   */
  onReceiveWeightCenterData(device : string,  data : ICWeightCenterData)
  {

  }

  /**
   设备单位改变回调

   @param device  设备
   @param unit    设备当前单位
   */
  onReceiveWeightUnitChanged(device : string,  unit : ICConstant.ICWeightUnit)
  {

  }

  /**
   围尺单位改变回调

   @param device 设备
   @param unit 设备当前单位
   */
  onReceiveRulerUnitChanged(device : string,  unit : ICConstant.ICRulerUnit)
  {

  }

  /**
   围尺测量模式改变回调

   @param device 设备
   @param mode 设备当前测量模式
   */
  onReceiveRulerMeasureModeChanged(device : string, mode : ICConstant.ICRulerMeasureMode )
  {

  }

  /**
   分步骤体重、平衡、阻抗、心率数据回调

   @param device  设备
   @param step    当前处于的步骤
   @param data    数据
   */
  onReceiveMeasureStepData(device : string, step : ICConstant.ICMeasureStep , data : ICWeightData)
  {

  }

  /**
   体重历史数据回调

   @param device 设备
   @param data 体重历史数据
   */
  onReceiveWeightHistoryData(device : string,  data : ICWeightHistoryData)
  {

  }

  /**
   跳绳实时数据回调

   @param device 设备
   @param data 体重历史数据
   */
  onReceiveSkipData(device : string,  data : ICSkipData)
  {

  }
  /**
   跳绳历史数据回调

   @param device 设备
   @param data 体重历史数据
   */
  onReceiveHistorySkipData(device : string,  data: ICSkipData)
  {

  }

  /**
   跳绳电量

   @param device 设备
   @param battery 电量，范围:0~100
   */
  onReceiveSkipBattery(device : string, battery:number)
  {

  }

  /**
   * 配网结果回调
   * @param device 设备
   * @param state 配网状态
   */
  onReceiveConfigWifiResult(device : string,  state:ICConstant.ICConfigWifiState)
  {

  }


}
