//Import Library
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text, ScrollView, BackHandler} from 'react-native';

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

const CreateNewPassword = ({navigation}) => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(true);
  const [checkMatchPassword, setCheckMatchPassword] = useState(true);
  const handleCheckValidPassword = text => {
    let re = /\S+@\S+\.\S+/;
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*#&])[A-Za-z\d#$@!%&*?]{8,16}$/;
    setPassword(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPassword(true);
    } else {
      setCheckValidPassword(false);
    }
  };

  useEffect(() => {
    console.log('isi Match', checkValidPassword);
    if (password == null || password == '') {
      setIsButton(false);
      setCheckValidPassword(true);
      console.log('isi IF');
    } else if (confirmPassword == null || confirmPassword == '') {
      setIsButton(false);
      setCheckMatchPassword(true);
    } else if (password != confirmPassword) {
      setCheckMatchPassword(false);
      setIsButton(false);
    } else if (password == confirmPassword) {
      setCheckMatchPassword(true);
      if (checkValidPassword == true && checkMatchPassword == true) {
        setIsButton(true);
      }
    }
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  const handleButtonPopup = () => {
    setIsPopup(false);
    navigation.navigate('Login');
  };
  const handleCancelPopUp = () => {
    setIsPopup(false);
  };
  const handleButtonFooter = () => {
    setIsPopup(true);
  };
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
          />
          {checkValidPassword ? (
          (null)
          ) : (
            <Text style={styles.TextWrong}>
              Kata sandi harus berisi huruf besar, angka dan simbol (@ * # &)
            </Text>
          )}
          <NegatifCase value={password} text={'Anda harus mengisi bagian ini'}/>
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
          />
          {checkMatchPassword ? (
            (null)
          ) : (
            <Text style={styles.TextWrong}>
              Konfirmasi kata sandi tidak sesuai
            </Text>
          )}
          <NegatifCase value={confirmPassword} text={'Anda harus mengisi bagian ini'}/>
     
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
