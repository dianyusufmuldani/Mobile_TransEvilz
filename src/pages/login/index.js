//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  BackHandler,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

//Import Component
import TextButton from '../../components/atoms/textButton';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import TextTitleOnBoarding from '../../components/atoms/textTitleOnBoarding';
import TextDefault from '../../components/atoms/textDefault';
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import TextButtonBlue from '../../components/atoms/textButtonBlue';
import BlueButton from '../../components/moleculs/blueButton';
import TextFieldPassword from '../../components/moleculs/textFieldPassword';
import {Colours} from '../../helpers/colours';
import TextFieldEmail from '../../components/moleculs/textFieldEmail';
import PopUpError from '../../components/organism/popupError';
import { getUsers } from '../../service/redux/reducer/usersSlice';
import { setIsPopupError3xTest, setIsPopupInternetNotStable, setIsPopupRequestTimedOut } from '../../service/redux/reducer/globalSlice';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
// import { RegexPassword } from '../../helpers/formats';

//Import Assets
import ImageFingerprint from '../../../assets/login/Fingerprint.png';
import ImagePopupError3x from '../../../assets/popup/popup_error.png';


const Login = ({navigation}) => {
  const [isButton, setIsButton] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [isPopup3x, setIsPopup3x] = useState(false);
  const stateUsers=useSelector(state=>state.users)
  const stateGlobal=useSelector(state=>state.global)
  const dispatch=useDispatch()
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
  const handleCheckValidPassword = text => {
    let re = /\S+@\S+\.\S+/;
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*#&])[A-Za-z\d#$@!%&*?]{8,16}$/;
    setPassword(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };

  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    // const request={};
    //  dispatch(getUsers(request))
    // console.log('cek state users', stateUsers.data)
    if (email == null || email == '') {
      setIsButton(false);
      setCheckValidEmail(false);
    } else if (password == null || password == '') {
      setIsButton(false);
      setCheckValidPassword(false);
      console.log('isiCheck Email OKE', checkValidEmail);
    } 
    else if(email=='client@gmail.com'){
      setIsButton(false)
    }
    else if (checkValidEmail == false && checkValidPassword == false) {
      setIsButton(true);
    //   const request = {};
    // dispatch(getUsers(request))
    } else {
      setIsButton(false);
    }
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  const handleRegistrasi = () => {
    navigation.navigate('Registration');
  };
  const handleLogin = () => {
    navigation.navigate('HomepageNav');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <>
      <ScrollView style={styles.Container}>
        <PopUpError
          visible={isPopup3x}
          value={
            'Kata sandi yang anda masukkan sudah 3 kali salah, Coba setelah 10 menit '
          }
          ImagePopUp={ImagePopupError3x}
          textButton={'Coba Nanti'}
        />
        <PopUpError visible={stateGlobal.isPopupError3xTest} onPressButton={()=>dispatch(setIsPopupError3xTest(false))} ImagePopUp={ImagePopupError3x} value={'Kata sandi yang anda masukkan sudah 3 kali salah, Coba setelah 10 menit '} textButton={'Coba Nanti'}/>
        <PopUpError visible={stateGlobal.isPopupInternetNotStable} onPressButton={()=>dispatch(setIsPopupInternetNotStable(false))} ImagePopUp={ImagePopupError3x} value={'Oops! Koneksi internet anda tidak stabil, muat ulang halaman'} textButton={'Coba Nanti'}/>
        
    
        <View style={styles.ContainerBody}>
          <View style={styles.ContainerHeader}>
            <TextTitleOnBoarding value={'Hallo!'} />
          </View>
          <View style={styles.ContainerText}>
            <TextDescriptionOnBoarding value={'Sudah punya akun ? '} />
            <TextButton
              value={'Lakukan Registrasi'}
              onPress={handleRegistrasi}
            />
          </View>
          <View style={styles.ContainerImage}>
            <Image source={ImageFingerprint} />
          </View>

          <View style={styles.FormLogin}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Email '} />
              <RequirementSymbols />
            </View>
            <TextFieldEmail
              placeholder={'Email'}
              value={email}
              onChangeText={handleCheckValidEmail}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            
            />
            {checkValidEmail ? (
              <Text style={styles.TextWrong}>Format email salah</Text>
            ) : null}
            <NegatifCase value={email} text={'Anda harus mengisi bagian ini'} />
            {email!='client@gmail.com' ?
(null):( <NegatifCase text={'Email tidak terdaftar'} value={''} />)
}
          </View>

          <View style={styles.FormLogin}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Kata sandi '} />
              <RequirementSymbols />
            </View>
            <TextFieldPassword
              placeholder={'Kata sandi'}
              onChangeText={handleCheckValidPassword}
              value={password}
              maxLength={16}
            />
            {checkValidPassword==true&&password!='' ? (
              <Text style={styles.TextWrong}>
                Kata sandi harus berisi huruf besar, angka dan simbol (@ * # &)
              </Text>
            ) : null}
            <NegatifCase
              value={password}
              text={'Anda harus mengisi bagian ini'}
            />
            <View style={{alignSelf: 'flex-end'}}>
              <TextButtonBlue
                value={'Lupa Kata sandi ?'}
                onPress={handleForgotPassword}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.ButtonLogin}>
        <BlueButton value={'Masuk'} onPress={handleLogin} isButton={isButton} />
      </View>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    backgroundColor:Colours.background
  },
  ContainerBody: {
    width: '90%',
    alignSelf: 'center',
  },
  ContainerHeader: {
    marginTop: 36,
  },
  ContainerText: {
    flexDirection: 'row',
    marginBottom: 33,
    alignSelf: 'center',
  },
  FormLogin: {
    marginTop: 30,
  },
  ButtonLogin: {
    width: '90%',

    bottom: 0,
    alignSelf: 'center',
  },
  TextWrong: {
    color: '#DC3328',
  },
  ContainerImage: {
    width: '100%',
    height: 250,
  },
});
