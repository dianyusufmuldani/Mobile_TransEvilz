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
import {setIsPopupIncorectOtp, setIsPopupRequestTimedOut} from '../../service/redux/reducer/globalSlice';

//Import Assets
import CancelKeyboardOtp from '../../../assets/otp/cancel_keyboard_otp.svg';
import ImagePopupError from '../../../assets/popup/popup_error.png';
import ImageTimerRuns from '../../../assets/popup/timer_runs.png'

const OTP = ({navigation}) => {
  const [otp, setOtp] = useState([]);
  const [allOtp, setAllOtp] = useState(null);
  const refTimer = useRef();
  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = timerFlag => {
    setTimerEnd(timerFlag);
    console.log('Timeout', timerEnd);
    dispatch(setIsPopupRequestTimedOut(true))
  };
  const dispatch = useDispatch();
  const stateGlobal = useSelector(state => state.global);

  useEffect(() => {
    setAllOtp(otp.join(''));
    const otpRegister = '000000';
    if (otp.length >= 7) {
      setOtp(otp.slice(0, -1));
      console.log('hapus ini');
    } else if (otp.length == 6) {
      console.log('isi Regis', otpRegister);
      console.log('isi All OTP', allOtp);
      console.log('isi All OTP', otp);
      if (allOtp != otpRegister) {
        dispatch(setIsPopupIncorectOtp(true));
        setOtp([]);
      }
    } else if (allOtp == otpRegister) {
      setTimerEnd(true);
      dispatch(setIsPopupIncorectOtp(false));
      navigation.navigate('FormRegistration');
    }
  });
  const handleDeleteOtp = item => {
    setOtp(otp.slice(0, -1));
  };
  const handleBack = () => {
    navigation.goBack();
    setTimerEnd(true);
  };
  const handleSendAgain = () => {
    refTimer.current.resetTimer();
    setTimerEnd(false);
  };
  const handleTryAgain = () => {
    dispatch(setIsPopupIncorectOtp(false));
  };
  return (
    <View style={styles.Container}>
      <PopUpError
        value={'Oops! Kode OTP yang anda masukkan salah'}
        visible={stateGlobal.isPopupIncorectOtp}
        ImagePopUp={ImagePopupError}
        textButton={'Coba Lagi'}
        onPressButton={handleTryAgain}
      />
      <PopUpError visible={stateGlobal.isPopupRequestTimedOut} onPressButton={()=>dispatch(setIsPopupRequestTimedOut(false))} ImagePopUp={ImageTimerRuns} value={'Oops! Waktu anda Habis'} textButton={'Coba Nanti'}/>
      <HeaderPages onPress={handleBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.StyleTitle}>
          <Text style={styles.Title}>Verifikasi Kode OTP</Text>
          <Text style={styles.Description}>
            Masukkan kode verifikasi yang telah dikirim pada No.Hp yang telah
            anda daftarkan sebelumnya
          </Text>
        </View>

        <CountDownTimer
          ref={refTimer}
          timestamp={60}
          timerCallback={timerCallbackFunc}
          containerStyle={{
            height: 56,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
            backgroundColor: 'transparent',
          }}
          textStyle={{
            fontSize: 12,
            color: '#2ACA10',
            fontWeight: '700',
            letterSpacing: 0.25,
            paddingHorizontal: 30,
          }}
        />

        <View style={styles.ContainerContentOtp}>
          <TextInput
            placeholder="Masukkan 6 digit kode OTP"
            value={allOtp}
            style={styles.TextInputContentOtp}
            editable={false}
            maxLength={6}
          />
        </View>
        <View style={styles.KirimUlang}>
          <TextDescriptionOnBoarding value={'Belum dapat kode OTP? '} />
          {timerEnd == true ? (
            <TextButton
              value={'KIRIM ULANG KODE OTP'}
              onPress={handleSendAgain}
            />
          ) : (
            <></>
          )}
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard value={1} onPress={() => setOtp([...otp, 1])} />
          <NumberKeyboard value={2} onPress={() => setOtp([...otp, 2])} />
          <NumberKeyboard value={3} onPress={() => setOtp([...otp, 3])} />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard value={4} onPress={() => setOtp([...otp, 4])} />
          <NumberKeyboard value={5} onPress={() => setOtp([...otp, 5])} />
          <NumberKeyboard value={6} onPress={() => setOtp([...otp, 6])} />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard value={7} onPress={() => setOtp([...otp, 7])} />
          <NumberKeyboard value={8} onPress={() => setOtp([...otp, 8])} />
          <NumberKeyboard value={9} onPress={() => setOtp([...otp, 9])} />
        </View>
        <View style={styles.ViewNumberKeyboard}>
        <View style={styles.ButtonKeyboardBlank}/>
          <NumberKeyboard value={0} onPress={() => setOtp([...otp, 0])} />
          <TouchableOpacity onPress={handleDeleteOtp}>
            <CancelKeyboardOtp style={styles.IconCancelKeyboardOtp} />
          </TouchableOpacity>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default OTP;
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
    alignSelf: 'center',
    marginBottom: 20,
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
  IconCancelKeyboardOtp: {
    position: 'absolute',
    right: -70,
    top: 20,
  },
  ContainerContentOtp: {
    width: '90%',
    height: 39,
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  TextInputContentOtp: {
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
