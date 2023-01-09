//Import Library
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  BackHandler,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';

//Import Component
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import TextDefault from '../../components/atoms/textDefault';
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';
import HeaderPages from '../../components/moleculs/headerPages';

//Import Assets
import ImageMan from '../../../assets/registration/Man_logging.png';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {setIsButtonRegistration} from '../../service/redux/reducer/globalSlice';

const Registration = ({navigation}) => {
  const [country, setCountry] = React.useState('');
  const [noHp, setNoHp] = useState(null);
  const [codeRegion, setCodeRegion] = useState('+62');
  const [showCountry, setShowCountry] = useState(false);
  const [checkNumberRegister, setCheckNumberRegister] = useState(null);
  const [numberRegistered, setNumberRegistered] = useState(null);
  const dispatch = useDispatch();

  const stateGlobal = useSelector(state => state.global);

  const backAction = () => {
    BackHandler.removeEventListener();
    return true;
  };
  const fullNoHp = codeRegion + noHp;
  useEffect(() => {
    // if (country == '' || country == undefined) {
    //   dispatch(setIsButtonRegistration(false));
    // }
    if (noHp == '' || noHp == undefined) {
      dispatch(setIsButtonRegistration(false));
      setCheckNumberRegister(true);
    } else {
      dispatch(setIsButtonRegistration(true));
    }
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });

  useEffect(() => {
    if (country == 'Indonesia') {
      setCodeRegion('+62');
      setShowCountry(!showCountry);
    } else if (country == 'Australia') {
      setCodeRegion('+61');
      setShowCountry(!showCountry);
    } else if (country == 'Japan') {
      setCodeRegion('+81');
      setShowCountry(!showCountry);
    } else if (country == 'Singapore') {
      setCodeRegion('+65');
      setShowCountry(!showCountry);
    } else if (country == 'United States of America') {
      setCodeRegion('+1');
      setShowCountry(!showCountry);
    }
  }, [country]);
  const handleKirim = () => {
    Keyboard.dismiss();
    if (fullNoHp == '+6285111222333') {
      console.log('INI');
      setNumberRegistered('');
      setCheckNumberRegister(true);
    } else if (fullNoHp == '+6281234567890') {
      dispatch(setIsButtonRegistration(false));
      navigation.navigate('OTP');
    } else if (noHp.length <= 12) {
      setCheckNumberRegister(false);
      console.log('ITU');
      setNumberRegistered(true);
    } else {
      console.log('INI ELSE');
    }
  };

  return (
    <>
      <ScrollView style={styles.Container}>
        <HeaderPages onPress={() => navigation.goBack()} />
        <View style={styles.ContainerBody}>
          <View style={styles.Title}>
            <Text style={styles.TextStyle}>Selamat Datang di TransEvilz</Text>
          </View>
          <View style={styles.Description}>
            <TextDescriptionOnBoarding
              value={
                'Jika anda ingin bergabung, lakukan pendaftaran terlebih dahulu'
              }
            />
          </View>
          <Image source={ImageMan} />
          <View style={styles.FormNoHP}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'No.Hp '} />
              <RequirementSymbols />
            </View>
            <View style={styles.ContainerNumberPhone}>
              <TextInput
                style={styles.TextInputCodeRegion}
                value={codeRegion}
                editable={false}
              />
              <TextInput
                keyboardType={'numeric'}
                value={noHp}
                onChangeText={text => {
                  setNoHp(text.replace(/\D/g, ''));
                }}
                style={styles.ContainerNumber}
                // editable={country == '' ? false : true}
                maxLength={20}
              />
            </View>
            <NegatifCase text={'Anda harus mengisi bagian ini'} value={noHp} />
            <NegatifCase
              text={'Format No.HP tidak sesuai'}
              value={checkNumberRegister}
            />
            <NegatifCase
              text={'No.hp sudah terdaftar'}
              value={numberRegistered}
            />

            <View style={{marginTop: 20}} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.BlueButton}>
        <BlueButton
          value={'Kirim'}
          onPress={handleKirim}
          isButton={stateGlobal.isButtonRegistration}
        />
      </View>
    </>
  );
};

export default Registration;
const styles = StyleSheet.create({
  Container: {
    flex: 1,

    backgroundColor: Colours.background,
  },
  ContainerBody: {
    width: '90%',
    alignSelf: 'center',
  },
  TextStyle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2075F3',
    textAlign: 'center',
  },
  Title: {
    width: '70%',
    alignSelf: 'center',
  },
  Description: {
    width: 291,
    alignSelf: 'center',
  },
  FormNegara: {},
  FormNoHP: {
    width: '85%',
    marginTop: 41,
  },
  BlueButton: {
    width: '90%',
    bottom: 0,
    alignSelf: 'center',
  },
  ContainerNumberPhone: {
    flexDirection: 'row',
  },
  TextInputCodeRegion: {
    backgroundColor: '#EAF3FF',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '15%',
    color: '#2075F3',
    paddingLeft: 10,
  },
  ContainerNumber: {
    backgroundColor: '#F1F7FF',
    width: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  ContainerSelectCountry: {
    width: '100%',
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    height: 50,
    justifyContent: 'space-between',
    color: '#000000',
  },
  IconCountry: {
    marginRight: 10,
  },
  ContainerCodeCountry: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2075F3',
    paddingRight: 10,
  },
  IconUpDownDropdown: {
    position: 'absolute',
    right: 20,
    bottom: 25,
  },
});
