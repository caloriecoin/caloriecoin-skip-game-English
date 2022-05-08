import React, { useEffect, useState } from 'react';

import {Image} from 'react-native';

import DefaultProfile from '@/assets/icon/profile-default.svg';

const Profile = ({profileURI, width, height, radius}) => {
    const [ isOnError, setIsOnError ] = useState(false);

    useEffect(()=>{
        if(profileURI == null) setIsOnError(true);
    },[]);

    if(isOnError)
    {
        return <DefaultProfile width={width} height={height}/>
    }
    else
    {
        return <Image 
            source={{uri:profileURI}} 
            style={{
                width:width,
                height:height,
                borderRadius:radius
            }}
            onError={()=>{setIsOnError(true)}} />
    }
};

export default Profile;