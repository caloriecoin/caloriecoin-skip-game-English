import { combineReducers, createStore } from "redux";

import { skippingReducer } from './Skipping';
import { userReducer } from './User';

const rootReducer = combineReducers({
    skipping: skippingReducer,
    user: userReducer
})

const store = createStore(rootReducer);

export default store;