import React, { useEffect } from 'react';

import { Image, StyleSheet } from 'react-native';

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

import CoinImage from '@/assets/image/coin_logo.png';

const Coin = () => {
    const x = useSharedValue(185);
    const y = useSharedValue(665);
    const w = useSharedValue(32);
    const h = useSharedValue(32);
    const o = useSharedValue(255);

    const animatedStyle = useAnimatedStyle(
        () => ({
            transform: [
                { translateX: withTiming(x.value, { duration: 300 }) }, 
                { translateY: withTiming(y.value, { duration: 300 }) },
            ],
            width: withTiming(w.value, { duration: 300 }),
            height: withTiming(h.value, { duration: 300 }),
            opacity: withTiming(o.value, { duration: 300 })
        }),
        [],
    );

    useEffect(()=>{

        let xRand = 185;
        let yRand = 665;

        w.value = 18;
        h.value = 18;
        o.value = 1;
        x.value = xRand;
        y.value = yRand;
        
        setTimeout(()=>{
            xRand = Math.random() * 220 + 90;
            yRand = Math.random() * 100 + 625;

            o.value = 1;
            w.value = 32;
            h.value = 32;
            x.value = xRand;
            y.value = yRand;
        }, 500);

        setTimeout(()=>{
            x.value = 240;
            y.value = 115;

            w.value = 18;
            h.value = 18;
            o.value = 0;
        }, 1000);

        setTimeout(()=>{
            w.value = 0;
            h.value = 0;
            
        }, 1500);

        setTimeout(()=>{
            x.value = xRand;
            y.value = yRand;
        }, 2000);

    },[]);

    return <Animated.View style={[styles.coin,animatedStyle]}>
        <Image source={CoinImage} style={{width:'100%', height:'100%'}}/>
    </Animated.View>
};

const styles = StyleSheet.create({
    coin:{
        position: 'absolute',
    }
});

export default Coin;