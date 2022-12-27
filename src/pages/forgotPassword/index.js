//Import Library
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

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

const ForgotPassword = ({navigation}) => {
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
  useEffect(() => {
    if (email != null || email != undefined) {
      console.log(isButton);
      setIsButton(true);
    } else {
      setIsButton(false);
    }
  });
  const handleKirim = () => {
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
        value={'Permohonan Perubahan Password telah dikirim ke email anda'}
        ImagePopUp={ImageReceiveMessage}
        textButton={'Cek Email Sekarang'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Lupa Password ?'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ContainerImage}>
        <Image source={ImageGirlPassword} />
        <Text style={styles.TextStyle}>
          Masukkan email anda untuk membuat password baru
        </Text>
      </View>
      <View style={styles.FormStyle}>
        <View style={{flexDirection: 'row'}}>
          <TextDefault value={'Email '} />
          <RequirementSymbols />
        </View>
        <TextField
          placeholder={'Email'}
          value={email}
          onChangeText={handleCheckValidEmail}
        />
        {checkValidEmail ? (
          <Text style={styles.TextWrong}>Incorrect email format</Text>
        ) : (
          <Text> </Text>
        )}
      </View>

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
    marginTop: 87.5,
    width: '90%',
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
    alignItems: 'baseline',
    marginTop: 30,
  },
  ContainerKirim: {
    width: '90%',
    position: 'absolute',
    bottom: 20,
  },
  TextWrong: {
    color: 'red',
  },
});
