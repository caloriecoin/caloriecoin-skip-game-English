import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {format} from 'date-fns';

import DatePicker from 'react-native-date-picker';

import SexSelectButton from '@components/common/SexSelectButton';

import CharacterMale from '@/assets/image/character-male.png';
import CharacterFeMale from '@/assets/image/character-female.png';
import {ScrollView} from 'react-native-gesture-handler';

const MyInfoView = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [gender, setGender] = useState('male');
  const [date, setDate] = useState(new Date());
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const userInfo = useSelector(({user}) => user.info);

  useEffect(() => {
    console.log(userInfo);
    setDate(new Date(userInfo.birthday));
    setGender(userInfo.gender);
    setHeight(userInfo.height.toString());
    setWeight(userInfo.weight.toString());
  }, []);

  const handleUpdateInfo = async () => {
    const response = await axios.post(
      'https://caloriecoin.herokuapp.com/api/user/registerUserAndWallet',
      {
        kakaoId: userInfo.id,
        profile: userInfo.profileURL,
        avartar: gender,
        gender: gender,
        nickname: userInfo.nickname,
        birthday: '',
        height: height,
        weight: weight,
      },
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={gender === 'male' ? CharacterMale : CharacterFeMale}
          style={{width: 84, height: 142, margin: 8}}
        />
        <SexSelectButton
          gender={gender}
          onChangeHandler={sex => {
            setGender(sex);
          }}
        />
        <Text style={{fontFamily: 'SUIT-SemiBold', fontSize: 24}}>
          {userInfo.nickname}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsOpen(true);
          }}
          style={styles.inputContainerBirth}>
          <Text style={styles.inputTitleBirth}>Date of Birth</Text>
          <Text style={styles.inputBox}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Height</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.inputBox}
              onChangeText={setHeight}
              value={height}
              placeholder="165"
              keyboardType="numeric"
            />
            <Text style={styles.inputBox}>cm</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Weight</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.inputBox}
              onChangeText={setWeight}
              value={weight}
              placeholder="60 "
              keyboardType="numeric"
            />
            <Text style={styles.inputBox}>lb</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleUpdateInfo();
          }}
          style={styles.saveButton}>
          <Text style={{fontFamily: 'SUIT-SemiBold', color: 'white'}}>
            Save
          </Text>
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={isOpen}
          date={new Date()}
          onConfirm={date => {
            setIsOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setIsOpen(false);
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Kanit-ExtraBoldItalic',
    color: '#FF3348',
    padding: 14,
    fontSize: 28,
  },
  inputContainer: {
    marginTop: 18,
    backgroundColor: '#f1f1f5',
    width: '85%',
    padding: 42,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerBirth: {
    marginTop: 18,
    backgroundColor: '#f1f1f5',
    width: '85%',
    padding: 42,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTitleBirth: {
    fontFamily: 'SUIT-Regular',
    fontSize: 14,
    color: '#9ea4a9',
    marginBottom: 8,
  },
  inputTitle: {
    fontFamily: 'SUIT-Regular',
    fontSize: 14,
    color: '#9ea4a9',
    marginTop: 10,
  },
  inputBox: {
    fontFamily: 'SUIT-ExtraBold',
    fontSize: 28,
    color: '#171725',
    minWidth: 60,
  },
  saveButton: {
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: '#ff3348',
    padding: 50,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
  },
});

export default MyInfoView;
