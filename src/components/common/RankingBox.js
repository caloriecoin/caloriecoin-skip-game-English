import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RankingBox = ({item}) => {
  return (
    <View
      style={{
        width: '100%',
        marginTop: 8,
        padding: 8,
        paddingTop: 14,
        paddingBottom: 14,
        flexDirection: 'row',
        backgroundColor: '#eee',
        borderRadius: 12,
      }}>
      <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontFamily: 'SUIT-ExtraBold', fontSize: 24}}>
          {' '}
          {item.id}{' '}
        </Text>
        {item.icon}
        <Text style={{fontFamily: 'SUIT-SemiBold', fontSize: 14}}>
          {' '}
          {item.nickname}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: 'SUIT-ExtraBold',
            fontSize: 18,
            textAlign: 'right',
          }}>
          <Text
            style={{fontFamily: 'SUIT-Medium', fontSize: 11, color: '#696974'}}>
            {item.subtitle}
          </Text>{' '}
          {item.value} {item.unit}
        </Text>
        <Text
          style={{
            fontFamily: 'SUIT-Medium',
            fontSize: 11,
            color: '#696974',
            textAlign: 'right',
          }}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RankingBox;
