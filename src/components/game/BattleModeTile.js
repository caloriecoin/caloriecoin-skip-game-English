import React from 'react';
import {useSelector} from 'react-redux';

import Web3 from 'web3';
import {
  CalorieCoinContractABI,
  CalorieCoinContractAddress,
} from '@components/klaytn/CalorieCoinConnector';

import {
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Toast from 'react-native-toast-message';

import BattleModeBackgroundImage from '@/assets/image/img-vs.png';

const BattleModeTile = ({navigation}) => {
  const balanceOf = async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://api.baobab.klaytn.net:8651/'),
    );

    const calorieCoinContract = new web3.eth.Contract(
      CalorieCoinContractABI,
      CalorieCoinContractAddress,
    );

    const balance = await calorieCoinContract.methods
      .balanceOf(walletInfo.address)
      .call();

    return web3.utils.fromWei(balance, 'mwei');
  };

  const {walletInfo} = useSelector(({user}) => ({
    walletInfo: user.wallet,
  }));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        balanceOf().then(data => {
          if (Number(data) >= 10) {
            navigation.navigate('battle');
          } else {
            Toast.show({
              type: 'error',
              text1: '⚠ Alret',
              text2: ' at leaset 10 caloriecoin needs for BattleGame!',
            });
          }
        });
      }}>
      <ImageBackground
        source={BattleModeBackgroundImage}
        style={styles.background}
        resizeMode="cover">
        <Text style={styles.title}>Game Mode</Text>
        <Text style={styles.subtitle}>(Battle Mode)</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 18,
  },
  background: {
    width: 160,
    height: 100,
    padding: 14,
  },
  title: {
    color: 'white',
    fontFamily: 'SUIT-Bold',
  },
  subtitle: {
    color: 'white',
    fontFamily: 'SUIT-Medium',
  },
});

export default BattleModeTile;
