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
  ScrollView,
} from 'react-native';

import CoinImage from '@/assets/image/coin_logo.png';
import TronLogo from '@/assets/image/tron_logo.png';

import TronWeb from 'tronweb';

import {
  TronJsonRpcUrl,
  CalorieCoinContractABI,
  CalorieCoinContractAddress,
} from '@/components/tron/TronEnvironments';
import axios from 'axios';

import Toast from 'react-native-toast-message';

const ShopView = ({navigation}) => {
  const [balance, setBalance] = useState();

  const [menu, setMenu] = useState('nft');
  const [itemList, setItemList] = useState([]);

  const {walletInfo} = useSelector(({user}) => ({
    walletInfo: user.wallet,
  }));

  const callTronAccount = async () => {
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

    setBalance(data / 1000000);
  };

  const getShopItemList = async category => {
    setItemList([]);
    const {data} = await axios.get(
      'https://caloriecoin.herokuapp.com/api/product/getAllProducts',
    );

    const findDatas = data.filter(x => x.product_category === category);

    setItemList(findDatas);
  };

  useEffect(() => {
    if (menu) {
      getShopItemList(menu);
    }
  }, [menu]);

  useEffect(() => {
    callTronAccount();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={{marginRight: 72}}
          onPress={() => {
            setMenu('nft');
          }}>
          <Text
            style={menu === 'nft' ? style.selectedText : style.unSelectedText}>
            NFT Shop
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMenu('e2e');
          }}>
          <Text
            style={menu === 'e2e' ? style.selectedText : style.unSelectedText}>
            E2E Shop
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.9, width: '90%'}}>
        <FlatList
          key={itemList._id}
          data={itemList}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            marginBottom: 24,
          }}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{width: 130}}
                  onPress={() => {
                    if (balance >= item.product_price) {
                      navigation.navigate('shop_detail', {
                        itemId: item._id,
                      });
                    } else {
                      Toast.show({
                        type: 'error',
                        text1: '⚠ Alret',
                        text2: `Insufficient balance (more than ${item.product_price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} CAL)`,
                      });
                    }
                  }}>
                  <Image
                    source={{uri: item.product_thumbNail}}
                    style={{
                      width: '100%',
                      height: 115,
                      backgroundColor: '#f1f1f5',
                      borderRadius: 18,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'SUIT-Regular',
                      fontSize: 12,
                      marginTop: 10,
                      marginBottom: 10,
                      maxWidth: 165,
                    }}>
                    {item.product_name}
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image source={CoinImage} style={{width: 16, height: 16}} />
                    <Text
                      style={{
                        fontFamily: 'SUIT-ExtraBold',
                        fontSize: 14,
                        marginLeft: 4,
                      }}>
                      {item.product_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      {' CAL'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={({index}) => index}
          numColumns={2}
          style={{
            width: '100%',
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  selectedText: {
    fontFamily: 'SUIT-ExtraBold',
    fontSize: 18,
    paddingBottom: 10,
    borderBottomWidth: 3,
    color: '#000',
  },
  unSelectedText: {
    fontFamily: 'SUIT-ExtraBold',
    fontSize: 18,
    color: '#92929D',
  },
});
export default ShopView;
