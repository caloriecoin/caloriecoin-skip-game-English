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

import CoinImage from '@/assets/image/coin_logo.png';

import BackIcon from '@/assets/icon/back.svg';

import TronWeb from 'tronweb';

import AsyncStorage from '@react-native-async-storage/async-storage';

const WalletView = ({navigation}) => {
  const [balance, setBalance] = useState(0);
  const [txList, setTxList] = useState([]);

  const [modalView, setModalView] = useState(false);
  const [currentTx, setCurrentTx] = useState(null);

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

  const handleWithdraw = async () => {};

  const transferCoin = async (toAddress, amount) => {
    const webProvider = TronWeb.providers.HttpProvider;
    const fullNode = new webProvider('https://nile.trongrid.io');
    const solidityNode = new webProvider('https://nile.trongrid.io');
    const eventServer = new webProvider('https://nile.trongrid.io');
    const pk = walletInfo.privateKey.substring(2);
    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, pk);

    const calorieCoin = await tronWeb
      .contract()
      .at('TK6XHBYhqjFnDNKrgBy4YRX8seHiMxUHo8');

    await calorieCoin.methods.transfer(toAddress, amount).send();

    await callTronAccount();
  };

  useEffect(async () => {
    callTronAccount();

    const data = await AsyncStorage.getItem('transactionList');

    if (data) {
      const jsonData = JSON.parse(data);

      console.log(jsonData.transactionList);

      if (jsonData?.transactionList?.length > 0) {
        setTxList(jsonData.transactionList);
      }
    }
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
        <TouchableOpacity
          style={{
            backgroundColor: '#00000088',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setModalView(false);
          }}>
          <View
            style={{
              padding: 24,
              backgroundColor: '#fff',
              borderRadius: 17,
              width: '85%',
            }}>
            <Text
              style={{
                fontFamily: 'SUIT-ExtraBold',
                fontSize: 24,
                textAlign: 'center',
                marginBottom: 16,
              }}>
              Transaction details
            </Text>

            <Text
              style={{fontFamily: 'SUIT-Regular', fontSize: 16, color: '#888'}}>
              Block height
            </Text>
            <Text style={{fontFamily: 'SUIT-Regular', fontSize: 16}}>
              # {currentTx && currentTx.blockNumber}
            </Text>

            <Text
              style={{
                fontFamily: 'SUIT-Regular',
                fontSize: 16,
                color: '#888',
                marginTop: 16,
              }}>
              Caloriecoin team address
            </Text>
            <Text
              numberOfLines={1}
              style={{fontFamily: 'SUIT-Regular', fontSize: 16, width: '90%'}}>
              {currentTx && currentTx.from}
            </Text>

            <Text
              style={{
                fontFamily: 'SUIT-Regular',
                fontSize: 16,
                color: '#888',
                marginTop: 16,
              }}>
              My address
            </Text>
            <Text
              numberOfLines={1}
              style={{fontFamily: 'SUIT-Regular', fontSize: 16, width: '90%'}}>
              {currentTx && currentTx.to}
            </Text>

            <Text
              style={{
                fontFamily: 'SUIT-Regular',
                fontSize: 16,
                color: '#888',
                marginTop: 16,
              }}>
              Network fee
            </Text>
            <View
              style={{
                backgroundColor: '#eee',
                borderRadius: 14,
                padding: 8,
                marginTop: 8,
                marginBottom: 8,
              }}>
              <View
                style={{flexDirection: 'row', marginBottom: 8, marginTop: 8}}>
                <Text style={{fontFamily: 'SUIT-Regular', marginRight: 'auto'}}>
                  Maximum gas
                </Text>
                {/* <Text style={{fontFamily:'SUIT-Bold', marginLeft:'auto'}}>{currentTx && commaText(web3.utils.hexToNumber(currentTx.gas))}</Text> */}
              </View>

              <View style={{flexDirection: 'row', marginBottom: 8}}>
                <Text style={{fontFamily: 'SUIT-Regular', marginRight: 'auto'}}>
                  Gas fee
                </Text>
                {/* <Text style={{fontFamily:'SUIT-Bold', marginLeft:'auto'}}>{currentTx && web3.utils.fromWei(web3.utils.hexToNumberString(currentTx.gasPrice), 'gwei')} <Text style={{color:'#999'}}>STON</Text></Text> */}
              </View>

              <View style={{flexDirection: 'row', marginBottom: 8}}>
                <Text style={{fontFamily: 'SUIT-Regular', marginRight: 'auto'}}>
                  Used gas
                </Text>
                {/* <Text style={{fontFamily:'SUIT-Bold', marginLeft:'auto'}}>{currentTx && commaText(currentTx.gasUsed)}</Text> */}
              </View>

              <View style={{flexDirection: 'row', marginBottom: 8}}>
                <Text style={{fontFamily: 'SUIT-Regular', marginRight: 'auto'}}>
                  Transaction fee
                </Text>
                {/* <Text style={{fontFamily:'SUIT-Bold', marginLeft:'auto'}}>{currentTx && web3.utils.fromWei(web3.utils.hexToNumberString(currentTx.gasUsed * currentTx.gasPrice), 'ether')} <Text style={{color:'#999'}}>KLAY</Text></Text> */}
              </View>
            </View>

            <Text style={{marginTop: 6, fontFamily: 'SUIT-Bold', fontSize: 12}}>
              Transaction fees are borne by the Caloriecoin team.
            </Text>
            {currentTx && (
              <TouchableOpacity
                style={{marginTop: 18}}
                onPress={() => {
                  Linking.openURL(
                    `https://baobab.scope.klaytn.com/tx/${currentTx.transactionHash}`,
                  );
                }}>
                <Text
                  style={{
                    padding: 12,
                    textAlign: 'center',
                    fontFamily: 'SUIT-Bold',
                    backgroundColor: '#585C8A',
                    borderRadius: 8,
                    color: 'white',
                  }}>
                  Open on KlaytnScope
                </Text>
              </TouchableOpacity>
            )}

            <Text
              style={{
                marginTop: 28,
                textAlign: 'center',
                fontFamily: 'SUIT-Regular',
                fontSize: 14,
              }}>
              Touch anywhere to close the window.
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
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
        <Text style={{fontSize: 24, fontFamily: 'SUIT-Regular'}}>Wallet</Text>
      </TouchableOpacity>
      <View style={styles.top}>
        <Text style={{fontFamily: 'SUIT-SemiBold', fontSize: 16}}>
          Balance :{' '}
        </Text>
        <Image source={CoinImage} style={{width: 18, height: 18}} />
        <Text style={styles.value}>{balance} CAL</Text>
      </View>
      <Text style={{fontFamily: 'SUIT-Bold', fontSize: 22, color: 'black'}}>
        Transaction list
      </Text>
      <FlatList
        data={txList}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#f1f1f5',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 18,
                margin: 12,
                borderRadius: 14,
              }}
              onPress={() => {
                setModalView(true);
                setCurrentTx(item);
              }}>
              <View style={{marginRight: 'auto'}}>
                <Text style={{marginRight: 'auto', fontFamily: 'SUIT-Bold'}}>
                  # {item.blockNumber}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    width: '35%',
                    fontFamily: 'SUIT-Regular',
                    marginTop: 8,
                  }}>
                  Tx Hash | {item.transactionHash}
                </Text>
              </View>
              <View style={{marginLeft: 'auto'}}>
                <Text style={{fontFamily: 'SUIT-Bold', fontSize: 24}}>
                  + 10
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        style={{marginTop: 14, width: '85%'}}
        keyExtractor={item => item.blockHash}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.withdrawButton}
          onPress={() => {
            handleWithdraw();
          }}>
          <Text
            style={{fontFamily: 'SUIT-Regular', fontSize: 18, color: 'white'}}>
            Withdraw
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  withdrawButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fcba03',
    borderRadius: 12,
    margin: 24,
  },
  shopButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FF3348',
    borderRadius: 12,
    margin: 24,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f5',
    padding: 18,
    paddingLeft: 48,
    paddingRight: 48,
    borderRadius: 12,
    margin: 24,
  },
  value: {
    fontFamily: 'SUIT-ExtraBold',
    fontSize: 18,
    marginLeft: 4,
  },
});

export default WalletView;
