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

const CreateNewPassword = ({navigation}) => {
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
    console.log('isi state', stateUsers);
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
        setIsButton(true);
      }
    }
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [password, confirmPassword]);
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
        value={'Password anda berhasil diperbarui'}
        ImagePopUp={ImageSuccess}
        textButton={'Masuk Sekarang'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Buat Kata sandi Baru'}
        onPress={() => navigation.goBack()}
        showBackButton={false}
      />
      <ScrollView style={styles.ContainerBody}>
        <View style={styles.ContainerImage}>
          <Image source={ImageGirlPassword} />
          <Text style={styles.TextStyle}>Buat kata sandi baru anda</Text>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Kata sandi Baru '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Kata sandi baru'}
            value={password}
            onChangeText={handleCheckValidPassword}
            maxLength={16}
            validValue={checkValidPassword}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            textNegatifCase3={
              'Kata sandi harus berisi huruf besar, angka dan simbol (@ * # &)'
            }
          />
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Konfirmasi Kata sandi Baru '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Konfirmasi kata sandi baru'}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            maxLength={16}
            validValue={checkMatchPassword}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            isNegatifCase1={
              password !== confirmPassword &&
              confirmPassword !== '' &&
              confirmPassword !== null
            }
            textNegatifCase1={'Kata sandi tidak sama'}
          />
        </View>
      </ScrollView>
      <View style={styles.ContainerKirim}>
        <BlueButton
          value={'Kirim'}
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
