//Import Library
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {View} from 'react-native';
import Toggle from 'react-native-toggle-element';
import { useDispatch, useSelector } from 'react-redux';
import { hitLanguage } from '../../../service/api';
import { getLanguage } from '../../../service/redux/reducer/usersSlice';

const SwitchingLanguage = () => {
  const dispatch=useDispatch()
  const stateUsers=useSelector(state=>state.users)
  const [ToggleValue, setToggleValue] = useState(true);
  const [language, setLanguage]=useState('id')
  const {t, i18n}=useTranslation()
  useEffect(()=>{
    if (ToggleValue === true) {
      setLanguage('id')
    } else if(ToggleValue===false) {
      setLanguage('en')   
    }
    
  },[ToggleValue])
  useEffect(()=>{
    setStorageLanguage()
    getLanguage()
    i18n.changeLanguage(language)
  },[language])

  const getLanguage = async() => {
    const languageStorage = await AsyncStorage.getItem('languageStorage');
    console.log('Now language',languageStorage)
};
useEffect(()=>{
  getLanguage()
  if(stateUsers.language!==null||stateUsers.language!==undefined){
    if(stateUsers.language==='id'){
      setToggleValue(true)
    }
    else if(stateUsers.language==='en'){
      setToggleValue(false)
    }
  }
},[])
  const setStorageLanguage = async() => {
        await  AsyncStorage.setItem('languageStorage', language);      
  };

  return (
    <View>
      <Toggle
        value={ToggleValue}
        onPress={toggle => setToggleValue(toggle)}
        leftTitle={ToggleValue === false ? 'EN' : ''}
        rightTitle={ToggleValue === true ? 'ID' : ''}
        trackBar={{
          width: 45,
          height: 16,
          top: 20,
          radius: 24,
          activeBackgroundColor: '#B8DAFF',
          inActiveBackgroundColor: '#B8DAFF',
          borderWidth: 1,
          borderActiveColor: '#FFFFFF',
          borderInActiveColor: '#B8DAFF',
        }}
        thumbButton={{
          width: 30,
          height: 30,
          radius: 20,
          activeBackgroundColor: '#3A90EF',
          inActiveBackgroundColor: '#B8DAFF',
          activeColor: '#B8DAFF',
          inActiveColor: '#3A90EF',
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default SwitchingLanguage;
