package com.icomon.rn;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import android.util.Log;

// import com.facebook.flipper.plugins.inspector.InspectorValue;
// import com.facebook.flipper.plugins.inspector.ObjectTracker;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import cn.icomon.icdevicemanager.ICDeviceManager;
import cn.icomon.icdevicemanager.ICDeviceManagerDelegate;
import cn.icomon.icdevicemanager.callback.ICScanDeviceDelegate;
import cn.icomon.icdevicemanager.model.data.ICCoordData;
import cn.icomon.icdevicemanager.model.data.ICKitchenScaleData;
import cn.icomon.icdevicemanager.model.data.ICRulerData;
import cn.icomon.icdevicemanager.model.data.ICSkipData;
import cn.icomon.icdevicemanager.model.data.ICWeightCenterData;
import cn.icomon.icdevicemanager.model.data.ICWeightData;
import cn.icomon.icdevicemanager.model.data.ICWeightExtData;
import cn.icomon.icdevicemanager.model.data.ICWeightHistoryData;
import cn.icomon.icdevicemanager.model.device.ICDevice;
import cn.icomon.icdevicemanager.model.device.ICDeviceInfo;
import cn.icomon.icdevicemanager.model.device.ICScanDeviceInfo;
import cn.icomon.icdevicemanager.model.device.ICUserInfo;
import cn.icomon.icdevicemanager.model.other.ICConstant;
import cn.icomon.icdevicemanager.model.other.ICDeviceManagerConfig;


public class ICDeviceManagerRNBridge extends ReactContextBaseJavaModule implements ICDeviceManagerDelegate, ICScanDeviceDelegate {

    private ReactContext mReactContext;
    private static ReactContext myContext;

    @NonNull
    @Override
    public String getName() {
        return "ICDeviceManagerRNBridge";
    }

    public ICDeviceManagerRNBridge(ReactApplicationContext context) {
        super(context);
        this.mReactContext = context;
        myContext = context;
    }

    public static void sendEventToRn(String eventName, @Nullable WritableArray paramss)
    {
        myContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, paramss);

    }

    public Map<String, Object> toMap(Object obj) {
        Class<? extends Object> clazz = obj.getClass();
        Class<? extends Object> superclass = clazz.getSuperclass();

        Field[] fields = clazz.getDeclaredFields();
        Field[] superFields = superclass.getDeclaredFields();

        if (fields == null || fields.length == 0) {
            return Collections.emptyMap();
        }

        Map<String, Object> params = new HashMap<String, Object>();
        try {
            for (Field field : fields) {
                field.setAccessible(true);
                Object v = field.get(obj);
                if (v instanceof ICConstant.ICBFAType) {
                    v = ((ICConstant.ICBFAType)v).getValue();
                }
                else if (v instanceof ICWeightExtData) {
                    v = toMap(v);
                }
                params.put(field.getName(), v);
            }

            for (Field superField : superFields) {
                superField.setAccessible(true);
                params.put(superField.getName(), superField.get(obj));
            }

        } catch (IllegalAccessException | IllegalArgumentException e) {
            e.printStackTrace();
        }

        return params;

    }

    @ReactMethod
    public void initMgr()
    {
        ICDeviceManager.shared().setDelegate(this);
        ICDeviceManagerConfig config = new ICDeviceManagerConfig();
        config.context = mReactContext;
        ICDeviceManager.shared().initMgrWithConfig(config);
    }

    @ReactMethod
    public void updateUserInfo(ReadableMap userInfoDict)
    {
        ICUserInfo userInfo = new ICUserInfo();
        if (userInfoDict.hasKey("age")) {
            userInfo.age = userInfoDict.getInt("age");
        }
        if (userInfoDict.hasKey("height")) {
            userInfo.height = userInfoDict.getInt("height");
        }
        if (userInfoDict.hasKey("sex")) {
            int sex = userInfoDict.getInt("sex");
            if (sex == 1) {
                userInfo.sex = ICConstant.ICSexType.ICSexTypeMale;
            }
            else {
                userInfo.sex = ICConstant.ICSexType.ICSexTypeFemal;
            }
        }
        if (userInfoDict.hasKey("weight")) {
            userInfo.weight = userInfoDict.getDouble("weight");
        }
        if (userInfoDict.hasKey("bfaType")) {
            int bfatype = userInfoDict.getInt("bfaType");
            userInfo.bfaType = ICConstant.ICBFAType.valueOf(bfatype);
        }
        if (userInfoDict.hasKey("weightUnit")) {
            int weightUnit = userInfoDict.getInt("weightUnit");
            userInfo.weightUnit = ICConstant.ICWeightUnit.valueOf(weightUnit);
        }
        if (userInfoDict.hasKey("rulerUnit")) {
            int rulerUnit = userInfoDict.getInt("rulerUnit");
            userInfo.rulerUnit = ICConstant.ICRulerUnit.valueOf(rulerUnit);
        }
        if (userInfoDict.hasKey("peopleType")) {
            int peopleTyp = userInfoDict.getInt("peopleType");
            if (peopleTyp == 0) {
                userInfo.peopleType = ICConstant.ICPeopleType.ICPeopleTypeNormal;
            }
            else
            {
                userInfo.peopleType = ICConstant.ICPeopleType.ICPeopleTypeSportman;
            }
        }
        if (userInfoDict.hasKey("rulerMode")) {
            int rulerMode = userInfoDict.getInt("rulerMode");
            userInfo.rulerMode = ICConstant.ICRulerMeasureMode.valueOf(rulerMode);
        }
        if (userInfoDict.hasKey("targetWeight")) {
            userInfo.targetWeight = userInfoDict.getDouble("targetWeight");
        }
        if (userInfoDict.hasKey("kitchenUnit")) {
            int kitchenUnit = userInfoDict.getInt("kitchenUnit");
            userInfo.kitchenUnit = ICConstant.ICKitchenScaleUnit.value(kitchenUnit);
        }
        if (userInfoDict.hasKey("userIndex")) {
            userInfo.userIndex = userInfoDict.getInt("userIndex");
        }
        if (userInfoDict.hasKey("weightDirection")) {
            userInfo.weightDirection = userInfoDict.getInt("weightDirection");
        }
        if (userInfoDict.hasKey("enableMeasureImpendence")) {
            userInfo.enableMeasureImpendence = userInfoDict.getBoolean("enableMeasureImpendence");
        }
        if (userInfoDict.hasKey("enableMeasureBalance")) {
            userInfo.enableMeasureBalance = userInfoDict.getBoolean("enableMeasureBalance");
        }
        if (userInfoDict.hasKey("enableMeasureHr")) {
            userInfo.enableMeasureHr = userInfoDict.getBoolean("enableMeasureHr");
        }
        if (userInfoDict.hasKey("enableMeasureGravity")) {
            userInfo.enableMeasureGravity = userInfoDict.getBoolean("enableMeasureGravity");
        }
        ICDeviceManager.shared().updateUserInfo(userInfo);
    }


    @ReactMethod
    public void setUserList(ReadableArray userlists)
    {
        ArrayList<Object> userlist = userlists.toArrayList();
        ArrayList<ICUserInfo> userInfoList = new ArrayList<>();
        if (userlist.size() > 0) {
            for (Object userInfoDict2 : userlist) {
                ReadableMap userInfoDict = (ReadableMap) userInfoDict2;
                ICUserInfo userInfo = new ICUserInfo();
                if (userInfoDict.hasKey("age")) {
                    userInfo.age = userInfoDict.getInt("age");
                }
                if (userInfoDict.hasKey("height")) {
                    userInfo.height = userInfoDict.getInt("height");
                }
                if (userInfoDict.hasKey("sex")) {
                    int sex = userInfoDict.getInt("sex");
                    if (sex == 1) {
                        userInfo.sex = ICConstant.ICSexType.ICSexTypeMale;
                    }
                    else {
                        userInfo.sex = ICConstant.ICSexType.ICSexTypeFemal;
                    }
                }
                if (userInfoDict.hasKey("weight")) {
                    userInfo.weight = userInfoDict.getDouble("weight");
                }
                if (userInfoDict.hasKey("bfaType")) {
                    int bfatype = userInfoDict.getInt("bfaType");
                    userInfo.bfaType = ICConstant.ICBFAType.valueOf(bfatype);
                }
                if (userInfoDict.hasKey("weightUnit")) {
                    int weightUnit = userInfoDict.getInt("weightUnit");
                    userInfo.weightUnit = ICConstant.ICWeightUnit.valueOf(weightUnit);
                }
                if (userInfoDict.hasKey("rulerUnit")) {
                    int rulerUnit = userInfoDict.getInt("rulerUnit");
                    userInfo.rulerUnit = ICConstant.ICRulerUnit.valueOf(rulerUnit);
                }
                if (userInfoDict.hasKey("peopleType")) {
                    int peopleTyp = userInfoDict.getInt("peopleType");
                    if (peopleTyp == 0) {
                        userInfo.peopleType = ICConstant.ICPeopleType.ICPeopleTypeNormal;
                    }
                    else
                    {
                        userInfo.peopleType = ICConstant.ICPeopleType.ICPeopleTypeSportman;
                    }
                }
                if (userInfoDict.hasKey("rulerMode")) {
                    int rulerMode = userInfoDict.getInt("rulerMode");
                    userInfo.rulerMode = ICConstant.ICRulerMeasureMode.valueOf(rulerMode);
                }
                if (userInfoDict.hasKey("targetWeight")) {
                    userInfo.targetWeight = userInfoDict.getDouble("targetWeight");
                }
                if (userInfoDict.hasKey("kitchenUnit")) {
                    int kitchenUnit = userInfoDict.getInt("kitchenUnit");
                    userInfo.kitchenUnit = ICConstant.ICKitchenScaleUnit.value(kitchenUnit);
                }
                if (userInfoDict.hasKey("userIndex")) {
                    userInfo.userIndex = userInfoDict.getInt("userIndex");
                }
                if (userInfoDict.hasKey("weightDirection")) {
                    userInfo.weightDirection = userInfoDict.getInt("weightDirection");
                }
                if (userInfoDict.hasKey("enableMeasureImpendence")) {
                    userInfo.enableMeasureImpendence = userInfoDict.getBoolean("enableMeasureImpendence");
                }
                if (userInfoDict.hasKey("enableMeasureBalance")) {
                    userInfo.enableMeasureBalance = userInfoDict.getBoolean("enableMeasureBalance");
                }
                if (userInfoDict.hasKey("enableMeasureHr")) {
                    userInfo.enableMeasureHr = userInfoDict.getBoolean("enableMeasureHr");
                }
                if (userInfoDict.hasKey("enableMeasureGravity")) {
                    userInfo.enableMeasureGravity = userInfoDict.getBoolean("enableMeasureGravity");
                }
                userInfoList.add(userInfo);
            }
            ICDeviceManager.shared().setUserList(userInfoList);
        }
    }

    /**
     扫描设备
     */
    @ReactMethod
    public void scanDevice()
    {
        ICDeviceManager.shared().scanDevice(this);
    }

    /**
     停止扫描
     */
    @ReactMethod
    public void stopScan()
    {
        ICDeviceManager.shared().stopScan();
    }


    public ICDevice ToDevice(ReadableMap deviceDict)
    {
        ICDevice device = new ICDevice();
        device.macAddr = deviceDict.getString("macAddr");
        return device;
    }

    /**
     添加设备
     */
    @ReactMethod
    public void addDevice(ReadableMap device, Callback callback)
    {
        ICDevice deviceObj = ToDevice(device);
        ICDeviceManager.shared().addDevice(deviceObj, (ICDevice dev, ICConstant.ICAddDeviceCallBackCode code) -> {
            if (callback != null) {
                callback.invoke(Arguments.makeNativeMap(toMap(dev)), code.ordinal());
            }
        });
    }

    /**
     删除设备
     */
    @ReactMethod
    public void removeDevice(ReadableMap device , Callback callback)
    {
        ICDevice deviceObj = ToDevice(device);

        ICDeviceManager.shared().removeDevice(deviceObj, (ICDevice dev, ICConstant.ICRemoveDeviceCallBackCode code) -> {
            if (callback != null) {
                callback.invoke(Arguments.makeNativeMap(toMap(dev)), code.ordinal());
            }
        });
    }


    @ReactMethod
    public void upgradeDevice(ReadableMap device, String filePath)
    {
        ICDevice deviceObj =  ToDevice(device);

        ICDeviceManager.shared().upgradeDevice(deviceObj, filePath);
    }

    @ReactMethod
    public void stopUpgradeDevice(ReadableMap device)
    {
        ICDevice deviceObj =  ToDevice(device);

        ICDeviceManager.shared().stopUpgradeDevice(deviceObj);
    }


    /**
     设置称单位

     @param device          设备
     @param unit            单位
     @param callback        回调
     */
    @ReactMethod
    public void setScaleUnit(ReadableMap device, int unit , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICConstant.ICWeightUnit weightUnit = ICConstant.ICWeightUnit.valueOf(unit);
        ICDeviceManager.shared().getSettingManager().setScaleUnit(deviceObj, weightUnit, (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置围尺单位

     @param device      设备
     @param unit        单位
     @param callback    回调
     */
    @ReactMethod
    public void setRulerUnit(ReadableMap device, int unit , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICConstant.ICRulerUnit rulerUnit = ICConstant.ICRulerUnit.valueOf(unit);
        ICDeviceManager.shared().getSettingManager().setRulerUnit(deviceObj, rulerUnit , (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置当前围尺身体部位

     @param device      设备
     @param type        身体部位
     @param callback    回调
     */
    @ReactMethod
    public void setRulerBodyPartsType(ReadableMap device, int type , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICConstant.ICRulerBodyPartsType partsType = ICConstant.ICRulerBodyPartsType.valueOf(type);
        ICDeviceManager.shared().getSettingManager().setRulerBodyPartsType(deviceObj, partsType , (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置重量到厨房秤，单位:毫克

     @param device 设备
     @param weight 重量，单位:毫克，最大不能超过65535毫克
     @param callback 回调
     */
    @ReactMethod
    public void setWeight(ReadableMap device, int weight , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICDeviceManager.shared().getSettingManager().setWeight(deviceObj, weight, (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置厨房秤去皮重量

     @param device 设备
     @param callback 回调
     */
    @ReactMethod
    public void deleteTareWeight(ReadableMap device, Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICDeviceManager.shared().getSettingManager().deleteTareWeight(deviceObj, (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置厨房秤计量单位

     @param device 设备
     @param unit 单位，注:如果秤不支持该单位，将不会生效
     @param callback 回调
     */
    @ReactMethod
    public void setKitchenScaleUnit(ReadableMap device, int unit , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICConstant.ICKitchenScaleUnit scaleUnit = ICConstant.ICKitchenScaleUnit.value(unit);
        ICDeviceManager.shared().getSettingManager().setKitchenScaleUnit(deviceObj, scaleUnit, (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置营养成分值到厨房秤

     @param device 设备
     @param type 营养类型
     @param value 营养值
     @param callback 回调
     */
    @ReactMethod
    public void setNutritionFacts(ReadableMap device, int type, int value , Callback callback)
    {

        ICDevice deviceObj =  ToDevice(device);
        ICConstant.ICKitchenScaleNutritionFactType factType = ICConstant.ICKitchenScaleNutritionFactType.values()[type];
        ICDeviceManager.shared().getSettingManager().setNutritionFacts(deviceObj, factType, value , (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置围尺测量模式

     @param device      设备
     @param mode        测量模式
     @param callback    回调
     */
    @ReactMethod
    public void setRulerMeasureMode(ReadableMap device, int mode , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICConstant.ICRulerMeasureMode measureMode = ICConstant.ICRulerMeasureMode.valueOf(mode);
        ICDeviceManager.shared().getSettingManager().setRulerMeasureMode(deviceObj, measureMode , (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }


    /**
     * 开始跳绳
     * @param device 设备
     * @param mode   跳绳模式
     * @param param  模式参数
     * @param callback 回调
     */
    @ReactMethod
    public void startSkip(ReadableMap device, int mode, int param , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICConstant.ICSkipMode skipMode = ICConstant.ICSkipMode.values()[mode];
        ICDeviceManager.shared().getSettingManager().startSkipMode(deviceObj, skipMode, param , (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }


    /**
     * 停止跳绳
     * @param device 设备
     * @param callback 回调
     */
    @ReactMethod
    public void stopSkip(ReadableMap device, Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICDeviceManager.shared().getSettingManager().stopSkip(deviceObj , (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }

    /**
     设置厨房秤关机

     @param device 设备
     @param callback 回调
     */
    @ReactMethod
    public void powerOffKitchenScale(ReadableMap device, Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICDeviceManager.shared().getSettingManager().powerOffKitchenScale(deviceObj, (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });

    }


    /**
     双模设备配网

     @param device        设备
     @param ssid             WIFI SSID
     @param password    WIFI Password
     */
    @ReactMethod
    public void configWifi(ReadableMap device, String ssid, String password , Callback callback) {
        ICDevice deviceObj = ToDevice(device);

        ICDeviceManager.shared().getSettingManager().configWifi(deviceObj, ssid, password, (ICConstant.ICSettingCallBackCode code) -> {
            if (callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }


    /**
     双模设备更换设备域名

     @param device        设备
     @param server          App服务器域名,如:https://www.google.com
     */
    @ReactMethod
    public void setServerUrl(ReadableMap device, String server , Callback callback)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICDeviceManager.shared().getSettingManager().setServerUrl(deviceObj, server , (ICConstant.ICSettingCallBackCode code) -> {
            if(callback != null) {
                callback.invoke(code.ordinal());
            }
        });
    }




    /**
     设置用户信息给设备，调用该接口后，updateUserInfo接口将不会再对该设备生效
     注意:目前仅跳绳设备支持

     @param device      设备
     @param userInfoDict    用户信息
     */
    @ReactMethod
    public void setUserInfoToDevice(ReadableMap device, ReadableMap userInfoDict)
    {
        ICDevice deviceObj =  ToDevice(device);
        ICUserInfo userInfo = new ICUserInfo();
        if (userInfoDict.hasKey("age")) {
            userInfo.age = userInfoDict.getInt("age");
        }
        if (userInfoDict.hasKey("height")) {
            userInfo.height = userInfoDict.getInt("height");
        }
        if (userInfoDict.hasKey("sex")) {
            int sex = userInfoDict.getInt("sex");
            if (sex == 1) {
                userInfo.sex = ICConstant.ICSexType.ICSexTypeMale;
            }
            else {
                userInfo.sex = ICConstant.ICSexType.ICSexTypeFemal;
            }
        }
        if (userInfoDict.hasKey("weight")) {
            userInfo.weight = userInfoDict.getDouble("weight");
        }
        if (userInfoDict.hasKey("bfaType")) {
            int bfatype = userInfoDict.getInt("bfaType");
            userInfo.bfaType = ICConstant.ICBFAType.valueOf(bfatype);
        }
        if (userInfoDict.hasKey("weightUnit")) {
            int weightUnit = userInfoDict.getInt("weightUnit");
            userInfo.weightUnit = ICConstant.ICWeightUnit.valueOf(weightUnit);
        }
        if (userInfoDict.hasKey("rulerUnit")) {
            int rulerUnit = userInfoDict.getInt("rulerUnit");
            userInfo.rulerUnit = ICConstant.ICRulerUnit.valueOf(rulerUnit);
        }
        if (userInfoDict.hasKey("peopleType")) {
            int peopleTyp = userInfoDict.getInt("peopleType");
            if (peopleTyp == 0) {
                userInfo.peopleType = ICConstant.ICPeopleType.ICPeopleTypeNormal;
            }
            else
            {
                userInfo.peopleType = ICConstant.ICPeopleType.ICPeopleTypeSportman;
            }
        }
        if (userInfoDict.hasKey("rulerMode")) {
            int rulerMode = userInfoDict.getInt("rulerMode");
            userInfo.rulerMode = ICConstant.ICRulerMeasureMode.valueOf(rulerMode);
        }
        if (userInfoDict.hasKey("targetWeight")) {
            userInfo.targetWeight = userInfoDict.getDouble("targetWeight");
        }
        if (userInfoDict.hasKey("kitchenUnit")) {
            int kitchenUnit = userInfoDict.getInt("kitchenUnit");
            userInfo.kitchenUnit = ICConstant.ICKitchenScaleUnit.value(kitchenUnit);
        }
        if (userInfoDict.hasKey("userIndex")) {
            userInfo.userIndex = userInfoDict.getInt("userIndex");
        }
        if (userInfoDict.hasKey("weightDirection")) {
            userInfo.weightDirection = userInfoDict.getInt("weightDirection");
        }
        if (userInfoDict.hasKey("enableMeasureImpendence")) {
            userInfo.enableMeasureImpendence = userInfoDict.getBoolean("enableMeasureImpendence");
        }
        if (userInfoDict.hasKey("enableMeasureBalance")) {
            userInfo.enableMeasureBalance = userInfoDict.getBoolean("enableMeasureBalance");
        }
        if (userInfoDict.hasKey("enableMeasureHr")) {
            userInfo.enableMeasureHr = userInfoDict.getBoolean("enableMeasureHr");
        }
        if (userInfoDict.hasKey("enableMeasureGravity")) {
            userInfo.enableMeasureGravity = userInfoDict.getBoolean("enableMeasureGravity");
        }
        ICDeviceManager.shared().getSettingManager().setUserInfo(deviceObj, userInfo);
    }

    public void callDelegate(WritableArray param) {
        sendEventToRn("onDeviceManagerDelegate", param);
    }


    public WritableArray createDelegateArray(String funName) {
        WritableArray ret = Arguments.createArray();
        ret.pushString(funName);
        return ret;
    }

    public WritableArray createDelegateArray(String funName, ICDevice device) {
        WritableArray ret = Arguments.createArray();
        WritableMap ret2 = Arguments.createMap();
        ret2.putString("macAddr", device.macAddr);
        ret.pushString(funName);
        ret.pushMap(ret2);
        return ret;
    }

    @Override
    public void onInitFinish(boolean b) {
        WritableArray param = createDelegateArray("onInitFinish");
        param.pushBoolean(b);

        callDelegate(param);
    }

    @Override
    public void onBleState(ICConstant.ICBleState icBleState) {
        WritableArray param = createDelegateArray("onBleState");
        param.pushInt(icBleState.ordinal());
        callDelegate(param);
    }

    @Override
    public void onDeviceConnectionChanged(ICDevice icDevice, ICConstant.ICDeviceConnectState icDeviceConnectState) {
        WritableArray param = createDelegateArray("onDeviceConnectionChanged", icDevice);
        param.pushInt(icDeviceConnectState.ordinal());
        callDelegate(param);
    }

    @Override
    public void onReceiveWeightData(ICDevice icDevice, ICWeightData icWeightData) {
        WritableArray param = createDelegateArray("onReceiveWeightData", icDevice);
        Map<String ,Object> mdata = toMap(icWeightData);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);
    }

    @Override
    public void onReceiveKitchenScaleData(ICDevice icDevice, ICKitchenScaleData icKitchenScaleData) {
        WritableArray param = createDelegateArray("onReceiveKitchenScaleData", icDevice);
        Map<String ,Object> mdata = toMap(icKitchenScaleData);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);

    }

    @Override
    public void onReceiveKitchenScaleUnitChanged(ICDevice icDevice, ICConstant.ICKitchenScaleUnit icKitchenScaleUnit) {
        WritableArray param = createDelegateArray("onReceiveKitchenScaleUnitChanged", icDevice);
        param.pushInt(icKitchenScaleUnit.getValue());
        callDelegate(param);

    }

    @Override
    public void onReceiveCoordData(ICDevice icDevice, ICCoordData icCoordData) {
        WritableArray param = createDelegateArray("onReceiveCoordData", icDevice);
        Map<String ,Object> mdata = toMap(icCoordData);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);

    }

    @Override
    public void onReceiveRulerData(ICDevice icDevice, ICRulerData icRulerData) {
        WritableArray param = createDelegateArray("onReceiveRulerData", icDevice);
        Map<String ,Object> mdata = toMap(icRulerData);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);

    }

    @Override
    public void onReceiveRulerHistoryData(ICDevice icDevice, ICRulerData icRulerData) {
        WritableArray param = createDelegateArray("onReceiveRulerHistoryData", icDevice);
        Map<String ,Object> mdata = toMap(icRulerData);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);

    }

    @Override
    public void onReceiveWeightCenterData(ICDevice icDevice, ICWeightCenterData icWeightCenterData) {
        WritableArray param = createDelegateArray("onReceiveWeightCenterData", icDevice);
        Map<String ,Object> mdata = toMap(icWeightCenterData);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);

    }

    @Override
    public void onReceiveWeightUnitChanged(ICDevice icDevice, ICConstant.ICWeightUnit icWeightUnit) {
        WritableArray param = createDelegateArray("onReceiveWeightUnitChanged", icDevice);
        param.pushInt(icWeightUnit.getValue());
        callDelegate(param);

    }

    @Override
    public void onReceiveRulerUnitChanged(ICDevice icDevice, ICConstant.ICRulerUnit icRulerUnit) {
        WritableArray param = createDelegateArray("onReceiveRulerUnitChanged", icDevice);
        param.pushInt(icRulerUnit.getValue());
        callDelegate(param);

    }

    @Override
    public void onReceiveRulerMeasureModeChanged(ICDevice icDevice, ICConstant.ICRulerMeasureMode icRulerMeasureMode) {
        WritableArray param = createDelegateArray("onReceiveRulerMeasureModeChanged", icDevice);
        param.pushInt(icRulerMeasureMode.getValue());
        callDelegate(param);

    }

    @Override
    public void onReceiveMeasureStepData(ICDevice icDevice, ICConstant.ICMeasureStep icMeasureStep, Object o) {
        WritableArray param = createDelegateArray("onReceiveMeasureStepData", icDevice);
        param.pushInt(icMeasureStep.ordinal());
        Map<String ,Object> mdata = toMap(o);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);

    }

    @Override
    public void onReceiveWeightHistoryData(ICDevice icDevice, ICWeightHistoryData icWeightHistoryData) {
        WritableArray param = createDelegateArray("onReceiveWeightHistoryData", icDevice);
        Map<String ,Object> mdata = toMap(icWeightHistoryData);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);
    }

    @Override
    public void onReceiveSkipData(ICDevice icDevice, ICSkipData icSkipData) {
        WritableArray param = createDelegateArray("onReceiveSkipData", icDevice);

        try{
            Map<String ,Object> mdata = toMap(icSkipData);
            
            mdata.remove("mode");
            mdata.remove("freqs");

            mdata.put("mode", 0);
            mdata.put("freqs", new ArrayList<Integer>());

            WritableMap data = Arguments.makeNativeMap(mdata).copy();
            param.pushMap(data);
        }catch(Exception e){
            Log.d("[SKIP DEBUG]", e.getMessage() + "/" + e.getCause());
        }
        callDelegate(param);
    }

    @Override
    public void onReceiveHistorySkipData(ICDevice icDevice, ICSkipData icSkipData) {
        WritableArray param = createDelegateArray("onReceiveHistorySkipData", icDevice);

        try{
            Map<String ,Object> mdata = toMap(icSkipData);
            
            mdata.remove("mode");
            mdata.remove("freqs");

            mdata.put("mode", 0);
            mdata.put("freqs", new ArrayList<Integer>());

            WritableMap data = Arguments.makeNativeMap(mdata).copy();
            param.pushMap(data);
        }catch(Exception e){
            Log.d("[SKIP DEBUG]", e.getMessage() + "/" + e.getCause());
        }
        callDelegate(param);
    }

    @Override
    public void onReceiveSkipBattery(ICDevice icDevice, int i) {
        WritableArray param = createDelegateArray("onReceiveSkipBattery", icDevice);
        param.pushInt(i);
        callDelegate(param);
    }

    @Override
    public void onReceiveUpgradePercent(ICDevice icDevice, ICConstant.ICUpgradeStatus icUpgradeStatus, int i) {
        WritableArray param = createDelegateArray("onReceiveUpgradePercent", icDevice);
        param.pushInt(icUpgradeStatus.ordinal());
        param.pushInt(i);
        callDelegate(param);

    }

    @Override
    public void onReceiveDeviceInfo(ICDevice icDevice, ICDeviceInfo icDeviceInfo) {
        WritableArray param = createDelegateArray("onReceiveDeviceInfo", icDevice);
        Map<String ,Object> mdata = toMap(icDeviceInfo);
        WritableMap data = Arguments.makeNativeMap(mdata).copy();
        param.pushMap(data);
        callDelegate(param);
    }

    @Override
    public void onReceiveDebugData(ICDevice icDevice, int i, Object o) {

    }

    @Override
    public void onReceiveConfigWifiResult(ICDevice icDevice, ICConstant.ICConfigWifiState icConfigWifiState) {
        WritableArray param = createDelegateArray("onReceiveConfigWifiResult", icDevice);
        param.pushInt(icConfigWifiState.ordinal());
        callDelegate(param);
    }

    @Override
    public void onScanResult(ICScanDeviceInfo deviceInfo) {
        WritableMap deviceInfoDict = Arguments.createMap();
        WritableArray services = Arguments.createArray();
        if (deviceInfo.getServices() != null) {
            for (String serviceUUID :
                    deviceInfo.getServices()) {
                services.pushString(serviceUUID);
            }
        }
        deviceInfoDict.putString("name" , deviceInfo.getName());
        deviceInfoDict.putInt("type" , deviceInfo.getType().ordinal());
        deviceInfoDict.putInt("subType", deviceInfo.getSubType() == null ? 0 : deviceInfo.getSubType().ordinal());
        deviceInfoDict.putInt("communicationType", deviceInfo.getCommunicationType().ordinal());
        deviceInfoDict.putString("macAddr",  deviceInfo.getMacAddr());
        deviceInfoDict.putArray("services" , services);
        deviceInfoDict.putInt("rssi" , deviceInfo.getRssi());

        WritableArray arr = Arguments.createArray();
        arr.pushMap(deviceInfoDict);

        sendEventToRn("onScanResult", arr);
    }
}
