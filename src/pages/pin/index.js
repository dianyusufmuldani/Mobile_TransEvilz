//Import Library
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import {useDispatch, useSelector} from 'react-redux';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import TextButton from '../../components/atoms/textButton';
import {Colours} from '../../helpers/colours';
import NumberKeyboard from '../../components/moleculs/numberKeyboard';
import PopUpError from '../../components/organism/popupError';
import {setIsPopupIncorectOtp, setIsPopupRequestTimedOut, setIsPopupPinInvalid} from '../../service/redux/reducer/globalSlice';

//Import Assets
import CancelKeyboardPin from '../../../assets/otp/cancel_keyboard_otp.svg';
import ImagePopupError from '../../../assets/popup/popup_error.png';
import ImageTimerRuns from '../../../assets/popup/timer_runs.png'
import TextButtonBlue from '../../components/atoms/textButtonBlue';

const PIN = ({navigation}) => {
  const [pin, setPin] = useState([]);
  const [allPin, setAllPin] = useState(null);


  const dispatch = useDispatch();
  const stateGlobal = useSelector(state => state.global);

  useEffect(() => {
    setAllPin(pin.join(''));
    const pinRegister = '111111';
    if (pin.length >= 7) {
      setPin(pin.slice(0, -1));
      console.log('hapus ini');
    } else if (pin.length == 6) {
      console.log('isi Regis', pinRegister);
      console.log('isi All OTP', allPin);
      console.log('isi All OTP', pin);
      if (allPin != pinRegister) {
        setPin([]);
        dispatch(setIsPopupPinInvalid(true))
      }
    } else if (allPin == pinRegister) {

    dispatch(setIsPopupPinInvalid(false))
      navigation.navigate('TransactionSuccess');
    }
  });
  const handleDeletePin = item => {
    setPin(pin.slice(0, -1));
  };
  const handleBack = () => {
    navigation.goBack();
 
  };
  const handleForgotPin = () => {
    
  };

  return (
    <View style={styles.Container}>

      <PopUpError visible={stateGlobal.isPopupPinInvalid} onPressButton={()=>dispatch(setIsPopupPinInvalid(false))} ImagePopUp={ImagePopupError} value={'Oops! Pin Evilz yang anda masukkan salah'} textButton={'Coba Lagi'}/>
      <HeaderPages onPress={handleBack} value={'Masukkan Pin Evilz'} hideShowTitle={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
       

       

        <View style={styles.ContainerContentPin}>
          <TextInput
            placeholder="Masukkan 6 digit Pin Evilz"
            value={allPin}
            style={styles.TextInputContentPin}
            editable={false}
            maxLength={6}
          />
        </View>
        <View style={styles.KirimUlang}>
         
       
            <TextButtonBlue
              value={'Lupa Pin Evilz ?'}
              onPress={handleForgotPin}
            />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard value={1} onPress={() => setPin([...pin, 1])} />
          <NumberKeyboard value={2} onPress={() => setPin([...pin, 2])} />
          <NumberKeyboard value={3} onPress={() => setPin([...pin, 3])} />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard value={4} onPress={() => setPin([...pin, 4])} />
          <NumberKeyboard value={5} onPress={() => setPin([...pin, 5])} />
          <NumberKeyboard value={6} onPress={() => setPin([...pin, 6])} />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard value={7} onPress={() => setPin([...pin, 7])} />
          <NumberKeyboard value={8} onPress={() => setPin([...pin, 8])} />
          <NumberKeyboard value={9} onPress={() => setPin([...pin, 9])} />
        </View>
        <View style={styles.ViewNumberKeyboard}>
        <View style={styles.ButtonKeyboardBlank}/>
          <NumberKeyboard value={0} onPress={() => setPin([...pin, 0])} />
          <TouchableOpacity onPress={handleDeletePin}>
            <CancelKeyboardPin style={styles.IconCancelKeyboardPin} />
          </TouchableOpacity>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default PIN;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.background,
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3A3A3A',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  StyleTitle: {
    width: '80%',
    alignSelf: 'center',
  },
  Description: {
    fontSize: 9,
    fontWeight: '400',
    textAlign: 'center',
  },

  KirimUlang: {
    flexDirection: 'row',
    marginBottom: 50,
    width:'90%',
    alignSelf:'center',
    justifyContent:'flex-end',
  
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  ViewNumberKeyboard: {
    flexDirection: 'row',
    marginTop: 10,
  },
  IconCancelKeyboardPin: {
    position: 'absolute',
    right: -70,
    top: 20,
  },
  ContainerContentPin: {
    width: '90%',
    height: 39,
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 130,
    marginBottom: 20,
  },
  TextInputContentPin: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
  },
  TextKirimUlang: {
    color: '#7A7A7A',
    fontSize: 12,
    fontWeight: '400',

  },
  ButtonKeyboardBlank:{
   
      backgroundColor: 'transparent',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      marginHorizontal: 27,
      marginBottom: 25,
  }
});
