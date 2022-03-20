import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';

import axios from 'axios';

import WalletProfile from '@components/klaytn/WalletProfile';

import MiningModeTile from '@components/game/MiningModeTile';
import BattleModeTile from '@components/game/BattleModeTile';

import BattleHistoryBox from '@components/history/BattleHistoryBox';
import MiningHistoryBox from '@components/history/MiningHistoryBox';

import FloatingButton from '@components/common/FloatingButton';


const GameView = ({navigation}) => {
   
    const [battleHistory, setBattleHistory] = useState(null);
    const [miningHistory, setMiningHistory] = useState(null);
    
    const {userInfo, walletInfo} = useSelector(({user}) => ({
        userInfo: user.info,
        walletInfo: user.wallet
    }));

    useEffect(async ()=>{

        const responseBattle = await axios.get('https://caloriecoin.herokuapp.com/api/battleJump/getOneUserBattleJumps/' + userInfo.id);
        
        const tempBattleHistory = [];
        setBattleHistory([]);

        if(responseBattle)
        {
            const data = responseBattle.data;

            if(data)
            {
                data?.BattleJumps?.map((item,index)=>{
                    let owner = null;
                    let target = null;
                    if(item.player1_kakaoId === userInfo.id)
                    {
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
                    }
                    else
                    {
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

                    let battleResult = 0;
                    
                    if(!item.isDraw)
                    {
                        if(owner.jumps > target.jumps)
                        {
                            battleResult=1;
                        }
                        else 
                        {
                            battleResult=2;
                        }
                    }
                    else totalDrawCount++;

                    tempBattleHistory.push({
                        id: index,
                        timestamp: new Date(item.createdAt),
                        myScore: owner.jumps,
                        targetScore: target.jumps,
                        battleResult: battleResult,
                        targetInfo: target
                    });
                });
            }
            
            tempBattleHistory.sort((a,b)=>b.timestamp-a.timestamp);

            setBattleHistory(tempBattleHistory);
        }


        const response = await axios.get('https://caloriecoin.herokuapp.com/api/minningJump/getOneUserMinningJumps/' + userInfo.id);
        const tempMiningHistory = [];
        setMiningHistory([]);

        if(response)
        {
            const data = response.data;

            if(data?.MinningJumps)
            {
                data.MinningJumps.map((item, index)=>{
                    tempMiningHistory.push({
                        id:index,
                        timestamp: new Date(item.createdAt),
                        jumps: item.jumps,
                        mined_caloriecoins: item.mined_caloriecoins,
                        duration_time: item.duration_time,
                        burned_kcalories: item.burned_kcalories
                    });
                });
            }
        }

        tempMiningHistory.sort((a, b)=>a.timestamp < b.timestamp);

        setMiningHistory(tempMiningHistory);

    },[]);

    return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <View style={styles.profile}>
            <Image source={{uri:userInfo.profileURL}} style={{width:84, height:84, borderRadius:42}}onError={(error)=>{console.log(error)}}/>
        </View>
        <Text style={styles.nickname}>{userInfo.nickname}</Text>
        <WalletProfile address={walletInfo.address} />
        <View style={styles.modeTileContainer}>
            <MiningModeTile navigation={navigation}/>
            <BattleModeTile navigation={navigation}/>
        </View>
        { battleHistory?.length > 0 && <View style={{width:'80%'}}><BattleHistoryBox history={battleHistory[0]}/></View> }
        { miningHistory?.length > 0 && <View style={{width:'80%'}}><MiningHistoryBox history={miningHistory[0]}/></View>}
        <FloatingButton handleClick={()=>{
            navigation.navigate('wallet_view');
        }}/>
    </View>);
};

const styles = StyleSheet.create({
    profile:{
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'#ff3348',
        borderRadius:50,
        padding:4,
    },
    nickname: {
        marginTop:12,
        fontFamily:'SUIT-SemiBold',
        fontSize:22
    },
    modeTileContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:'auto'
    }
});

export default GameView;