import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';

const SKIPPING_INIT = 'skipping/INIT';
const SKIPPING_SET = 'skipping/SET';
const SKIPPING_SET_CONNECTION = 'skipping/SET/CONNECTION';
const SKIPPING_SET_BATTERY = 'skipping/SET/BATTERY';
const SKIPPING_SET_DEVICE = 'skipping/SET/DEVICE';

const SKIPPING_SET_DEVICE_LIST = 'skipping/SET/DEVICE/LIST';

const SKIPPING_UPDATE = 'skipping/UPDATE';


export const initSkipping = createAction(SKIPPING_INIT);
export const setSkipping =  createAction(SKIPPING_SET);

export const updateSkipping = createAction(SKIPPING_UPDATE);
export const setSkippingConnection = createAction(SKIPPING_SET_CONNECTION);
export const setConnectedDeviceAddr = createAction(SKIPPING_SET_DEVICE);

export const setSkippingBattery = createAction(SKIPPING_SET_BATTERY);

export const setSkippingDeviceList = createAction(SKIPPING_SET_DEVICE_LIST);

const initialState = {
    connection: 'disconnect',     // disconnect, connect, connecting
    connectedMacAddr: '',
    battery: -1,
    skippingData: {},
    deviceList: []
};

export const skippingReducer = handleActions({
    [SKIPPING_INIT] : (state, action) => 
        produce(state, draft => {
            draft.jumpCount = 0;
        }),
    [SKIPPING_SET] : (state, action) =>
        produce(state, draft => {
            draft.skippingData = action.payload;
        }),
    [SKIPPING_SET_CONNECTION] : (state, action) =>
        produce(state, draft => {
            draft.connection = action.payload;
        }),
    [SKIPPING_SET_BATTERY] : (state, action) =>
        produce(state, draft => {
            draft.battery = action.payload;
        }),
    [SKIPPING_SET_DEVICE] : (state, action) =>
        produce(state, draft => {
            draft.connectedMacAddr = action.payload;
        }),
    [SKIPPING_SET_DEVICE_LIST] : (state, action) =>
        produce(state, draft => {
            const result = state.deviceList.find(e => e.macAddr === action.payload.macAddr);

            if(result == undefined)
            {
                draft.deviceList.push(action.payload);
            }
        }),
},initialState);