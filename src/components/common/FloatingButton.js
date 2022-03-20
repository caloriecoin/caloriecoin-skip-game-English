import React from 'react';
import { TouchableOpacity } from 'react-native';

import WalletFloatBtnIcon from '@/assets/icon/floating-btn.svg';

const FloatingButton = ({handleClick}) =>{
    return <TouchableOpacity onPress={()=>{handleClick && handleClick()}} style={{position:'absolute', bottom:0, right:0}}>
        <WalletFloatBtnIcon height="84" width="84"/>
    </TouchableOpacity>
};

export default FloatingButton;