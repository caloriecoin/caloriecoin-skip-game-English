import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import axios from 'axios';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import BattleHistoryBox from '@components/history/BattleHistoryBox';
import MiningHistoryBox from '@components/history/MiningHistoryBox';

import FloatingButton from '@components/common/FloatingButton';

import {getSecondToString} from '@/util/CommonUtil';

import {LineChart} from 'react-native-chart-kit';

const HistoryView = ({navigation}) => {
  const [type, setType] = useState('mining');

  const [statsticsXaxis, setStatsticsXaxis] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const [battleHistoryList, setBattleHistoryList] = useState([]);
  const [miningHisotryList, setMiningHistoryList] = useState([]);

  const [battleTotalWinCount, setBattleTotalWinCount] = useState(0);
  const [battleTotalLoseCount, setBattleTotalLoseCount] = useState(0);
  const [battleTotalDrawCount, setBattleTotalDrawCount] = useState(0);

  const [totalJumps, setTotalJumps] = useState(0);
  const [totalEarnCalorieCoin, setTotalEarnCalorieCoin] = useState(0);
  const [totalBurnedCalorie, setTotalBurnedCalorie] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const {userInfo} = useSelector(({user}) => ({
    userInfo: user.info,
  }));

  const handleUpdateMiningHistory = async () => {
    const userResponse = await axios.get(
      `https://caloriecoin.herokuapp.com/api/user/getUserAndWallet/${userInfo.id}`,
    );
    if (userResponse) {
      const userData = userResponse.data;

      if (userData) {
        setTotalJumps(userData.user.jumps_total);
        setTotalEarnCalorieCoin(userData.user.mined_caloriecoins_total);
        setTotalBurnedCalorie(userData.user.burned_kcalories_total);
        setTotalDuration(userData.user.duration_time_total);
      }
    }

    const statsticsResponse = await axios.get(
      'https://caloriecoin.herokuapp.com/api/minningJump/getOneUserMinningStatstics/' +
        userInfo.id,
    );

    if (statsticsResponse) {
      const statsticsData = statsticsResponse.data;

      if (statsticsData?.success) {
        const statsticsDataList = [];
        const dataList = [];

        statsticsData.aggregateData.map(item => {
          statsticsDataList.push(item._id);
          dataList.push(item.totalJumps);
        });

        setGraphData(dataList.slice(-4));
        setStatsticsXaxis(statsticsDataList.slice(-4));
      }
    }

    const response = await axios.get(
      'https://caloriecoin.herokuapp.com/api/minningJump/getOneUserMinningJumps/' +
        userInfo.id,
    );
    const miningHistory = [];
    setMiningHistoryList([]);

    if (response) {
      const data = response.data;

      if (data) {
        data?.MinningJumps.map((item, index) => {
          miningHistory.push({
            id: index,
            timestamp: new Date(item.createdAt),
            jumps: item.jumps,
            mined_caloriecoins: item.mined_caloriecoins,
            duration_time: item.duration_time,
            burned_kcalories: item.burned_kcalories,
          });
        });
      }
    }

    miningHistory.sort((a, b) => a.timestamp < b.timestamp);

    setMiningHistoryList(miningHistory);
  };

  const handleUpdateBattleHistory = async () => {
    const response = await axios.get(
      'https://caloriecoin.herokuapp.com/api/battleJump/getOneUserBattleJumps/' +
        userInfo.id,
    );

    const battleHistory = [];
    setBattleHistoryList([]);

    if (response) {
      const data = response.data;

      let totalWinCount = 0;
      let totalLoseCount = 0;
      let totalDrawCount = 0;

      try {
        if (data) {
          data.BattleJumps.map((item, index) => {
            let owner = null;
            let target = null;
            if (item.player1_kakaoId === userInfo.id) {
              // owner id = p1
              owner = {
                id: item.player1_kakaoId,
                nickname: item.player1_nickname,
                profile: item.player1_profile,
                jumps: item.player1_jumps,
              };

              target = {
                id: item.player2_kakaoId,
                nickname: item.player2_nickname,
                profile: item.player2_profile,
                jumps: item.player2_jumps,
              };
            } else {
              // owner id = p2
              target = {
                id: item.player1_kakaoId,
                nickname: item.player1_nickname,
                profile: item.player1_profile,
                jumps: item.player1_jumps,
              };

              owner = {
                id: item.player2_kakaoId,
                nickname: item.player2_nickname,
                profile: item.player2_profile,
                jumps: item.player2_jumps,
              };
            }

            //battleResult ( 0 = draw, 1 = win, 2 = lose)
            let battleResult = 0;

            if (!item.isDraw) {
              if (owner.jumps > target.jumps) {
                totalWinCount++;
                battleResult = 1;
              } else {
                totalLoseCount++;
                battleResult = 2;
              }
            } else totalDrawCount++;

            battleHistory.push({
              id: index,
              timestamp: new Date(item.createdAt),
              myScore: owner.jumps,
              targetScore: target.jumps,
              battleResult: battleResult,
              targetInfo: target,
            });
          });
        }
      } catch (e) {
        console.log(e);
      }

      setBattleTotalWinCount(totalWinCount);
      setBattleTotalLoseCount(totalLoseCount);
      setBattleTotalDrawCount(totalDrawCount);

      battleHistory.sort((a, b) => b.timestamp - a.timestamp);

      setBattleHistoryList(battleHistory);
    }
  };

  useEffect(() => {
    handleUpdateMiningHistory();
    handleUpdateBattleHistory();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'row', marginTop: 12}}>
        <TouchableOpacity
          onPress={() => {
            handleUpdateMiningHistory();
            setType('mining');
          }}>
          <Text
            style={
              type === 'mining' ? styles.selectedText : styles.notSelectedText
            }>
            Minning Record
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleUpdateBattleHistory();
            setType('battle');
          }}
          style={{marginLeft: 72}}>
          <Text
            style={
              type === 'battle' ? styles.selectedText : styles.notSelectedText
            }>
            Battle Record
          </Text>
        </TouchableOpacity>
      </View>
      {type === 'battle' && (
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 48,
          }}>
          <Text>
            <Text
              style={{
                color: '#fc5a5a',
                fontFamily: 'SUIT-Heavy',
                fontSize: 28,
              }}>
              {battleTotalWinCount}
            </Text>
            <Text
              style={{
                color: '#9ea4a9',
                fontFamily: 'SUIT-Regular',
                fontSize: 14,
              }}>
              {' '}
              win
            </Text>
            <Text
              style={{
                color: '#0062ff',
                fontFamily: 'SUIT-Heavy',
                fontSize: 28,
              }}>
              {' '}
              {battleTotalLoseCount}
            </Text>
            <Text
              style={{
                color: '#9ea4a9',
                fontFamily: 'SUIT-Regular',
                fontSize: 14,
              }}>
              {' '}
              lose
            </Text>
            <Text
              style={{color: '#000', fontFamily: 'SUIT-Heavy', fontSize: 28}}>
              {' '}
              {battleTotalDrawCount}
            </Text>
            <Text
              style={{
                color: '#9ea4a9',
                fontFamily: 'SUIT-Regular',
                fontSize: 14,
              }}>
              {' '}
              draw
            </Text>
          </Text>
          <FlatList
            data={battleHistoryList}
            renderItem={BattleHistoryBox}
            keyExtractor={item => String(item.id)}
            style={{width: '85%', marginTop: 12}}
          />
        </View>
      )}
      {type === 'mining' && (
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  justifyContent: 'center',
                  marginTop: 24,
                }}>
                <Text
                  style={{
                    marginRight: 'auto',
                    marginLeft: 4,
                    marginBottom: 10,
                    fontFamily: 'SUIT-SemiBold',
                  }}>
                  jumps/day
                </Text>
                {graphData.length > 0 && (
                  <LineChart
                    data={{
                      labels: statsticsXaxis,
                      datasets: [
                        {
                          data: graphData,
                        },
                      ],
                    }}
                    width={Dimensions.get('window').width - 50}
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix="회"
                    yAxisInterval={1}
                    chartConfig={{
                      backgroundGradientFrom: '#fff',
                      backgroundGradientTo: '#fff',
                      decimalPlaces: 0,
                      color: (opacity = 1) => `rgba(252, 90, 90, 55)`,
                      labelColor: (opacity = 1) => `rgba(0, 0, 0, 255)`,
                      style: {
                        borderRadius: 16,
                        color: 'black',
                      },
                      propsForDots: {
                        r: '6',
                        strokeWidth: '4',
                        stroke: '#fc5a5a',
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                )}
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    justifyContent: 'center',
                    marginTop: 12,
                    marginBottom: 18,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'SUIT-Regular',
                      color: '#9ea4a9',
                    }}>
                    jumps total
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: 'SUIT-Heavy',
                      fontSize: 28,
                      color: '#000',
                    }}>
                    {totalJumps}{' '}
                    <Text
                      style={{fontFamily: 'SUIT-Regular', color: '#9ea4a9'}}>
                      jumps
                    </Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 24,
                    }}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: 'SUIT-Regular',
                          color: '#9ea4a9',
                        }}>
                        mininng total
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: 'SUIT-ExtraBold',
                          fontSize: 18,
                          color: '#000',
                          marginTop: 8,
                        }}>
                        {totalEarnCalorieCoin}{' '}
                        <Text
                          style={{
                            fontFamily: 'SUIT-Regular',
                            color: '#9ea4a9',
                          }}>
                          CAL
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 18,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: 'SUIT-Regular',
                          color: '#9ea4a9',
                        }}>
                        calories total
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: 'SUIT-ExtraBold',
                          fontSize: 18,
                          color: '#000',
                          marginTop: 8,
                        }}>
                        {totalBurnedCalorie}{' '}
                        <Text
                          style={{
                            fontFamily: 'SUIT-Regular',
                            color: '#9ea4a9',
                          }}>
                          kcal
                        </Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 18,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: 'SUIT-Regular',
                          color: '#9ea4a9',
                        }}>
                        excercise time total
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontFamily: 'SUIT-ExtraBold',
                          fontSize: 18,
                          color: '#000',
                          marginTop: 8,
                        }}>
                        {getSecondToString(totalDuration)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          data={miningHisotryList}
          renderItem={MiningHistoryBox}
          keyExtractor={item => String(item.id)}
          style={{width: '90%'}}
        />
      )}
      <FloatingButton
        handleClick={() => {
          navigation.navigate('wallet_view');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedText: {
    fontFamily: 'SUIT-ExtraBold',
    fontSize: 18,
    paddingBottom: 10,
    borderBottomWidth: 3,
    color: '#000',
  },
  notSelectedText: {
    fontFamily: 'SUIT-ExtraBold',
    fontSize: 18,
    color: '#92929D',
  },
  chart: {
    flex: 0.5,
    width: '85%',
    height: 250,
    marginTop: 18,
  },
});

export default HistoryView;
