import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  Linking,
} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import BackIcon from '@/assets/icon/back.svg';
import TronLogo from '@/assets/image/tron_logo.png';
import DefaultImage from '@/assets/icon/profile-default.svg';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StoreView = ({navigation}) => {
  const {userInfo, walletInfo} = useSelector(({user}) => ({
    userInfo: user.info,
    walletInfo: user.wallet,
  }));
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          marginRight: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BackIcon width={32} height={32} style={{margin: 16}} />
        <Text style={{fontSize: 24, fontFamily: 'SUIT-Regular'}}>
          CalorieCoin Shop
        </Text>
      </TouchableOpacity>
      <View style={styles.itemLayout}>
        {userInfo.profileURL ? (
          <Image
            source={{uri: userInfo.profileURL}}
            style={{width: 48, height: 48, borderRadius: 24}}
          />
        ) : (
          <DefaultImage width="48" height="48" />
        )}
        <Text style={{fontSize: 26, marginLeft: 12}}>{userInfo.nickname}</Text>
        <Text style={{fontSize: 22, marginLeft: 'auto'}}>0 CAL</Text>
        <TouchableOpacity
          style={{
            marginLeft: 8,
            backgroundColor: '#fc6100',
            padding: 8,
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Buy List</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {a.map(item => {
          return (
            <View style={styles.itemLayout}>
              <Image source={TronLogo} style={styles.itemImage} />
              <View style={styles.itemWrap}>
                <Text style={styles.itemTitle}>Title</Text>
                <Text style={styles.itemSubscription}>SubTitle</Text>
              </View>
              <View style={styles.itemPrice}>
                <Text style={styles.itemTitle}>3,000 CAL</Text>
              </View>
            </View>
          );
        })}

        <View style={styles.itemLayout}>
          <Image source={TronLogo} style={styles.itemImage} />
          <View style={styles.itemWrap}>
            <Text style={styles.itemTitle}>Title</Text>
            <Text style={styles.itemSubscription}>SubTitle</Text>
          </View>
          <View style={styles.itemPrice}>
            <Text style={styles.itemTitle}>3,000 CAL</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  itemImage: {
    width: 84,
    height: 84,
    marginRight: 18,
  },
  itemWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 12,
  },
  itemSubscription: {
    fontSize: 18,
  },
  itemPrice: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 8,
  },
});

export default StoreView;
