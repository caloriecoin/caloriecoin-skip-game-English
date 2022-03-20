import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';

const USER_INIT = 'user/INIT';
const USER_UPDATE = 'user/UPDATE';

const USER_UPDATE_WALLET = 'user/UPDATE/WALLET';

export const initUser = createAction(USER_INIT);
export const updateUser =  createAction(USER_UPDATE);

export const updateUserWallet = createAction(USER_UPDATE_WALLET);

const initialState = {
    info: {
        id: '',
        nickname: '',
        profileURL: '',
        gender: '',
        weight:0,
        height:0,
        birthday: ''
    },
    wallet:{
        address: '',
        privateKey: ''
    },
};

export const userReducer = handleActions({
    [USER_INIT] : (state, action) => 
        produce(state, draft => {
            draft = initialState;
        }),
    [USER_UPDATE] : (state, action) =>
        produce(state, draft => {
            draft.info = action.payload;
        }),
    [USER_UPDATE_WALLET] : (state, action) =>
        produce(state, draft => {
            draft.wallet = action.payload;
        }),
},initialState);