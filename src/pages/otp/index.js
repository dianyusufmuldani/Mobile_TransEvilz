//Import Library
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import TextButton from '../../components/atoms/textButton';
import {Colours} from '../../helpers/colours';
import NumberKeyboard from '../../components/moleculs/numberKeyboard';

//Import Assets
import CancelKeyboardOtp from '../../../assets/otp/cancel_keyboard_otp.svg';

const OTP = ({navigation}) => {
  const [otp, setOtp] = useState([]);
  const [allOtp, setAllOtp] = useState(null);
  const refTimer = useRef();

  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = timerFlag => {
    setTimerEnd(timerFlag);
    console.log('Timeout', timerEnd);
  };

  useEffect(() => {
    setAllOtp(otp.join(''));
    console.log('isi', otp);
    console.log('isi All OTP', allOtp);
    console.log('Isi Timer', timerEnd);
    if (otp.length >= 7) {
      setOtp(otp.slice(0, -1));
      console.log('hapus ini');
    } else if (otp.length == 6) {
      setTimerEnd(true);
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
  return (
    <View style={styles.Container}>
      <HeaderPages onPress={handleBack} />
      <View style={styles.StyleTitle}>
        <Text style={styles.Title}>Verifikasi Kode OTP</Text>
        <Text style={styles.Description}>
          Masukkan kode verifikasi yang telah dikirim pada No.Hp yang telah anda
          daftarkan sebelumnya
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
        />
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
        <NumberKeyboard value={0} onPress={() => setOtp([...otp, 0])} />
        <TouchableOpacity onPress={handleDeleteOtp}>
          <CancelKeyboardOtp style={styles.IconCancelKeyboardOtp} />
        </TouchableOpacity>
      </View>

      <View style={styles.KirimUlang}>
        <TextDescriptionOnBoarding value={'Belum dapat kode OTP? '} />
        {timerEnd == true ? (
          <TextButton value={'KIRIM ULANG KODE OTP'} />
        ) : (
          <Text style={styles.TextKirimUlang}>KIRIM ULANG KODE OTP</Text>
        )}
      </View>
    </View>
  );
};

export default OTP;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.background,
    // backgroundColor:'red'
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7F8181',
    textAlign: 'center',
  },
  StyleTitle: {
    width: 306,
  },
  Description: {
    fontSize: 9,
    fontWeight: '400',
    textAlign: 'center',
  },

  KirimUlang: {
    flexDirection: 'row',
    marginTop: 40,
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
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  TextInputContentOtp: {
    textAlign: 'center',
    fontSize: 18,
  },
  TextKirimUlang: {
    color: '#7A7A7A',
    fontSize: 12,
    fontWeight: '400',
  },
});
