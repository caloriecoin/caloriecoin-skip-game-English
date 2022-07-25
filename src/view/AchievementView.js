import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import FloatingButton from '@components/common/FloatingButton';

import QuestView from '@view/QuestView';
import RankingView from '@view/RankingView';

const AchievementView = ({navigation}) => {
  const [modalView, setModalView] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [menu, setMenu] = useState('quest');

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
            setMenu('quest');
          }}>
          <Text
            style={
              menu === 'quest' ? style.selectedText : style.unSelectedText
            }>
            NFT Quest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMenu('ranking');
          }}>
          <Text
            style={
              menu === 'ranking' ? style.selectedText : style.unSelectedText
            }>
            Ranking
          </Text>
        </TouchableOpacity>
      </View>

      {menu === 'quest' && <QuestView />}
      {menu === 'ranking' && <RankingView />}
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

export default AchievementView;
