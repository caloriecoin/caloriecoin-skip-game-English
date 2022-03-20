import React from 'react';
import {View, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';

import MiningModeBackgroundImage from '@/assets/image/img-mining.png';

const MiningModeTile = ({navigation}) =>{
    return <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate('mining')}}>
        <ImageBackground source={MiningModeBackgroundImage} style={styles.background} resizeMode='cover'>
            <Text style={styles.title}>Normal Mode</Text>
            <Text style={styles.subtitle}>(Mining Mode)</Text>
        </ImageBackground>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    container: {
        marginTop:18
    },
    background: {
        backgroundColor:'#000',
        width: 160,
        height: 100,
        padding:14,
        borderRadius:8
    },
    title:{
        color:'white',
        fontFamily:'SUIT-Bold'
    },
    subtitle:{
        color: 'white',
        fontFamily:'SUIT-Medium'
    }
});

export default MiningModeTile;