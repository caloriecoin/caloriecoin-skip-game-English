import React, { useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import * as Progress from 'react-native-progress';

import WemixLogo from '@/assets/image/wemix_logo.png';
import CalorieCoinLogo from '@/assets/image/coin_logo.png';


const IntroView = ({loading}) => {
    const [loadingText, setLoadingText] = useState('Connecting to Klaytn Network ...');
    
    useEffect(()=>{
        if(loading >= 0.3 && loading < 0.45)
        {
            setLoadingText(()=>'Linking Wemix data ...');
        }
        else if(loading >= 0.45 && loading < 0.55)
        {
            setLoadingText(()=>'Linking Wemix account data link ...');
        }
        else if(loading >= 0.55 && loading < 0.65)
        {
            setLoadingText(()=>'Linking Wemix contract data ...');
        }
        else if(loading >= 0.65 && loading <= 1.0)
        {
            setLoadingText(()=>'Loading Caloriecoin database ...');
        }
        else
        {
            setLoadingText(()=>'Connecting to Klaytn network ...');
        }
    }, [loading]);

    return <View style={styles.container}>
        <Text style={styles.textTitleStyle}>{loadingText}</Text>
        <Text style={{color:'white', marginBottom:12}}>Analyzing results</Text>
        <Progress.Bar progress={loading} width={310} color={'#fdca40'} height={12} borderRadius={10}/>
        <Text style={styles.textStyle}>Wemix X CalorieCoin</Text>       
        <View style={styles.imageContainer}>
            <Image source={WemixLogo} style={{width:87, height:87, marginRight:48}}/>
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