//Import Library
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

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

const CreateNewPassword = ({navigation}) => {
  const [password, setPassword] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  useEffect(() => {
    if (password != null || password != undefined) {
      console.log(isButton);
      setIsButton(true);
    } else {
      setIsButton(false);
    }
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
  return (
    <View style={styles.Container}>
      <PopUp
        visible={isPopup}
        onPressCancel={handleCancelPopUp}
        onPressButton={handleButtonPopup}
        value={'Password anda berhasil diperbarui'}
        ImagePopUp={ImageSuccess}
        textButton={'Login Sekarang'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Buat Password Baru'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ContainerBody}>
        <View style={styles.ContainerImage}>
          <Image source={ImageGirlPassword} />
          <Text style={styles.TextStyle}>
            Masukkan email anda untuk membuat password baru
          </Text>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Password Baru '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Password Baru'}
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Konfirmasi Password Baru '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword placeholder={'Konfirmasi Password Baru'} />
        </View>
      </View>
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
  ContainerBody: {
    alignItems: 'center',
  },
  ContainerImage: {
    marginTop: 0,
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
    alignSelf: 'center',
  },
});
