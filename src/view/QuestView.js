import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import FloatingButton from '@components/common/FloatingButton';

import QuestLockIcon from '@/assets/icon/quest-lock.svg';

import QuestJumpBronzeImage from '@/assets/image/quest-jump-bronze.png';
import QuestJumpSilverImage from '@/assets/image/quest-jump-silver.png';
import QuestJumpGoldImage from '@/assets/image/quest-jump-gold.png';

import QuestVSBronzeImage from '@/assets/image/quest-vs-bronze.png';
import QuestVSilverImage from '@/assets/image/quest-vs-silver.png';

const data = [
  {
    image: true,
    title: 'Skipping',
    subtitle: '100 jumps',
  },
  {
    image: false,
    title: 'Skipping',
    subtitle: '300 jumps',
  },
  {
    image: false,
    title: 'Skipping',
    subtitle: '500 jumps',
  },
  {
    image: false,
    title: 'Victory',
    subtitle: '10 jumps',
  },
  {
    image: false,
    title: 'Victory',
    subtitle: '100 jumps',
  },
  {
    image: false,
    title: 'Victory',
    subtitle: '500 jumps',
  },
  {
    image: false,
    title: 'Attending',
    subtitle: '3 days',
  },
  {
    image: false,
    title: 'Attending',
    subtitle: '7 days',
  },
  {
    image: false,
    title: 'Attending',
    subtitle: '30 days',
  },
  {
    image: false,
    title: 'You got coins! ',
    subtitle: '500 coins',
  },
  {
    image: false,
    title: 'You got coins!',
    subtitle: '3000 coins',
  },
  {
    image: false,
    title: 'You got coins!',
    subtitle: '10000 coins',
  },
];

const QuestView = ({navigation}) => {
  const [modalView, setModalView] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <View
      style={{
        width: '100%',
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
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 17,
              width: '85%',
            }}>
            <Text style={{fontFamily: 'SUIT-ExtraBold', fontSize: 24}}>
              The Public Quest
            </Text>
            <View
              style={{
                margin: 12,
                backgroundColor: '#f1f1f5',
                borderRadius: 16,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  margin: 12,
                }}>
                <Image
                  source={QuestJumpBronzeImage}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
              </View>

              <Text
                style={{
                  fontFamily: 'SUIT-Regular',
                  fontSize: 12,
                  color: '#9ea4a9',
                  padding: 8,
                  paddingBottom: 0,
                }}>
                Issuer
              </Text>
              <Text
                style={{
                  fontFamily: 'SUIT-Regular',
                  fontSize: 14,
                  color: '#222',
                  padding: 12,
                  paddingTop: 8,
                }}>
                TKGcJjWWj75yG2UL5x5...LBU1rZj4Gu
              </Text>
              <Text
                style={{
                  fontFamily: 'SUIT-Regular',
                  fontSize: 16,
                  color: '#222',
                  padding: 12,
                }}>
                You've got{' '}
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>#19992</Text>{' '}
                NFT
              </Text>
              <Text
                style={{
                  fontFamily: 'SUIT-Regular',
                  fontSize: 16,
                  color: '#222',
                  padding: 12,
                }}>
                Holder : 19992 / 100,000
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#44444f',
                  borderRadius: 16,
                  padding: 12,
                }}>
                <Text
                  style={{
                    fontFamily: 'SUIT-Regular',
                    fontSize: 18,
                    marginTop: 18,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  You've completed your first jumping rope challenge! You have
                  been issued the above certificate.
                </Text>
                <Text
                  style={{
                    fontFamily: 'SUIT-Regular',
                    fontSize: 14,
                    marginTop: 10,
                    textAlign: 'center',
                    color: '#9da4aa',
                  }}>
                  March 11, 2022{'\r\n'} 11:19:23 a.m. (KST)
                </Text>
              </View>
            </View>

            <Text
              style={{
                marginTop: 28,
                textAlign: 'center',
                fontFamily: 'SUIT-Regular',
                fontSize: 14,
              }}>
              Touch anywhere to close the alert.
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={{width: '90%', marginTop: 24}}>
        <FlatList
          key={data.title + '-' + data.subtitle}
          data={data}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            marginBottom: 8,
          }}
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => {
            if (!item.image) {
              return (
                <View
                  style={{
                    width: 100,
                    height: 130,
                    backgroundColor: '#f1f1f5',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <QuestLockIcon width={48} height={48} />
                  <Text
                    style={{
                      fontFamily: 'SUIT-SemiBold',
                      fontSize: 12,
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{fontFamily: 'SUIT-SemiBold', fontSize: 12}}>
                    {item.subtitle}
                  </Text>
                </View>
              );
            } else {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setModalView(true);
                  }}
                  style={{
                    width: 100,
                    height: 130,
                    backgroundColor: '#f1f1f5',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={QuestJumpBronzeImage}
                    style={{
                      width: 48,
                      height: 48,
                      paddingBottom: -10,
                      paddingTop: -20,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'SUIT-SemiBold',
                      fontSize: 12,
                      marginTop: 10,
                      marginBottom: 10,
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{fontFamily: 'SUIT-SemiBold', fontSize: 12}}>
                    {item.subtitle}
                  </Text>
                </TouchableOpacity>
              );
            }
          }}
          keyExtractor={({index}) => index}
          numColumns={3}
          style={{
            width: '100%',
          }}
        />
      </View>
    </View>
  );
};

export default QuestView;
