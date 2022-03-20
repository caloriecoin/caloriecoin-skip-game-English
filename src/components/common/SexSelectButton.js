import React, {useState} from 'react';

import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SexSelectButton = ({ gender, onChangeHandler}) =>{

    return <TouchableOpacity style={styles.container} onPress={()=>{
       if(gender === 'male') {
           onChangeHandler('female');
        }
       else {
            onChangeHandler('male');
       }
    }}>
        {gender === 'male' ? <View style={styles.selectBox}>
            <Text style={[styles.selectedItem,{paddingRight:20, paddingLeft:20}]}>Male</Text>
            <Text style={[styles.unselectedItem,{marginLeft:36}]}>female</Text>
        </View> : <View style={styles.selectBox}>
            <Text style={[styles.unselectedItem,{marginRight:36}]}>male</Text>
            <Text style={[styles.selectedItem,{paddingRight:20, paddingLeft:20}]}>Female</Text>
        </View>}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        margin:14,
    },
    selectBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f1f1f5',
        padding:24,
        paddingBottom:8,
        paddingTop:8,
        borderRadius:20,
    },
    selectedItem:{
        fontFamily: 'SUIT-Bold',
        backgroundColor: '#171725',
        color:'white',
        fontSize:14,
        padding:14,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:14
    },
    unselectedItem:{
        fontFamily: 'SUIT-Bold',
        color:'#44444f',
        fontSize:14
    }
});

export default SexSelectButton;