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
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');

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
import {
  getLogin,
  getUsers,
  setLanguage,
  setLogin,
} from '../../service/redux/reducer/usersSlice';
import {
  setIsLoading,
  setIsPopupError3xTest,
  setIsPopupInternetNotStable,
} from '../../service/redux/reducer/globalSlice';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import ToastFailed from '../../components/moleculs/toastFailed';
import ToastedFailed from '../../components/moleculs/toastFailed';

//Import Assets
import ImageFingerprint from '../../../assets/login/Fingerprint.png';
import ImagePopupError3x from '../../../assets/popup/popup_error.png';

const Login = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [isButton, setIsButton] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [isPopup3x, setIsPopup3x] = useState(false);
  const [isToastedNotRegistered, setIsToastedNotRegistered] = useState(false);
  const [counterLogin, setCounterLogin] = useState(0);
  const stateUsers = useSelector(state => state.users);
  const stateGlobal = useSelector(state => state.global);
  const dispatch = useDispatch();
  const handleCheckValidEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
      dispatch(setLogin(null));
    } else {
      setCheckValidEmail(true);
      dispatch(setLogin(null));
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
  useEffect(() => {
    getLanguage();
    i18n.changeLanguage(stateUsers.language);
    setEmail(null);
    setPassword(null);
  }, []);
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  const getLanguage = async () => {
    const languageStorage = await AsyncStorage.getItem('languageStorage');
    dispatch(setLanguage(languageStorage));
  };

  useEffect(() => {
    if (email === null || email === '') {
      setIsButton(false);
      setCheckValidEmail(false);
    } else if (password === null || password === '') {
      setIsButton(false);
      setCheckValidPassword(false);
      console.log('isiCheck Email OKE', checkValidEmail);
    } else if (email === 'client@gmail.com') {
      setIsButton(false);
    } else if (counterLogin === 3) {
      setIsButton(false);
    } else if (checkValidEmail === false && checkValidPassword === false) {
      setIsButton(true);
    } else {
      setIsButton(false);
    }
    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, [email, password]);
  const handleRegistrasi = () => {
    setEmail(null);
    setPassword(null);
    navigation.navigate('Registration');
  };
  const handleLogin = () => {
    dispatch(setIsLoading(true));
    const request = {
      email: email.toLowerCase(),
      password: password,
    };
    dispatch(getLogin(request));
  };

  useEffect(() => {
    console.log('isi coba', stateUsers);
    console.log('counter', counterLogin);
  });
  useEffect(() => {
    console.log('stateUsers from pages Login', stateUsers.data);
    if (
      stateUsers.login != null ||
      stateUsers.login != undefined ||
      stateUsers.data != null ||
      stateUsers.data != undefined
    ) {
      dispatch(setIsLoading(false));
      if (stateUsers.login === 200) {
        if (stateUsers.data !== null) {
          setEmail(null);
          setPassword(null);
          if (stateUsers.data.user.userPin == false) {
            console.log('isi state users s', stateUsers.data.user.accessToken);
            navigation.navigate('CreatePIN');
          } else {
            navigation.navigate('HomepageNav');
          }
        }
      } else if (stateUsers.login === 400) {
        dispatch(setLogin(null));
        setCounterLogin(counterLogin + 1);
      }
    }
  }, [stateUsers]);
  useEffect(() => {
    if (counterLogin === 0) {
    } else if (counterLogin < 3) {
      console.log('Login gagal nambah');
      setIsToastedNotRegistered(true);
    } else {
      dispatch(setIsPopupError3xTest(true));
      console.log('Terblokir');
      setIsButton(false);
      setTimeout(() => {
        setCounterLogin(0);
        setIsButton(true);
      }, 60000);
    }
  }, [counterLogin]);

  const handleForgotPassword = () => {
    setEmail(null);
    setPassword(null);
    navigation.navigate('ForgotPassword');
  };
  return (
    <View style={styles.Container}>
      <ScrollView>
        <ToastedFailed
          visible={isToastedNotRegistered}
          onPressModal={() => {
            setIsToastedNotRegistered(false), dispatch(setLogin(null));
          }}
          onPressButton={() => {
            setIsToastedNotRegistered(false), dispatch(setLogin(null));
          }}
          width={'70%'}
          height={39}
          textToasted={'Your email is not registered'}
        />
        <PopUpError
          visible={stateGlobal.isPopupError3xTest}
          onPressButton={() => dispatch(setIsPopupError3xTest(false))}
          ImagePopUp={ImagePopupError3x}
          value={
            'The password that you entered has been wrong 3 times, try after 10 minutes'
          }
          textButton={'Try later'}
        />
        <PopUpError
          visible={stateGlobal.isPopupInternetNotStable}
          onPressButton={() => dispatch(setIsPopupInternetNotStable(false))}
          ImagePopUp={ImagePopupError3x}
          value={
            'Oops! Your internet connection is unstable, please reload the page'
          }
          textButton={'Try later'}
        />

        <View style={styles.ContainerBody}>
          <View style={styles.ContainerHeader}>
            <TextTitleOnBoarding value={'Hello!'} />
          </View>
          <View style={styles.ContainerText}>
            <TextDescriptionOnBoarding value={'Already have an account?'} />
            <TextButton value={'Register'} onPress={handleRegistrasi} />
          </View>
          <View style={styles.ContainerImage}>
            <Image source={ImageFingerprint} />
          </View>

          <View style={styles.FormLogin}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'E-mail'} />
              <RequirementSymbols />
            </View>

            <TextFieldEmail
              placeholder={'E-mail'}
              value={email}
              onChangeText={handleCheckValidEmail}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              valueNegatifCase={email}
              validValue={checkValidEmail}
              textNegatifCase3={'Incorrect email format'}
              textNegatifCaseBlank={'You must fill in this section'}
              isNegatifCase1={email === 'admin@gmail.com'}
              textNegatifCase1={'Unregistered e-mail'}
            />
          </View>

          <View style={styles.FormLogin}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Password'} />
              <RequirementSymbols />
            </View>
            <View
              style={password === '' ? styles.ContainerTextInputError : null}>
              <View
                style={
                  checkValidPassword === false
                    ? null
                    : styles.ContainerTextInputError
                }>
                <TextFieldPassword
                  placeholder={'Password'}
                  onChangeText={handleCheckValidPassword}
                  value={password}
                  maxLength={16}
                  blankValue={password}
                  validValue={checkValidPassword}
                  textNegatifCaseBlank={'You must fill in this section'}
                  textNegatifCase3={
                    'Password must contain uppercase letters, numbers and symbols (@ * # &)'
                  }
                />
              </View>
            </View>

            <View style={{alignSelf: 'flex-end'}}>
              <TextButtonBlue
                value={'Forgot password?'}
                onPress={handleForgotPassword}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.ButtonLogin}>
        <BlueButton value={'Enter'} onPress={handleLogin} isButton={isButton} />
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colours.background,
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
