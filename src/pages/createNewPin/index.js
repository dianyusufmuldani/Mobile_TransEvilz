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
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import BlueButton from '../../components/moleculs/blueButton';
import TextFieldPassword from '../../components/moleculs/textFieldPassword';
import {Colours} from '../../helpers/colours';
import HeaderPages from '../../components/moleculs/headerPages';
import PopUp from '../../components/organism/popup';
import ToastedSuccess from '../../components/moleculs/toastSuccess';
import {getNewPin} from '../../service/redux/reducer/pinSlice';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';

//Import Assets
import ImageGirlPassword from '../../../assets/forgotPassword/girl_tries_password.png';
import ImageSuccess from '../../../assets/popup/Completed_successfully.png';
import IconInfo from '../../../assets/createPIN/info.svg';

const CreateNewPin = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const stateUsers = useSelector(state => state.users);
  const [pin, setPin] = useState(null);
  const [confirmPin, setConfirmPin] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isToastedSuccesPin, setIsToastedSuccessPin] = useState(false);

  const [checkMatchPin, setCheckMatchPin] = useState(false);

  useEffect(() => {
    console.log('pages create pin state users', stateUsers);
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
      setCheckMatchPin(false);
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
    const request = {
      pin: pin,
    };
    dispatch(getNewPin(request));
    setIsToastedSuccessPin(true);
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
        value={'Your Evilz Pin has been updated successfully'}
        ImagePopUp={ImageSuccess}
        textButton={'Login Now'}
      />
      <ToastedSuccess
        visible={isToastedSuccesPin}
        onPressButton={() => setIsToastedSuccessPin(false)}
        onPressModal={() => setIsToastedSuccessPin(false)}
        textToasted={'Evilz Pin Saved successfully'}
        height={40}
        width={'70%'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Create a New Evilz Pin'}
        onPress={() => navigation.goBack()}
        showBackButton={true}
      />
      <ScrollView style={styles.ContainerBody}>
        <View style={styles.Info}>
          <IconInfo />
          <View style={styles.ViewTextInfo}>
            <Text style={styles.TextInfo}>
              {t(
                'This Evilz pin is used for the payment/transfer process on TransEvilz. Use a combination of 6 numbers without letters and symbols',
              )}
            </Text>
          </View>
        </View>
        <View style={styles.ContainerImage}>
          <Image source={ImageGirlPassword} />
          <Text style={styles.TextStyle}>{t('Create a new evilz pin')}</Text>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'New Evilz Pins'} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'New Evilz Pins'}
            value={pin}
            onChangeText={value => setPin(value.replace(/\D/g, ''))}
            maxLength={6}
            keyboardType={'numeric'}
            textNegatifCaseBlank={'You must fill in this section'}
          />
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'New Evilz Pin Confirmation'} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'New Evilz Pin Confirmation'}
            value={confirmPin}
            onChangeText={value => setConfirmPin(value.replace(/\D/g, ''))}
            maxLength={6}
            validValue={checkMatchPin}
            keyboardType={'numeric'}
            textNegatifCaseBlank={'You must fill in this section'}
            textNegatifCase3={'Pin confirmation is not the same'}
          />
        </View>
      </ScrollView>
      <View style={styles.ContainerKirim}>
        <BlueButton
          value={'Send'}
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
