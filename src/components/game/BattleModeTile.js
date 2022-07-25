import React from 'react';
import {useSelector} from 'react-redux';

import TronWeb from 'tronweb';

import {
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Toast from 'react-native-toast-message';

import BattleModeBackgroundImage from '@/assets/image/img-vs.png';

const BattleModeTile = ({navigation}) => {
  const {walletInfo} = useSelector(({user}) => ({
    walletInfo: user.wallet,
  }));

  const balanceOf = async () => {
    const webProvider = TronWeb.providers.HttpProvider;
    const fullNode = new webProvider('https://nile.trongrid.io');
    const solidityNode = new webProvider('https://nile.trongrid.io');
    const eventServer = new webProvider('https://nile.trongrid.io');
    const pk = walletInfo.privateKey.substring(2);
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, pk);

    const address = tronWeb.address.fromPrivateKey(pk);

    const calorieCoin = await tronWeb
      .contract()
      .at('TK6XHBYhqjFnDNKrgBy4YRX8seHiMxUHo8');

    const resp = await calorieCoin.methods.balanceOf(address).call();

    const data = JSON.parse(resp);

    return data / 1000000;
  };

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
