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
import IconInfo from '../../../assets/createPIN/info.svg';
import ToastedSuccess from '../../components/moleculs/toastSuccess';
import { useDispatch, useSelector } from 'react-redux';
import { getNewPin } from '../../service/redux/reducer/pinSlice';

const CreateNewPin = ({navigation}) => {
  const dispatch=useDispatch()
  const stateUsers=useSelector(state=>state.users)
  const [pin, setPin] = useState(null);
  const [confirmPin, setConfirmPin] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isToastedSuccesPin, setIsToastedSuccessPin]=useState(false)

  const [checkMatchPin, setCheckMatchPin] = useState(false);

  useEffect(() => {
    console.log('pages create pin state users', stateUsers)
    if (pin === null || pin === '') {
      setIsButton(false);
      console.log('isi IF');
    } else if (confirmPin === null || confirmPin === '') {
      setIsButton(false);
      setCheckMatchPin(false);
    } else if (pin !== confirmPin) {
      setCheckMatchPin(true);
      setIsButton(false);
    } else if (pin === confirmPin) {
      setCheckMatchPin(false)
      setIsButton(true);
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
    // setIsPopup(true);
    const request={
      pin:pin
    }
    dispatch(getNewPin(request))
    setIsToastedSuccessPin(true)
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
        value={'Pin Evilz anda berhasil diperbarui'}
        ImagePopUp={ImageSuccess}
        textButton={'Masuk Sekarang'}
      />
      <ToastedSuccess visible={isToastedSuccesPin} onPressButton={()=>setIsToastedSuccessPin(false)} onPressModal={()=>setIsToastedSuccessPin(false)} textToasted={'Pin Evilz Berhasil disimpan'} height={40} width={'70%'}/>
      <HeaderPages
        hideShowTitle={true}
        value={'Buat Pin Evilz Baru'}
        onPress={() => navigation.goBack()}
        showBackButton={true}
      />
      <ScrollView style={styles.ContainerBody}>
        <View style={styles.Info}>
          <IconInfo />
          <View style={styles.ViewTextInfo}>
            <Text style={styles.TextInfo}>
              Pin Evilz ini digunakan untuk proses pembayaran/transfer pada
              TransEvilz. Gunakan kombinasi 6 angka tanpa huruf dan simbol
            </Text>
          </View>
        </View>
        <View style={styles.ContainerImage}>
          <Image source={ImageGirlPassword} />
          <Text style={styles.TextStyle}>Buat pin evilz yang baru</Text>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Pin Evilz Baru '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Pin evilz baru'}
            value={pin}
            onChangeText={value => setPin(value.replace(/\D/g, ''))}
            maxLength={6}
            keyboardType={'numeric'}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
          />

        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Konfirmasi Pin Evilz Baru '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Konfirmasi pin evilz baru'}
            value={confirmPin}
            onChangeText={value => setConfirmPin(value.replace(/\D/g, ''))}
            maxLength={6}
            validValue={checkMatchPin}
            keyboardType={'numeric'}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            textNegatifCase3={'Konfirmasi pin tidak sama'}
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

export default CreateNewPin;
const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: Colours.background,
  },
  ContainerBody: {},
  ContainerImage: {
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
  Info: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },
  TextInfo: {
    textAlign: 'left',
    color: '#7F8181',
    fontSize: 12,
    fontWeight: '500',
  },
  ViewTextInfo: {
    paddingRight: 20,
    paddingLeft: 6,
  },
});
