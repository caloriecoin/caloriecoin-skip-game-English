import React, {useEffect} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Toast from 'react-native-toast-message';

// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

import BackgroundImage from '@/assets/image/login_background.png';

import KakaoIcon from '@/assets/icon/kakaotalk_icon.svg';
import FacebookIcon from '@/assets/icon/facebook_icon.svg';
import GoogleIcon from '@/assets/icon/google-icon.svg';

const LoginView = ({clickHandler, isLogin}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1038105975230-1ap7l76fge28tqe8jub07ph22uj54i7p.apps.googleusercontent.com',
    });
    // GoogleSignin.configure({webClientId:'1:879653988026:android:a89e7bd80c796e90c24483'});
  }, []);

  // const loginWithFacebook = () => {
  //     LoginManager.logInWithPermissions(["public_profile", "email"]).then(
  //       function(result) {
  //         if (result.isCancelled) {
  //             Toast.show({
  //                 type: 'error',
  //                 text1: '⚠ Alret',
  //                 text2: 'Login was cancelled !! try again...',
  //               });
  //         } else {
  //           AccessToken.getCurrentAccessToken().then((data) => {
  //             const { accessToken } = data;
  //             isLogin(accessToken);
  //           });
  //         }
  //        },
  //        function(error) {
  //         console.log("==> Login fail with error: " + error);
  //         Toast.show({
  //             type: 'error',
  //             text1: '⚠ Alret',
  //             text2: 'Login Error !! check network status & try again...',
  //           });
  //        }
  //      );
  // };

  const onAuthStateChanged = user => {
    console.log(user);
  };

  const onGoogleButtonPress = async () => {
    console.log('start google login');
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, userInfo?.idToken);

      const googleCredential = auth.GoogleAuthProvider.credential(userInfo?.idToken);
      auth().signInWithCredential(googleCredential);

      auth().onAuthStateChanged(onAuthStateChanged);
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: '⚠ Alret',
        text2: `${err}`,
      });
    }

    //return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.backgroundContainer}>
          <Text style={styles.titleText}>CalorieCoin</Text>
          <Text
            style={{
              color: 'white',
              marginBottom: 22,
              fontSize: 22,
              fontWeight: '100',
            }}>
            Play to <Text style={{fontWeight: 'bold'}}>E</Text>xercise &{' '}
            <Text style={{fontWeight: 'bold'}}>E</Text>arn !
          </Text>
          <Text style={styles.subtitleText}>Exercise and Earn Money</Text>
          <Text style={styles.subtitleText}>
            New Blockchain P2E Metaverse Skipping Rope Game
          </Text>

          <TouchableOpacity
            style={styles.googleLoginBtn}
            onPress={() => {
              onGoogleButtonPress();
            }}>
            <GoogleIcon width={22} height={22} fill={'white'} />
            <Text style={{fontSize: 18, marginLeft: 42, color: 'black'}}>
              Google Login
            </Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={styles.facebookLoginBtn} onPress={()=>{loginWithFacebook()}}>*/}
          {/*    <FacebookIcon width={22} height={22} fill={'white'}/>*/}
          {/*    <Text style={{fontSize:18, marginLeft:24, color : 'white'}}>Facebook Login</Text>*/}
          {/*</TouchableOpacity>*/}
          <TouchableOpacity
            style={styles.kakaoTalkLoginBtn}
            onPress={() => {
              clickHandler();
            }}>
            <KakaoIcon width={22} height={22} fill={'black'} />
            <Text style={{fontSize: 18, marginLeft: 24}}>Kakaotalk Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Kanit-ExtraBoldItalic',
    fontSize: 44,
    marginBottom: 32,
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  backgroundContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  subtitleText: {
    color: 'white',
    fontFamily: 'SUIT-Medium',
    fontSize: 14,
    marginBottom: 12,
  },
  kakaoTalkIcon: {
    backgroundColor: '#3A1D1D',
  },
  kakaoTalkLoginBtn: {
    marginTop: 20,
    backgroundColor: '#FEE500',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    width: '60%',
  },
  facebookLoginBtn: {
    marginTop: 20,
    backgroundColor: '#4267B2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    width: '60%',
  },
  googleLoginBtn: {
    marginTop: 180,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    width: '60%',
  },
});

export default LoginView;
