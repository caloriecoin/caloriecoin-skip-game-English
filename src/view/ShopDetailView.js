import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

import CoinImage from '@/assets/image/coin_logo.png';

import BackIcon from '@/assets/icon/back.svg';

import TronWeb from 'tronweb';

import {
  TronJsonRpcUrl,
  CalorieCoinContractABI,
  CalorieCoinContractAddress,
} from '@/components/tron/TronEnvironments';

import Toast from 'react-native-toast-message';
import axios from 'axios';

const ShopDetailView = ({route, navigation}) => {
  const {itemId} = route.params;

  const [balance, setBalance] = useState();
  const [modalView, setModalView] = useState(false);

  const [itemDetailInfo, setItemDetailInfo] = useState();

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

  const getItemDetailInfo = async () => {
    if (itemId) {
      const {data} = await axios.get(
        `https://caloriecoin.herokuapp.com/api/product/getOneProduct/${itemId}`,
      );
      setItemDetailInfo(data);
    }
  };

  useEffect(() => {
    callTronAccount();
    getItemDetailInfo();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Modal animationType="slide" transparent={true} visible={modalView}>
        <View
          style={{
            backgroundColor: '#00000088',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 24,
              backgroundColor: '#fff',
              borderRadius: 17,
              height: '45%',
              width: '85%',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 3,
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 12,
              }}>
              <Image
                source={{uri: itemDetailInfo?.product_thumbNail}}
                style={{
                  flex: 1,
                  backgroundColor: '#f1f1f5',
                  borderRadius: 8,
                }}
              />
              <View style={{width: '80%', flex: 3, marginLeft: 12}}>
                <Text
                  style={{
                    fontFamily: 'SUIT-Regular',
                    fontSize: 11,
                    color: '#333',
                  }}>
                  {itemDetailInfo?.product_name}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                  }}>
                  <Image source={CoinImage} style={{width: 16, height: 16}} />
                  <Text
                    style={{
                      fontFamily: 'SUIT-Bold',
                      fontSize: 16,
                      marginLeft: 4,
                    }}>
                    {itemDetailInfo?.product_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    {' CAL'}
                  </Text>
                </View>
                {/* <Text
                  style={{
                    fontFamily: 'SUIT-Regular',
                    fontSize: 11,
                    color: '#858585',
                    marginTop: 10,
                  }}>
                  Expired at 31days after
                </Text> */}
              </View>
            </View>
            <View
              style={{
                flex: 3,
                backgroundColor: '#f2f3f5',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 12,
                  paddingLeft: 14,
                  paddingRight: 14,
                }}>
                <Text
                  style={{
                    fontFamily: 'SUIT-Regular',
                    fontSize: 11,
                    color: '#333',
                  }}>
                  My Balance
                </Text>
                <Text
                  style={{
                    fontFamily: 'SUIT-Bold',
                    fontSize: 16,
                    color: '#333',
                  }}>
                  {balance?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  CAL
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 14,
                  paddingRight: 14,
                }}>
                <Text
                  style={{
                    fontFamily: 'SUIT-Regular',
                    fontSize: 11,
                    color: '#333',
                  }}>
                  Item costs
                </Text>
                <Text
                  style={{
                    fontFamily: 'SUIT-Bold',
                    fontSize: 16,
                    color: '#333',
                  }}>
                  {itemDetailInfo?.product_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  {' CAL'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontFamily: 'SUIT-Bold', fontSize: 16, color: '#333'}}>
                Did you sure that buy a item ?
              </Text>
            </View>
            <View
              style={{
                flex: 1.2,
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 12,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: '#f1f1f5',
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                }}
                onPress={() => {
                  setModalView(false);
                }}>
                <Text
                  style={{
                    fontFamily: 'SUIT-Bold',
                    fontSize: 12,
                    color: '#333',
                  }}>
                  No I didn't
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: '#ff3348',
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setModalView(false);
                  navigation.navigate('home');
                  Toast.show({
                    type: 'success',
                    text1: 'purchase',
                    text2: 'Your purchase has been completed ✅',
                  });
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'SUIT-Bold',
                    fontSize: 12,
                  }}>
                  Sure
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{flex: 0.1, marginRight: 'auto'}}>
        <BackIcon width={32} height={32} style={{margin: 16}} />
      </TouchableOpacity>
      <View style={{flex: 0.9, width: '90%'}}>
        <Image
          source={{uri: itemDetailInfo?.product_thumbNail}}
          style={{
            height: '35%',
            backgroundColor: '#f1f1f5',
            borderRadius: 8,
          }}
        />
        <View style={{marginTop: 14}}>
          <Text>{itemDetailInfo?.product_name}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <Image source={CoinImage} style={{width: 16, height: 16}} />
            <Text
              style={{
                fontFamily: 'SUIT-ExtraBold',
                fontSize: 14,
                marginLeft: 4,
              }}>
              {itemDetailInfo?.product_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              {' CAL'}
            </Text>
          </View>
          {/* <Text
            style={{
              fontFamily: 'SUIT-Regular',
              fontSize: 11,
              color: '#858585',
              marginTop: 8,
            }}>
            유효기간 31일
          </Text> */}
        </View>
        <View
          style={{
            backgroundColor: '#f2f3f5',
            borderRadius: 8,
            padding: 14,
            marginTop: 12,
          }}>
          <Text
            style={{fontFamily: 'SUIT-Regular', fontSize: 11, color: '#333'}}>
            {itemDetailInfo?.product_detail}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flex: 0.1,
          backgroundColor: '#ff3348',
          borderRadius: 10,
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 18,
        }}
        onPress={() => {
          setModalView(true);
        }}>
        <Text
          style={{color: 'white', fontFamily: 'SUIT-SemiBold', fontSize: 12}}>
          Purchase
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  modalText: {
    marginTop: 18,
    fontFamily: 'SUIT-SemiBold',
    fontSize: 18,
  },
});
export default ShopDetailView;
