import './global';
import './shim';
import 'react-native-gesture-handler';

import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import store from '@redux';

import App from './App';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Mining from '@components/game/Mining';
import Battle from '@components/game/Battle';

import BLEconnectionView from '@/view/BLEConnectionView';
import WalletView from '@/view/WalletView';
import StoreView from '@view/StoreView';
import ShopDetailView from '@view/ShopDetailView';

const Stack = createNativeStackNavigator();

const Wrapper = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={App}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="mining"
            component={Mining}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="battle"
            component={Battle}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ble_view"
            component={BLEconnectionView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="wallet_view"
            component={WalletView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="store"
            component={StoreView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="shop_detail"
            component={ShopDetailView}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default Wrapper;
