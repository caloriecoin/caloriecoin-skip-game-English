import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {format} from 'date-fns';

import DefaultProfile from '@/assets/icon/profile-default.svg';

const BattleHistoryBox = ({history, item}) =>{
    const slector = item ? item : history;

    return slector && <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.datetime}>{format(slector?.timestamp,'yyyy/MM/dd  HH:mm')}</Text>
            <Text style={styles.scoreWrap}><Text style={{color:'#ff2c4b'}}>{slector?.myScore}</Text> : <Text style={{color:'#005fff'}}>{slector?.targetScore}</Text></Text>
            <Text style={slector?.battleResult == 0 ? styles.drawText : slector?.battleResult == 1 ? styles.winnerText: styles.loserText}>{slector?.battleResult == 0 ? 'draw' : slector?.battleResult == 1 ? 'win' : 'lose'}</Text>
        </View>
        <View style={styles.bottomCotainer}>
            <DefaultProfile width={36} height={36}/>
            <Text style={styles.nickname}>{slector?.targetInfo.nickname}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f1f1f5',
        borderRadius:8,
        width:'100%',
        height: 90,
        padding: 12,
        marginTop:10
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    bottomCotainer:{
        marginTop:2,
        flexDirection:'row',
        alignItems:'center',
    },
    nickname:{
        fontFamily:'SUIT',
        fontSize:18,
        marginLeft:16
    },
    datetime:{
        flex:7,
        fontFamily:'SUIT-SemiBold',
        color:'#92929D',
        fontSize:16
    },
    scoreWrap:{
        flex:3.5,
        fontFamily:'SUIT-Heavy',
        color:'#888',
        fontSize:24
    },
    winnerText:{
        flex:1.5,
        fontFamily:'SUIT-Bold',
        color:'white',
        backgroundColor:'#ff2c4b',
        padding:8,
        borderRadius:16,
        textAlign:'center',
        fontSize:12
    },
    loserText:{
        flex:1.5,
        fontFamily:'SUIT-Bold',
        color:'white',
        backgroundColor:'#005fff',
        padding:8,
        borderRadius:16,
        textAlign:'center',
        fontSize:12
    },
    drawText:{
        flex:1.5,
        fontFamily:'SUIT-Bold',
        color:'white',
        backgroundColor:'#17171f',
        padding:8,
        borderRadius:16,
        textAlign:'center',
        fontSize:12
    },
});

export default BattleHistoryBox;