//Import Library
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  // BackHandler,
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
import { useDispatch, useSelector } from 'react-redux';
import { setNewPassword } from '../../service/redux/reducer/usersSlice';

const ForgotPassword = ({navigation}) => {
  const dispatch=useDispatch()
  const stateUsers=useSelector(state=>state.users)
  const [email, setEmail] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
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
  // const backAction = () => {
  //   BackHandler.removeEventListener();
  //   return true;
  // };
  useEffect(() => {
    // console.log('cek state', useState);

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

    // BackHandler.addEventListener('hardwareBackPress', backAction);
    // return () =>
    //   BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  const handleKirim = () => {
    dispatch(setNewPassword({email:email}))
    setIsPopup(true);
  };
  const handleButtonPopup = () => {
    setIsPopup(false);
    navigation.navigate('CreateNewPassword');
  };
  const handleCancelPopUp = () => {
    setIsPopup(false);
  };
  return (
    <View style={styles.Container}>
      <PopUp
        visible={isPopup}
        onPressCancel={handleCancelPopUp}
        onPressButton={handleButtonPopup}
        value={'Permohonan Perubahan kata sandi telah dikirim ke email anda'}
        ImagePopUp={ImageReceiveMessage}
        textButton={'Cek Email Sekarang'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Lupa Kata Sandi ?'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.ContainerScrollView}>
        <View style={styles.ContainerImage}>
          <Image source={ImageGirlPassword} />
          <Text style={styles.TextStyle}>
            Masukkan email anda untuk membuat kata sandi baru
          </Text>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Email '} />
            <RequirementSymbols />
          </View>
          <TextFieldEmail
            placeholder={'Email'}
            value={email}
            onChangeText={handleCheckValidEmail}
            keyboardType={'email-address'}
            validValue={checkValidEmail}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            textNegatifCase3={'Format email salah'}
            isNegatifCase1={email==='client@gmail.com'}
            textNegatifCase1={'Email tidak terdaftar'}
          />
  
        </View>
      </ScrollView>
      <View style={styles.ContainerKirim}>
        <BlueButton value={'Kirim'} onPress={handleKirim} isButton={isButton} />
      </View>
    </View>
  );
};

export default ForgotPassword;
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
    // position: 'absolute',
    bottom: 0,
  },
  TextWrong: {
    color: 'red',
  },
});
