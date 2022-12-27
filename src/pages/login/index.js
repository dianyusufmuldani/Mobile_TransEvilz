//Import Library
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

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

//Import Assets
import ImageFingerprint from '../../../assets/login/Fingerprint.png';

const Login = ({navigation}) => {
  const [isButton, setIsButton] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
    setPassword(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };
  useEffect(() => {
    if (email == null) {
      setIsButton(false);
    } else if (password == null) {
      setIsButton(false);
    } else if (checkValidEmail == false && checkValidPassword == false) {
      setIsButton(true);
    }
    // else if(password!=null||password!=undefined){
    //   setIsButton(false);
    // }
    // else{
    //   console.log('isi ELSE', isButton);
    //   setIsButton(true)
    // }
  });
  const handleRegistrasi = () => {
    navigation.navigate('Registration');
  };
  const handleLogin = () => {
    navigation.navigate('Homepage');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerBody}>
        <View style={styles.ContainerHeader}>
          <TextTitleOnBoarding value={'Hallo!'} />
          {/* <Icon name='eye-outline'/> */}
        </View>
        <View style={styles.ContainerText}>
          <TextDescriptionOnBoarding value={'Sudah punya akun ? '} />
          <TextButton value={'Lakukan Registrasi'} onPress={handleRegistrasi} />
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
          />
          {checkValidEmail ? (
            <Text style={styles.TextWrong}>Incorrect email format</Text>
          ) : (
            <Text> </Text>
          )}
        </View>

        <View style={styles.FormLogin}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Kata sandi '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Password'}
            onChangeText={handleCheckValidPassword}
            value={password}
          />
          {checkValidPassword ? (
            <Text style={styles.TextWrong}>Incorrect password format</Text>
          ) : (
            <Text> </Text>
          )}
          <View style={{alignSelf: 'flex-end'}}>
            <TextButtonBlue
              value={'Lupa Kata sandi ?'}
              onPress={handleForgotPassword}
            />
          </View>
        </View>
      </View>
      <View style={styles.ButtonLogin}>
        <BlueButton value={'Login'} onPress={handleLogin} isButton={isButton} />
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    width: '90%',
    alignItems: 'center',
  },
  ContainerHeader: {
    marginTop: 36,
  },
  ContainerText: {
    flexDirection: 'row',
    marginBottom: 33,
  },
  FormLogin: {
    width: '90%',
    alignItems: 'baseline',
    marginTop: 30,
  },
  ButtonLogin: {
    width: '90%',
    position: 'absolute',
    bottom: 20,
  },
  TextWrong: {
    color: 'red',
  },
  ContainerImage: {
    width: '100%',
    height: 250,
  },
});
