import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  BackHandler,
} from 'react-native';

import {useSelector} from 'react-redux';

import Sound from 'react-native-sound';

import {io} from 'socket.io-client';

import LinearGradient from 'react-native-linear-gradient';

import CoinImage from '@/assets/image/coin_logo.png';

import StatusIcon from '@components/StatusBar/StatusIcon';

import Player from '@components/game/Player';
import BattleProgressBar from '@components/game/BattleProgressBar';

Sound.setCategory('Battle');

const bleManager = global.bleManager;

const battleReadySound = new Sound(
  'battle_ready.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  },
);

const battleSound = new Sound('battle.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

const battleOverSound = new Sound(
  'battle_end.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  },
);

const battleWinSound = new Sound('battle_win.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

const battleDrawSound = new Sound(
  'battle_draw.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  },
);

const battleLoseSound = new Sound(
  'battle_lose.mp3',
  Sound.MAIN_BUNDLE,
  error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  },
);

const Battle = ({navigation}) => {
  const [gameStatus, setGameStatus] = useState('wait'); // wait, load, play, end

  const [myJump, setMyJump] = useState(0);
  const [targetJump, setTargetJump] = useState(0);

  const [modalView, setModalView] = useState(false);

  const [subTitle, setSubTitle] = useState('');
  const [mainTitle, setMainTitle] = useState('');

  const [targetInfo, setTargetInfo] = useState(null);

  const [battleResult, setBattleResult] = useState('');
  const [battleRating, setBattleRating] = useState(0);

  const [headerLeftMessage, setHeaderLeftMessage] =
    useState('1:1 battle waiting');

  const [footerMessage, setFooterMessage] = useState('');
  const [footerSecondMessage, setSecondFooterMessage] = useState('');

  const [socket, setSocket] = useState(null);

  const [currentCount, setCurrentCount] = useState(0);

  const {userInfo} = useSelector(({user}) => ({
    userInfo: user.info,
  }));

  const {jumpData, connectedMacAddr} = useSelector(({skipping}) => ({
    jumpData: skipping.skippingData,
    connectedMacAddr: skipping.connectedMacAddr,
  }));

  const playGame = () => {
    if (connectedMacAddr) bleManager.startSkip(connectedMacAddr, 0, 0);
  };

  const stopGame = () => {
    if (connectedMacAddr) bleManager.stopSkip(connectedMacAddr);
  };

  useEffect(() => {
    if (jumpData && socket) {
      const realData = jumpData.skip_count - currentCount;

      setCurrentCount(e => e + realData);
      socket.emit('jumping', realData);
    }
  }, [jumpData]);

  useEffect(() => {
    setGameStatus('wait');
    setSubTitle('Connecting to game server ...');

    let socketClient = null;

    if (socket == null) {
      socketClient = io.connect('https://socket-battle-server.herokuapp.com', {
        transports: ['websocket'],
      });
      setSocket(socketClient);
    }

    return () => {
      socketClient.disconnect();
      battleReadySound.pause();
      battleSound.pause();
      battleOverSound.pause();
      battleWinSound.pause();
      battleDrawSound.pause();
      battleLoseSound.pause();
    };
  }, []);

  useEffect(() => {
    if (socket != null) {
      // Connect to Socket
      socket.on('connect', () => {
        // queue participation
        setSubTitle('Waiting for Battle Match ...');
        setHeaderLeftMessage('Waiting for 1:1 Battle Match');

        socket.emit('enterQueue', {
          nickname: userInfo.nickname,
          gender: userInfo.gender,
          id: userInfo.id,
        });
      });

      // Fetch information
      socket.on('LOADING_GAME', targetInfo => {
        // Partner Joined
        setGameStatus('load');
        setSubTitle('READY !!!');
        setMainTitle('3');

        battleReadySound.setVolume(0.8);
        battleReadySound.play();

        setTimeout(() => {
          setMainTitle('2');
          setTimeout(() => {
            setMainTitle('1');
          }, 1000);
        }, 1000);

        setHeaderLeftMessage(`In 1:1 Battle with ${targetInfo?.nickname} `);

        setTargetInfo(targetInfo);
      });

      // Game Start
      socket.on('START_GAME', () => {
        // Partner Joined
        setGameStatus('play');
        setSubTitle('');
        setMainTitle('Start !!');

        playGame();

        battleSound.setVolume(0.8);
        battleSound.play();
      });

      // Game Event
      socket.on('GAME_STATUS', status => {
        // Partner Joined
        setSubTitle('');
        setMainTitle(Math.round(status.lefttime / 1000) + ' s');
        setMyJump(status.myJump);
        setTargetJump(status.targetJump);
        battleSound.setVolume(0.8);
        battleSound.play();
      });

      // Game End
      socket.on('END_GAME', result => {
        setGameStatus('end');

        stopGame();

        battleSound.pause();
        battleOverSound.setVolume(0.8);
        battleOverSound.play();

        if (result.draw) {
          setBattleResult('');
          setBattleRating('+5');

          setTimeout(() => {
            battleDrawSound.setVolume(0.8);
            battleDrawSound.play();
            setModalView(true);
          }, 2500);
        } else {
          if (result.winner === userInfo.nickname) {
            setBattleResult('WIN');
            setBattleRating('+10');

            setTimeout(() => {
              battleWinSound.setVolume(0.8);
              battleWinSound.play();
              setModalView(true);
            }, 2500);
          } else {
            setBattleResult('LOSE');
            setBattleRating('-10');

            setTimeout(() => {
              battleLoseSound.setVolume(0.8);
              battleLoseSound.play();
              setModalView(true);
            }, 2500);
          }
        }

        socket.disconnect();
      });
    }
  }, [socket]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          position: 'absolute',
          zIndex: 999,
          top: 0,
        }}>
        <View style={styles.headerLeft}>
          <Text
            style={{color: 'white', fontFamily: 'SUIT-SemiBold', fontSize: 12}}>
            {headerLeftMessage}
          </Text>
        </View>
        <View style={styles.headerRight}>
          <StatusIcon />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalView}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00000088',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            battleReadySound.pause();
            battleSound.pause();
            battleOverSound.pause();
            battleWinSound.pause();
            battleDrawSound.pause();
            battleLoseSound.pause();

            navigation.goBack();
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
              Result
            </Text>
            <View style={{flexDirection: 'row', marginTop: 24}}>
              <Text style={{fontFamily: 'SUIT-SemiBold', fontSize: 24}}>
                Rating :{' '}
              </Text>
              <Text style={{fontFamily: 'SUIT-ExtraBold', fontSize: 28}}>
                {battleRating}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#f1f1f5',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 36,
                borderRadius: 12,
                marginTop: 18,
              }}>
              <Text style={{fontFamily: 'SUIT-ExtraBold', fontSize: 64}}>
                {battleResult}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'SUIT-Heavy',
                    fontSize: 48,
                    color: '#fc5a5a',
                    marginRight: 8,
                  }}>
                  {myJump}
                </Text>
                <Text
                  style={{
                    fontFamily: 'SUIT-Heavy',
                    fontSize: 48,
                    color: '#44444f',
                  }}>
                  :
                </Text>
                <Text
                  style={{
                    fontFamily: 'SUIT-Heavy',
                    fontSize: 48,
                    color: '#005fff',
                    marginLeft: 8,
                  }}>
                  {targetJump}
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
              Touch anywhere to close the window.
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
      <LinearGradient
        colors={['#e1963b', '#f33639', '#e93e5c']}
        locations={[0, 0.35, 1]}
        style={styles.sky}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            marginTop: 64,
            alignItems: 'center',
          }}>
          <View style={styles.priceBox}>
            <Text
              style={{
                fontFamily: 'SUIT-SemiBold',
                fontSize: 14,
                color: 'white',
              }}>
              Prize :
            </Text>
            <Image
              source={CoinImage}
              style={{width: 32, height: 32, marginLeft: 8}}
            />
            <Text
              style={{
                fontFamily: 'SUIT-Bold',
                fontSize: 24,
                color: 'white',
                marginLeft: 4,
              }}>
              320
            </Text>
          </View>
          <Text style={styles.loading}>{subTitle}</Text>
          <Text style={styles.count}>{mainTitle}</Text>
        </View>
      </LinearGradient>
      <LinearGradient colors={['#2c1b2b', '#464652']} style={styles.ground}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{top: 0, marginTop: -350, left: 15}}>
            <Player
              nickname={userInfo.nickname}
              gender={userInfo.gender}
              subtitle="me"
              isPlay={gameStatus === 'play'}
            />
          </View>
          <View style={{top: 0, marginTop: -350, marginLeft: 25}}>
            <Player
              nickname={targetInfo != null ? targetInfo?.nickname : ''}
              gender={targetInfo != null ? targetInfo.gender : ''}
              subtitle="Opponent"
              disabled={targetInfo === null ? true : false}
              isPlay={gameStatus === 'play'}
            />
          </View>
        </View>
        {gameStatus === 'play' && (
          <BattleProgressBar myScore={myJump} targetScore={targetJump} />
        )}
        <View
          style={{width: '100%', position: 'absolute', zIndex: 999, bottom: 0}}>
          <Text
            style={{
              fontFamily: 'SUIT-Medium',
              color: 'white',
              textAlign: 'center',
              marginBottom: 10,
              fontSize: 12,
            }}>
            {footerMessage}
          </Text>
          <Text
            style={{
              fontFamily: 'SUIT-Medium',
              color: 'white',
              textAlign: 'center',
              marginBottom: 18,
              fontSize: 12,
            }}>
            {footerSecondMessage}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sky: {
    flex: 1.4,
    width: '100%',
  },
  ground: {
    flex: 1,
    width: '100%',
  },
  headerLeft: {
    marginRight: 'auto',
    color: 'white',
    margin: 14,
  },
  headerRight: {
    marginLeft: 'auto',
    color: 'white',
    margin: 8,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171725',
    padding: 18,
    width: '75%',
    borderRadius: 14,
  },
  loading: {
    fontFamily: 'SUIT-SemiBold',
    fontSize: 24,
    color: 'white',
    marginTop: 28,
  },
  count: {
    fontFamily: 'SUIT-SemiBold',
    fontSize: 64,
    color: 'white',
    marginTop: 12,
  },
});

export default Battle;
