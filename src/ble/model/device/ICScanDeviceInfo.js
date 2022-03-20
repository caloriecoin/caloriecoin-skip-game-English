import * as ICConstant from "../other/ICConstant";

class ICScanDeviceInfo {

    /**
     广播名
     */
    name = "";

    /**
     设备类型
     */
    type = ICConstant.ICDeviceType.ICDeviceTypeFatScale;
    /**
     设备类型
     */
    subType = ICConstant.ICDeviceSubType.ICDeviceSubTypeDefault;

    /**
     设备通讯方式
     */
    communicationType = ICConstant.ICDeviceCommunicationType.ICDeviceCommunicationTypeConnect;

    /**
     mac地址
     */
    macAddr = "";

    /**
     服务ID列表
     */
     services = [];

    /**
     信号强度(越小越大，0:系统配对设备，-128:信号值有误)
     */
    rssi = 0;

    constructor(){
    }
}

export {ICScanDeviceInfo}