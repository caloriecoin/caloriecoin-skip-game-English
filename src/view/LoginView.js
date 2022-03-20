import React from 'react';

import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet, 
    Image,
    ImageBackground 
} from 'react-native';

import BackgroundImage from '@/assets/image/login_background.png';

import KakaoIcon from '@/assets/icon/kakaotalk_icon.svg';

const LoginView = ({clickHandler}) => {
    return <View style={styles.container}>
        <ImageBackground source={BackgroundImage}  style={{width:'100%',height:'100%'}}>

        <View style={styles.backgroundContainer}>
                <Text style={styles.titleText}>CalorieCoin</Text>
                <Text style={{color:'white', marginBottom:22, fontSize: 22, fontWeight:'100'}}>Play to <Text style={{fontWeight:'bold'}}>E</Text>xercise & <Text style={{fontWeight:'bold'}}>E</Text>arn !</Text>
                <Text style={styles.subtitleText}>Exercise and Earn Money</Text>
                <Text style={styles.subtitleText}>New Blockchain P2E Metaverse Skipping Rope Game</Text>
                
                <TouchableOpacity style={styles.kakaoTalkLoginBtn} onPress={()=>{clickHandler()}}>
                    <KakaoIcon width={22} height={22} fill={'black'}/>
                    <Text style={{fontSize:18, marginLeft:24}}>Kakaotalk Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>;
};

const styles = StyleSheet.create({
    container : {
        backgroundColor:'white',
        display: 'flex',
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontFamily:'Kanit-ExtraBoldItalic',
        fontSize:44,
        marginBottom:32,
        color:'white'
    },
    backgroundImage: {
        width:'100%',
        height:'100%',
        display: 'flex'
    },
    backgroundContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%', 
        height:'100%'
    },
    subtitleText: {
        color:'white',
        fontFamily:'SUIT-Medium',
        fontSize:14,
        marginBottom:12,
    },
    kakaoTalkIcon:{
      backgroundColor:'#3A1D1D'  
    },
    kakaoTalkLoginBtn:{
        marginTop:240,
        backgroundColor:'#FEE500',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding: 14,
        borderRadius:8,
        width:'60%'
    }
});

export default LoginView;