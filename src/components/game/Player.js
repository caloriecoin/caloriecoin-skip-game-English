import React from 'react';

import { View, Image, Text } from 'react-native';

import RadialGradient from 'react-native-radial-gradient';

import CharacterMale from '@/assets/image/character-male.png';
import CharacterFeMale from '@/assets/image/character-female.png'

import PlayerMale from '@/assets/image/player-male.gif';
import PlayerFeMale from '@/assets/image/player-female.gif'

const Player = ({gender, nickname, subtitle, isPlay, disabled}) =>{

    if(disabled)
    {
        return <View style={{flex:1, justifyContent:'center', alignItems:'center',marginTop:125}}>
            <RadialGradient style={{width:200,height:100}}
                        colors={['rgba(0, 221, 255, 0.51)','rgba(0, 226, 255, 0.52)','rgba(0, 200, 255, 0)']}
                        stops={[0.05,0.2,0.4,]}
                        center={[100,100]}
                        radius={80}/>
            <Text style={{fontFamily:'SUIT-SemiBold', color:'white', fontSize:20,marginTop:40}}>Waiting for next match</Text>
            <Text style={{fontFamily:'SUIT-SemiBold', color:'#92929d', fontSize:18, marginTop:18}}>Opponent</Text>
        </View>
    }
    else
    {
        return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source={gender === 'male' ? isPlay ? PlayerMale : CharacterMale : isPlay ? PlayerFeMale : CharacterFeMale} style={{width:160, height:250}}></Image>
            <Text style={{fontFamily:'SUIT-SemiBold', color:'white', fontSize:20,marginTop:14}}>{nickname != null && nickname}</Text>
            <Text style={{fontFamily:'SUIT-SemiBold', color:'#92929d', fontSize:18, marginTop:18}}>{subtitle}</Text>
        </View>
    }
}

export default Player;