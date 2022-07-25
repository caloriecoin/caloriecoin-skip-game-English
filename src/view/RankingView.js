import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import RankingBox from '@components/common/RankingBox';
import FloatingButton from '@components/common/FloatingButton';
import Profile from '@components/common/Profile';

const RankingView = ({navigation}) => {
  const [type, setType] = useState('mining');
  const [data, setData] = useState([]);

  useEffect(async () => {
    await callData('mining');
  }, []);

  const callData = async type => {
    setData([]);
    setType(type);

    if (type == 'mining') {
      const response = await axios.get(
        'https://caloriecoin.herokuapp.com/api/ranking/minningJump',
      );

      const responseData = [];

      response.data.map((item, index) => {
        responseData.push({
          id: index + 1,
          nickname: item.nickname,
          icon: (
            <Profile
              profileURI={item.profile}
              width={32}
              height={32}
              radius={16}
            />
          ),
          value: item.mined_caloriecoins_total,
          unit: 'CAL',
          subtitle: '',
          description: `count : ${item.jumps_total}`,
        });
      });

      setData(responseData);
    } else {
      const response = await axios.get(
        'https://caloriecoin.herokuapp.com/api/ranking/battleJump',
      );

      const responseData = [];

      response.data.reverse();

      response.data.map((item, index) => {
        console.log(item);
        responseData.push({
          id: index + 1,
          nickname: item.nickname,
          icon: (
            <Profile
              profileURI={item.profile}
              width={32}
              height={32}
              radius={16}
            />
          ),
          value: item.battle_rating,
          unit: '',
          subtitle: 'rating : ',
          description: `${item.win_battles}win ${item.loose_battles}lose ${item.draw_battles}draw`,
        });
      });

      setData(responseData);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 12,
          backgroundColor: '#f1f1f5',
          borderRadius: 36,
        }}>
        <TouchableOpacity
          onPress={() => {
            callData('mining');
          }}>
          <Text
            style={
              type === 'mining' ? styles.selectedText : styles.notSelectedText
            }>
            Minning Leaderboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            callData('battle');
          }}
          style={{marginLeft: 12}}>
          <Text
            style={
              type === 'battle' ? styles.selectedText : styles.notSelectedText
            }>
            Battle Leaderboard
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={RankingBox}
        keyExtractor={item => String(item.id)}
        style={{width: '100%', marginTop: 12}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectedText: {
    fontFamily: 'SUIT-Bold',
    fontSize: 10,
    backgroundColor: '#171725',
    margin: 12,
    padding: 8,
    borderRadius: 14,
    paddingLeft: 14,
    paddingRight: 14,
    color: 'white',
  },
  notSelectedText: {
    fontFamily: 'SUIT-Bold',
    fontSize: 10,
    color: '#44444f',
    padding: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default RankingView;
