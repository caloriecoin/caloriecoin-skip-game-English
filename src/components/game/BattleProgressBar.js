import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const BattleProgressBar = ({myScore, targetScore}) => {

    const totalScore = myScore + targetScore;

    const calculatePercent = (score) =>{
        const percent = (score / totalScore) * 100;
        return percent + '%';
    }

    return <View style={{flexDirection:'row', height:28, bottom:100, borderColor:'#000', borderWidth:3, borderStyle:'solid', borderLeftWidth:0, borderRightWidth:0}}>
        <View style={{width:calculatePercent(myScore), backgroundColor:'#fc5a5a', borderRightWidth:5,borderRightColor:'gold',borderStyle:'dashed'}} />
        <View style={{width:calculatePercent(targetScore), backgroundColor:'#005fff'}} />
        <Text style={[styles.numberText, {color:'#fff', fontSize:72, position:'absolute', top:-35, left:25}]}>{myScore}</Text>
        <Text style={[styles.numberText, {color:'#fff', fontSize:72, position:'absolute', top:-35, right:25}]}>{targetScore}</Text>
    </View>
}

const styles = StyleSheet.create({
    numberText:{
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10
    }
});

export default BattleProgressBar;