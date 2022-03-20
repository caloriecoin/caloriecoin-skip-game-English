import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, FlatList } from 'react-native';

import FloatingButton from '@components/common/FloatingButton';

import QuestLockIcon from '@/assets/icon/quest-lock.svg';

import QuestJumpBronzeImage from '@/assets/image/quest-jump-bronze.png';
import QuestJumpSilverImage from '@/assets/image/quest-jump-silver.png';
import QuestJumpGoldImage from '@/assets/image/quest-jump-gold.png';

import QuestVSBronzeImage from '@/assets/image/quest-vs-bronze.png';
import QuestVSilverImage from '@/assets/image/quest-vs-silver.png';


const data = [
    {
        image: true,
        title: 'Skipping',
        subtitle: '100 jumps'
    },
    {
        image: false,
        title: 'Skipping',
        subtitle: '300 jumps'
    },{
        image: false,
        title: 'Skipping',
        subtitle: '500 jumps'
    },{
        image: false,
        title: 'Victory',
        subtitle: '10 jumps'
    },{
        image: false,
        title: 'Victory',
        subtitle: '100 jumps'
    },{
        image: false,
        title: 'Victory',
        subtitle: '500 jumps'
    },{
        image: false,
        title: 'Attending',
        subtitle: '3 days'
    },{
        image: false,
        title: 'Attending',
        subtitle: '7 days'
    },{
        image: false,
        title: 'Attending',
        subtitle: '30 days'
    },{
        image: false,
        title: 'You got coins! ',
        subtitle: '500 coins'
    },{
        image: false,
        title: 'You got coins!',
        subtitle: '3000 coins'
    },{
        image: false,
        title: 'You got coins!',
        subtitle: '10000 coins'
    }
];

const QuestView = ({navigation}) => {

    const [modalView, setModalView] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);

    return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalView}
        >
            <TouchableOpacity style={{backgroundColor:'#00000088', flex:1, justifyContent:'center', alignItems:'center'}} onPress={()=>{
                setModalView(false);
            }}>
                <View style={{padding:24, backgroundColor:'#fff', justifyContent:'center', alignItems:'center', borderRadius:17, width:'85%'}}>
                    <Text style={{fontFamily:'SUIT-ExtraBold', fontSize:24}}>NFT Quest</Text>
                    <Text style={{fontFamily:'SUIT-Regular', fontSize:18, marginTop:18}}>You've completed your first jumping rope challenge! You have been issued the above certificate.</Text>
                    <Text style={{marginTop:28, textAlign:'center', fontFamily:'SUIT-Regular', fontSize:14}}>Touch anywhere to close the window.</Text>
                </View>
            </TouchableOpacity>
        </Modal>
        <Text style={{fontFamily:'SUIT-ExtraBold', fontSize:18, marginBottom:18}}>NFT Quest List</Text>
        <View style={{width:'90%', marginTop:24}}>
            <FlatList
            data={data}
            columnWrapperStyle={{
                justifyContent: 'space-around',
                marginBottom: 8,
            }}
            onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({item}) => {
                if(!item.image)
                {
                    return <View style={{
                                width: 100,
                                height: 130,
                                backgroundColor:'#f1f1f5', 
                                borderRadius:18, 
                                justifyContent:'center', 
                                alignItems:'center'
                            }}>
                            <QuestLockIcon width={48} height={48}/>
                            <Text style={{fontFamily:'SUIT-SemiBold', fontSize:12, marginTop: 10, marginBottom:10}}>{item.title}</Text>
                            <Text style={{fontFamily:'SUIT-SemiBold', fontSize:12}}>{item.subtitle}</Text>
                        </View>
                }
                else
                {
                    return <TouchableOpacity 
                                onPress={()=>{
                                    setModalView(true);
                                }}
                                style={{
                                    width: 100,
                                    height: 130,
                                    backgroundColor:'#f1f1f5', 
                                    borderRadius:18, 
                                    justifyContent:'center', 
                                    alignItems:'center'
                                }}>
                                <Image source={QuestJumpBronzeImage} style={{width:48, height:48, paddingBottom:-10, paddingTop:-20}}/>
                                <Text style={{fontFamily:'SUIT-SemiBold', fontSize:12, marginTop: 10, marginBottom:10}}>{item.title}</Text>
                                <Text style={{fontFamily:'SUIT-SemiBold', fontSize:12}}>{item.subtitle}</Text>
                            </TouchableOpacity>
                }
            }}
            keyExtractor={({index}) => index}
            numColumns={3}
            style={{
                width: '100%',
            }}
            />
        </View>
        
        <FloatingButton handleClick={()=>{
            navigation.navigate('wallet_view');
        }}/>
    </View>);
};

export default QuestView;