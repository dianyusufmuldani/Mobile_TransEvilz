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
import {useDispatch, useSelector} from 'react-redux';
import CountDown from 'react-native-countdown-fixed';
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import TextButton from '../../components/atoms/textButton';
import {Colours} from '../../helpers/colours';
import NumberKeyboard from '../../components/moleculs/numberKeyboard';
import PopUpError from '../../components/organism/popupError';
import {
  setIsLoading,
  setIsPopupIncorectOtp,
  setIsPopupRequestTimedOut,
} from '../../service/redux/reducer/globalSlice';
import {getOtp, setOtpSlice} from '../../service/redux/reducer/otpSlice';

//Import Assets
import CancelKeyboardOtp from '../../../assets/otp/cancel_keyboard_otp.svg';
import ImagePopupError from '../../../assets/popup/popup_error.png';
import ImageTimerRuns from '../../../assets/popup/timer_runs.png';

const OTP = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [otp, setOtp] = useState([]);
  const [allOtp, setAllOtp] = useState(null);
  const [iSRunning, setIsRunning] = useState(true);
  const [resetCountDown, setResetCountDown] = useState(Math.random());
  const dispatch = useDispatch();
  const stateGlobal = useSelector(state => state.global);
  const stateOtp = useSelector(state => state.otp);

  useEffect(() => {
    setAllOtp(otp.join(''));
  }, [otp]);

  useEffect(() => {
    if (otp.length === 6) {
      console.log('MASUK', allOtp);
      dispatch(setIsLoading(true));
      const request = {
        otp_code: Number(allOtp),
      };
      dispatch(getOtp(request));
    } else if (otp.length >= 7) {
      setOtp(otp.slice(0, -1));
      console.log('hapus ini');
    }
  }, [allOtp]);

  useEffect(() => {
    console.log('CEK', stateOtp);
    if (stateOtp.data === null || stateOtp.data === '') {
      console.log('IF pertama');
    } else if (stateOtp.data !== null || stateOtp.data !== undefined) {
      if (stateOtp.data === 200) {
        dispatch(setIsLoading(false));
        setIsRunning(false);
        dispatch(setIsPopupIncorectOtp(false));
        dispatch(setOtpSlice(null));
        navigation.navigate('FormRegistration');
        console.log('Sukses');
      } else if (stateOtp.data === 400) {
        dispatch(setIsLoading(false));
        dispatch(setIsPopupIncorectOtp(true));
        dispatch(setOtpSlice(null));
        console.log('Gagal');
      }
    } else {
      console.log('Awas aja gagal');
    }
  }, [stateOtp]);

  const handleDeleteOtp = item => {
    setOtp(otp.slice(0, -1));
  };
  const handleBack = () => {
    navigation.goBack();
    setIsRunning(false);
  };
  const handleSendAgain = () => {
    setIsRunning(true);
    setResetCountDown(Math.random());
  };
  const handleTryAgain = () => {
    setOtp([]);
    setAllOtp(null);
    dispatch(setOtpSlice(null));
    dispatch(setIsPopupIncorectOtp(false));
  };
  const handleTryAgainTimedOut = () => {
    setOtp([]);
    setAllOtp(null);
    dispatch(setOtpSlice(null));
    dispatch(setIsPopupRequestTimedOut(false));
  };
  return (
    <View style={styles.Container}>
      <PopUpError
        value={'Oops! The OTP code you entered is incorrect'}
        visible={stateGlobal.isPopupIncorectOtp}
        ImagePopUp={ImagePopupError}
        textButton={'Try again'}
        onPressButton={handleTryAgain}
      />
      <PopUpError
        visible={stateGlobal.isPopupRequestTimedOut}
        onPressButton={handleTryAgainTimedOut}
        ImagePopUp={ImageTimerRuns}
        value={'Oops! Your time is up'}
        textButton={'Try later'}
      />
      <HeaderPages onPress={handleBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.StyleTitle}>
          <Text style={styles.Title}>{t('OTP Code Verification')}</Text>
          <Text style={styles.Description}>
            {t(
              'Enter the verification code that was sent to the cellphone number that you previously registered',
            )}
          </Text>
        </View>

        <CountDown
          key={resetCountDown}
          until={60}
          onFinish={() => {
            setIsRunning(false);
            dispatch(setIsPopupRequestTimedOut(true));
          }}
          onPress={() => console.log('on Press')}
          size={12}
          digitTxtStyle={{color: '#2ACA10'}}
          digitStyle={{backgroundColor: 'transparent', marginHorizontal: -5}}
          separatorStyle={{color: '#2ACA10'}}
          timeLabels={{m: null, s: null}}
          timeToShow={['M', 'S']}
          running={iSRunning}
          showSeparator
        />

        <View style={styles.ContainerContentOtp}>
          <TextInput
            placeholder={t('Enter the 6 digit OTP code')}
            value={allOtp}
            style={styles.TextInputContentOtp}
            editable={false}
            maxLength={6}
          />
        </View>
        <View style={styles.KirimUlang}>
          <TextDescriptionOnBoarding value={`Didn't get the OTP code?`} />
          {iSRunning == false ? (
            <TextButton value={'RESEND OTP CODE'} onPress={handleSendAgain} />
          ) : (
            <></>
          )}
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard
            value={1}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 1]);
                }
              }
            }}
          />
          <NumberKeyboard
            value={2}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 2]);
                }
              }
            }}
          />
          <NumberKeyboard
            value={3}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 3]);
                }
              }
            }}
          />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard
            value={4}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 4]);
                }
              }
            }}
          />
          <NumberKeyboard
            value={5}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 5]);
                }
              }
            }}
          />
          <NumberKeyboard
            value={6}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 6]);
                }
              }
            }}
          />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <NumberKeyboard
            value={7}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 7]);
                }
              }
            }}
          />
          <NumberKeyboard
            value={8}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 8]);
                }
              }
            }}
          />
          <NumberKeyboard
            value={9}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 9]);
                }
              }
            }}
          />
        </View>
        <View style={styles.ViewNumberKeyboard}>
          <View style={styles.ButtonKeyboardBlank} />
          <NumberKeyboard
            value={0}
            onPress={() => {
              if (iSRunning === false) {
              } else {
                {
                  setOtp([...otp, 0]);
                }
              }
            }}
          />
          <TouchableOpacity
            onPress={handleDeleteOtp}
            style={styles.IconCancelKeyboardOtp}>
            <CancelKeyboardOtp />
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
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: -28,
    top: 0,
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
  ButtonKeyboardBlank: {
    backgroundColor: 'transparent',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 27,
    marginBottom: 25,
  },
});
