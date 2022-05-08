import React, { useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import * as Progress from 'react-native-progress';

import OasisLogo from '@/assets/image/oasis_logo.png';
import CalorieCoinLogo from '@/assets/image/coin_logo.png';


const IntroView = ({loading}) => {
    const [loadingText, setLoadingText] = useState('Connect to Oasis Network..');
    
    useEffect(()=>{
        if(loading >= 0.3 && loading < 0.45)
        {
            setLoadingText(()=>'Load Oasis Emerald network ...');
        }
        else if(loading >= 0.45 && loading < 0.55)
        {
            setLoadingText(()=>'Link Oasis account data link ...');
        }
        else if(loading >= 0.55 && loading < 0.65)
        {
            setLoadingText(()=>'Linking Oasis contract data ...');
        }
        else if(loading >= 0.65 && loading <= 1.0)
        {
            setLoadingText(()=>'Load Caloriecoin database ...');
        }
        else
        {
            setLoadingText(()=>'Connect to Oasis network..');
        }
    }, [loading]);

    return <View style={styles.container}>
        <Text style={styles.textTitleStyle}>{loadingText}</Text>
        <Text style={{color:'white', marginBottom:12}}>Analyzing results</Text>
        <Progress.Bar progress={loading} width={310} color={'#fdca40'} height={12} borderRadius={10}/>
        <Text style={styles.textStyle}>Oasis X CalorieCoin</Text>       
        <View style={styles.imageContainer}>
            <Image source={OasisLogo} style={{width:87, height:87, marginRight:48}}/>
            <Image source={CalorieCoinLogo} style={{width:100, height: 100}}/>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        backgroundColor:'#0C0C0C',
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitleStyle: {
        fontFamily:'SUIT-Bold',
        color:'white',
        fontSize:24,
        marginBottom:100
    },
    textStyle : {
        fontFamily:'SUIT-Bold',
        color:'white',
        fontSize:24,
        marginTop:90
    },
    imageContainer: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:60
    }
});

export default IntroView;