import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, NativeModules } from 'react-native';

import axios from 'axios';
import { useDispatch } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BLEContainer from '@container/BLEContainer';

import GameView from '@view/GameView';
import HistoryView from '@view/HistoryView';
import QuestView from '@view/QuestView';
import RankingView from '@view/RankingView';
import MyInfoView from '@view/MyInfoView';
import RegisterView from '@view/RegisterView';

import IntroView from '@view/IntroView';
import LoginView from '@view/LoginView';

import TabBarIcon from '@components/Navigator/TabBarIcon';

import {updateUser, updateUserWallet} from '@redux/User';

import LoadingWrap from '@components/common/LoadingWrap';

const {RNKakaoLogins} = NativeModules;

const Tab = createBottomTabNavigator();

const App = ({ navigation }) => {
  const [loading, setLoading] = useState(0.0);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);

  const timerId = useRef(0);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    timerId.current = setInterval(() => {
      setLoading(e => e + 0.01);
    }, 50);

    return ()=>{clearInterval(timerId.current)};
  },[]);

  useEffect(()=>{
    if(loading >= 1.0)
      clearInterval(timerId.current);
  },[loading]);

  if(loading < 1.0)
  {
    return <IntroView loading={loading}/>;
  }
  else if(loading >= 1.0 && !isLogin)
  {
    return <LoginView clickHandler={()=>{
      setLoadLogin(true);
      RNKakaoLogins.login().then(response=>{
        RNKakaoLogins.getProfile().then(async response=>{
          if(response)
          {
            const callUserData = await axios.get(`https://caloriecoin.herokuapp.com/api/user/getUserAndWallet/${response.id}`);

            if(callUserData?.data)
            {
              const user = callUserData.data.user;
              const wallet = callUserData.data.userWallet;
              
              if(wallet)
              {
                dispatch(updateUserWallet({
                  address:wallet.address,
                  privateKey:wallet.privateKey
                }));

                if(user)
                {
                  dispatch(updateUser({
                    id: user.kakaoId,
                    nickname: user.nickname,
                    profileURL: user.profile,
                    gender: user.gender,
                    weight: user.weight,
                    height: user.height,
                    birthday: user.birthday
                  }));

                  setIsRegister(true);
                }
              }
              else
              {
                dispatch(updateUser({
                  id: response.id,
                  nickname: response.nickname,
                  profileURL: response.profileImageUrl,
                  gender: 'female',
                  birthday: '2000-01-01'
                }));
              }
            }
            
            setIsLogin(true);
            setLoadLogin(false);
          }
        });
      }).catch(err=>{
        setLoadLogin(false);
      }).catch(err=>{
        setLoadLogin(false);
      });
    }}/>; 
  }
  else if(loading >= 1.0 && isLogin && !isRegister)
  {
    return <RegisterView callBack={()=>{
      setIsRegister(true);
    }}/>;
  }
  else
  {
    return (
        <>
          <Tab.Navigator 
            screenOptions={({route})=>({
              tabBarIcon: ({ focused }) => (<TabBarIcon name={route.name} focus={focused}/>),
              tabBarActiveTintColor: '#FF3348',
              headerTitleStyle:{
                fontFamily: 'Kanit-ExtraBoldItalic',
                color:'#FF3348',
              },
              headerTitleAlign:'center',
              headerTitle: 'CalorieCoin',
              headerLeft: () => (<TouchableOpacity onPress={()=>{navigation.navigate('ble_view')}}>
                  <Text style={styles.bleBtnDisabled}>BLE</Text>
                </TouchableOpacity>)
            })}
            backBehavior="none"
          >
            <Tab.Screen name="game" 
              component={GameView} 
              options={{ 
                title:'Game',
            }} 
            />
            <Tab.Screen name="history" 
              component={HistoryView} 
              options={{ 
                title:'Record',
            }} 
            />
            <Tab.Screen name="quest" 
              component={QuestView} 
              options={{ 
                title:'Quest',
            }} 
            />
            <Tab.Screen name="ranking" 
              component={RankingView} 
              options={{ 
                title:'Ranking',
            }} 
            />
            <Tab.Screen name="activity" 
              component={MyInfoView} 
              options={{ 
                title:'MyInfo',
            }} 
            />
          </Tab.Navigator>
          <BLEContainer/>    
          </>
    );
  }
};

const styles = StyleSheet.create({
  bleBtnDisabled:{
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#696974',
    borderRadius:10,
    marginLeft:10,
    color:'white'
  }
})

export default App;
