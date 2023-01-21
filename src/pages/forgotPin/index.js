//Import Library
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  BackHandler,
  ScrollView,
} from 'react-native';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextDefault from '../../components/atoms/textDefault';
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import TextField from '../../components/moleculs/textField';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';
import PopUp from '../../components/organism/popup';

//Import Assets
import ImageGirlPassword from '../../../assets/forgotPassword/girl_tries_password.png';
import ImageReceiveMessage from '../../../assets/popup/received_message_icon.png';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import TextFieldEmail from '../../components/moleculs/textFieldEmail';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
const {width, height} = Dimensions.get('window');

const ForgotPin = ({navigation}) => {
  const {t, i18n}=useTranslation()
  const [email, setEmail] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckValidEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const backAction = () => {
    BackHandler.removeEventListener();
    return true;
  };
  useEffect(() => {
    console.log('isicheck email', checkValidEmail);

    if (email === null || email === '') {
      setIsButton(false);
      setCheckValidEmail(false);
    } else if (email === 'client@gmail.com') {
      setIsButton(false);
    } else if (checkValidEmail === false && email !== '') {
      console.log('isi Isbutton', isButton);
      setIsButton(true);
    } else {
      setIsButton(false);
      setCheckValidEmail(true);
    }

    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  const handleKirim = () => {
    navigation.navigate('CreateNewPin');
  };

  return (
    <View style={styles.Container}>
      <HeaderPages
        hideShowTitle={true}
        value={'Forgot the evilz pin?'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.ContainerScrollView} showsVerticalScrollIndicator={false} >
        <View style={styles.ContainerImage}>
          <Image source={ImageGirlPassword} />
          <Text style={styles.TextStyle}>
            {t('Enter your email to create a new evilz pin')}
          </Text>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'E-mail'} />
            <RequirementSymbols />
          </View>
          <TextFieldEmail
            placeholder={'E-mail'}
            value={email}
            onChangeText={handleCheckValidEmail}
            keyboardType={'email-address'}
            validValue={checkValidEmail}
            textNegatifCaseBlank={'You must fill in this section'}
            textNegatifCase3={'Incorrect email format'}
            isNegatifCase1={email === 'client@gmail.com'}
            textNegatifCase1={'Unregistered e-mail'}
          />
        </View>
     
        <View style={{height:100}}/>
      </ScrollView>
      <View style={styles.ContainerKirim}>
        <BlueButton value={'Send'} onPress={handleKirim} isButton={isButton} />
      </View>
    </View>
  );
};

export default ForgotPin;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.background,
  },
  ContainerImage: {
    marginTop: 40,
    alignItems: 'center',
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#98A5D3',
    width: '90%',
  },
  FormStyle: {
    width: '90%',

    marginTop: 30,
    alignSelf: 'center',
  },
  ContainerKirim: {
    width: '90%',
    bottom: 0,
  },
  TextWrong: {
    color: 'red',
  },
  ContainerScrollView:{
  
  }
});
