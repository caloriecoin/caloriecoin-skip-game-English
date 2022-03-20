import React from 'react';
import { View, Text } from 'react-native';

import {useSelector} from 'react-redux';

import { convertColorCode, convertStringMsg } from '@/util/CommonUtil';

const StatusIcon = () =>{
    const connection = useSelector(({skipping}) => skipping.connection); 
    
    return <View style={{display:'flex', flexDirection:'row', marginRight:18, backgroundColor:'#171725', padding: 18, paddingVertical: 8, borderRadius:12}}>
        <View style={{
            backgroundColor:convertColorCode(connection),
            width:8,
            height:8,
            borderRadius: 4,
            marginRight:8,
            marginTop:8,
        }}/>
        <Text style={{color:'white'}}>{convertStringMsg(connection)}</Text>  
  </View>;
};

export default StatusIcon;