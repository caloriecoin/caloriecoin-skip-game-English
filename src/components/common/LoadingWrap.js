import React from 'react';
import {View, Image, Text} from 'react-native';

import LoadingIcon from '@/assets/image/loading.gif';

const LoadingWrap = ({loading}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image source={LoadingIcon} style={{width: 128, height: 128}} />
      <Text style={{fontFamily: 'SUIT-Regular', fontSize: 18}}>
        Fetching information ...
      </Text>
    </View>
  );
};

export default LoadingWrap;
