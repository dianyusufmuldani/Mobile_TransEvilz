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
  TouchableOpacity,
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
import IconIndonesia from '../../../assets/registration/openmoji_flag-indonesia.svg';
import IconAustralia from '../../../assets/registration/openmoji_flag-australia.svg';
import IconJapan from '../../../assets/registration/openmoji_flag-japan.svg';
import IconSingapore from '../../../assets/registration/openmoji_flag-singapore.svg';
import IconUS from '../../../assets/registration/openmoji_flag-united-states.svg';
import IconDownDropdown from '../../../assets/registration/down_dropdown.svg';
import IconUpDropdown from '../../../assets/registration/up_dropdown.svg';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {setIsButtonRegistration} from '../../service/redux/reducer/globalSlice';

const Registration = ({navigation}) => {
  const [country, setCountry] = React.useState('');
  const [noHp, setNoHp] = useState(null);
  const [codeRegion, setCodeRegion] = useState(null);
  const [showCountry, setShowCountry] = useState(false);
  const [checkNumberRegister, setCheckNumberRegister] = useState(null);
  const dispatch = useDispatch();
  const stateUsers = useSelector(state => state.users);
  const stateGlobal = useSelector(state => state.global);

  const backAction = () => {
    BackHandler.removeEventListener();
    return true;
  };
  const fullNoHp = codeRegion + noHp;
  useEffect(() => {
    if (country == '' || country == undefined) {
      dispatch(setIsButtonRegistration(false));
    } else if (noHp == '' || noHp == undefined) {
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
    if (fullNoHp != '+6281234567890') {
      setCheckNumberRegister(false);
    } else {
      dispatch(setIsButtonRegistration(false));
      navigation.navigate('OTP');
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
          <View style={styles.FormNegara}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Negara '} />
              <RequirementSymbols />
            </View>

            <TouchableOpacity onPress={() => setShowCountry(!showCountry)}>
              <TextInput
                placeholder="Pilih negara"
                style={styles.ContainerSelectCountry}
                editable={false}
                value={country}
              />
              <View style={styles.IconUpDownDropdown}>
                {showCountry == false ? (
                  <View>
                    <IconDownDropdown />
                  </View>
                ) : (
                  <View>
                    <IconUpDropdown />
                  </View>
                )}
              </View>
            </TouchableOpacity>
            {showCountry == true ? (
              <ScrollView style={{height: 150}} nestedScrollEnabled={true}>
                <TouchableOpacity
                  style={styles.ContainerSelectCountry}
                  onPress={() => setCountry('Australia')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.IconCountry}>
                      <IconAustralia />
                    </View>
                    <Text>Australia</Text>
                  </View>
                  <Text style={styles.ContainerCodeCountry}>+61</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.ContainerSelectCountry}
                  onPress={() => setCountry('Japan')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.IconCountry}>
                      <IconJapan />
                    </View>
                    <Text>Japan</Text>
                  </View>
                  <Text style={styles.ContainerCodeCountry}>+81</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.ContainerSelectCountry}
                  onPress={() => setCountry('Indonesia')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.IconCountry}>
                      <IconIndonesia />
                    </View>
                    <Text>Indonesia</Text>
                  </View>
                  <Text style={styles.ContainerCodeCountry}>+62</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.ContainerSelectCountry}
                  onPress={() => setCountry('Singapore')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.IconCountry}>
                      <IconSingapore />
                    </View>
                    <Text>Singapore</Text>
                  </View>
                  <Text style={styles.ContainerCodeCountry}>+62</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.ContainerSelectCountry}
                  onPress={() => setCountry('United States of America')}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.IconCountry}>
                      <IconUS />
                    </View>
                    <Text>United States of America</Text>
                  </View>
                  <Text style={styles.ContainerCodeCountry}>+62</Text>
                </TouchableOpacity>
              </ScrollView>
            ) : null}
          </View>

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
                editable={country == '' ? false : true}
                maxLength={20}
              />
            </View>
            <NegatifCase text={'Anda harus mengisi bagian ini'} value={noHp} />
            <NegatifCase
              text={'Format No.HP tidak sesuai'}
              value={checkNumberRegister}
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
