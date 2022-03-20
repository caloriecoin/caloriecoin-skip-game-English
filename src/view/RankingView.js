import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import RankingBox from '@components/common/RankingBox';
import FloatingButton from '@components/common/FloatingButton';
import Profile from '@components/common/Profile';

const RankingView = ({navigation}) => {
    const [type, setType] = useState('mining');
    const [data, setData] = useState([]);

    useEffect(async ()=>{
        await callData('mining');
    },[]);

    const callData = async (type) => {
        setData([]);
        setType(type);

        if(type == 'mining')
        {
            const response = await axios.get('https://caloriecoin.herokuapp.com/api/ranking/minningJump');

            const responseData = [];

            response.data.map((item,index)=>{
                responseData.push({
                    id:index + 1,
                    nickname:item.nickname,
                    icon:<Profile profileURI={item.profile} width={32} height={32} radius={16}/>,
                    value:item.mined_caloriecoins_total,
                    unit:'CAL',
                    subtitle:'',
                    description:`Jump rope count : ${item.jumps_total}`
                });
            });
            
            setData(responseData);
        }
        else
        {
            const response = await axios.get('https://caloriecoin.herokuapp.com/api/ranking/battleJump');

            const responseData = [];

            response.data.reverse();

            response.data.map((item,index)=>{
                console.log(item);
                responseData.push({
                    id:index + 1,
                    nickname:item.nickname,
                    icon:<Profile profileURI={item.profile} width={32} height={32} radius={16}/>,
                    value:item.battle_rating,
                    unit:'',
                    subtitle:'rating : ',
                    description:`${item.win_battles}승 ${item.loose_battles}패 ${item.draw_battles}무`
                });
            });

            setData(responseData);
        }
    };

    return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <View style={{flexDirection:'row', marginTop:12}}>
            <TouchableOpacity onPress={()=>{callData('mining')}}>
                <Text style={type === 'mining' ? styles.selectedText : styles.notSelectedText}>Minning Ranking</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{callData('battle')}} style={{marginLeft:72}}>
                <Text style={type === 'battle' ? styles.selectedText : styles.notSelectedText}>Battle Ranking</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={data}
            renderItem={RankingBox}
            keyExtractor={(item) => String(item.id)}
            style={{width:'85%', marginTop:12}}
        />
        <FloatingButton handleClick={()=>{
            navigation.navigate('wallet_view');
        }}/>
    </View>);
};

const styles = StyleSheet.create({
    selectedText:{
        fontFamily:'SUIT-ExtraBold', 
        fontSize:18,
        paddingBottom:10,
        borderBottomWidth:3,
        color:'#000',
    },
    notSelectedText:{
        fontFamily:'SUIT-ExtraBold', 
        fontSize:18, 
        color:'#92929D'
    }
});

export default RankingView;