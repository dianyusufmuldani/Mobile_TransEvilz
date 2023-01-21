//Import Library
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  BackHandler,
} from 'react-native';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import BlueButton from '../../components/moleculs/blueButton';
import TextFieldPassword from '../../components/moleculs/textFieldPassword';
import {Colours} from '../../helpers/colours';
import HeaderPages from '../../components/moleculs/headerPages';
import PopUp from '../../components/organism/popup';

//Import Assets
import ImageGirlPassword from '../../../assets/forgotPassword/girl_tries_password.png';
import ImageSuccess from '../../../assets/popup/Completed_successfully.png';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNewPassword,
  setNewPassword,
} from '../../service/redux/reducer/usersSlice';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
const {width, height} = Dimensions.get('window');

const CreateNewPassword = ({navigation}) => {
  const {t, i18n}=useTranslation()
  const dispatch = useDispatch();
  const stateUsers = useSelector(state => state.users);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [checkMatchPassword, setCheckMatchPassword] = useState(false);
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
    console.log('isi state', checkMatchPassword);
    console.log('isi state', checkValidPassword);
    if (password === null || password === '') {
      setIsButton(false);
      setCheckValidPassword(false);
      console.log('isi IF');
    } else if (confirmPassword === null || confirmPassword === '') {
      setIsButton(false);
      setCheckMatchPassword(false);
    } else if (password !== confirmPassword) {
      setCheckMatchPassword(true);
      setIsButton(false);
    } else if (password === confirmPassword) {
      setCheckMatchPassword(false);
      if (checkValidPassword === false && checkMatchPassword === false) {
   
        console.log('masuk sini')
        setIsButton(true);
    }
    
      }
      
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [password, confirmPassword, checkMatchPassword, checkValidPassword]);
  const handleButtonPopup = () => {
    setIsPopup(false);
    navigation.navigate('Login');
  };
  const handleCancelPopUp = () => {
    setIsPopup(false);
  };
  const handleButtonFooter = () => {
    dispatch(
      getNewPassword({
        email: stateUsers.newPassword.email.toLowerCase(),
        password: password,
      }),
    );
  };
  useEffect(() => {
    if (stateUsers.newPassword === 200) {
      setIsPopup(true);
    }
  }, [stateUsers.newPassword]);
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  return (
    <View style={styles.Container}>
      <PopUp
        visible={isPopup}
        onPressCancel={handleCancelPopUp}
        onPressButton={handleButtonPopup}
        value={'Your password was successfully updated'}
        ImagePopUp={ImageSuccess}
        textButton={'Login Now'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Make a new password'}
        onPress={() => navigation.goBack()}
        showBackButton={false}
      />
      <ScrollView style={styles.ContainerBody}>
        <View style={styles.ContainerImage}>
          <Image source={ImageGirlPassword} />
          <Text style={styles.TextStyle}>{t('Create your new password')}</Text>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'New password'} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'New password'}
            value={password}
            onChangeText={handleCheckValidPassword}
            maxLength={16}
            validValue={checkValidPassword}
            textNegatifCaseBlank={'You must fill in this section'}
            textNegatifCase3={
              'Password must contain uppercase letters, numbers and symbols (@ * # &)'
            }
          />
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Confirmation Password'} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Confirmation Password'}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            maxLength={16}
            validValue={checkMatchPassword}
            textNegatifCaseBlank={'You must fill in this section'}
            isNegatifCase1={
              password !== confirmPassword &&
              confirmPassword !== '' &&
              confirmPassword !== null
            }
            textNegatifCase1={'Passwords are not the same'}
          />
        </View>
      </ScrollView>
      <View style={styles.ContainerKirim}>
        <BlueButton
          value={'Send'}
          isButton={isButton}
          onPress={handleButtonFooter}
        />
      </View>
    </View>
  );
};

export default CreateNewPassword;
const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: Colours.background,
  },
  ContainerBody: {},
  ContainerImage: {
    marginTop: 0,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#98A5D3',
  },
  FormStyle: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
  },
  ContainerKirim: {
    width: '90%',
    bottom: 0,
    alignSelf: 'center',
  },
  TextWrong: {
    color: 'red',
  },
});
