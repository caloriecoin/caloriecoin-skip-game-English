import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IconDataBox = ({icon, title, value, unit}) =>{
    return <View style={{flexDirection:'column', flex:1, marginTop:16}}>
        <View style={{flexDirection:'row'}}>
            {icon}
            <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:8, alignItems:'flex-end'}}>
            <Text style={styles.valueText}>{value}</Text>
            <Text style={styles.unitText}>{unit}</Text>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    titleText:{
        fontFamily:'SUIT-Regular',
        color:'#9ea4a9',
        fontSize:14,
        marginLeft:8
    },
    valueText:{
        fontFamily:'SUIT-Heavy',
        color:'#171725',
        fontSize:24
    },
    unitText:{
        fontFamily:'SUIT-Medium',
        color:'#696974',
        fontSize:11,
        padding:4,
    }
});

export default IconDataBox;