import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {format} from 'date-fns';

import IconDataBox from '@components/common/IconDataBox';

import CoinImage from '@/assets/image/coin_logo.png';
import RopeIcon from '@/assets/icon/rope.svg';
import TimerIcon from '@/assets/icon/timer.svg';
import CalorieIcon from '@/assets/icon/calorie.svg';

import { getSecondToString } from '@/util/CommonUtil';

const MiningHistoryBox = ({history, item}) =>{
    const selector = item ? item : history;
    return <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.datetime}>{format(selector.timestamp,'yyyy/MM/dd  HH:mm')}</Text>
            <Text style={styles.modeText}>Mining Mode</Text>
        </View>
        <View>
            <View style={{flexDirection:'row'}}>
                <IconDataBox title="Mined Calorie Coins" value={selector?.mined_caloriecoins} unit="CAL" icon={<Image source={CoinImage} style={{width:16,height:16}}/>}/>
                <IconDataBox title="Number of Jumps" value={selector?.jumps} unit="jumps" icon={<RopeIcon/>}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <IconDataBox title="Calorie Consumption" value={selector?.burned_kcalories} unit="Kcal" icon={<CalorieIcon/>} />
                <IconDataBox title="Exercise Time" value={getSecondToString(selector?.duration_time)} icon={<TimerIcon/>}/>
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f1f1f5',
        borderRadius:8,
        height: 200,
        padding: 12,
        marginTop:10
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    bottomCotainer:{
        marginTop:-8,
        flexDirection:'row',
        alignItems:'center',
    },
    nickname:{
        fontFamily:'SUIT',
        fontSize:18,
        marginLeft:16
    },
    datetime:{
        flex:12,
        fontFamily:'SUIT-SemiBold',
        color:'#92929D',
        fontSize:16
    },
    modeText:{
        flex:5,
        fontFamily:'SUIT-SemiBold',
        color:'#171725',
        fontSize:16
    },
});

export default MiningHistoryBox;