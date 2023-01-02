//Import Library
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextDefault from '../../components/atoms/textDefault';
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import TextFieldPassword from '../../components/moleculs/textFieldPassword';
import BlueButton from '../../components/moleculs/blueButton';
import PopUp from '../../components/organism/popup';
import {Colours} from '../../helpers/colours';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {setIsPopupCreatePinSuccess} from '../../service/redux/reducer/globalSlice';

//Import Assets
import IconInfo from '../../../assets/createPIN/info.svg';
import ImageSuccess from '../../../assets/popup/Completed_successfully.png';

const CreatePIN = ({navigation}) => {
  const [pin, setPin] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [confirmPin, setConfirmPin] = useState(null);
  const stateGlobal = useSelector(state=>state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pin == null || pin == undefined) {

      setIsButton(false);
    } else if (confirmPin == null || confirmPin == undefined) {
      setIsButton(false);
    } else if (pin == '' || confirmPin == '') {
      setIsButton(false);
    } else if (pin.length == 6) {
      if (pin == confirmPin) {
        setIsButton(true);
      } else {
        setIsButton(false);
      }
    } else {
      setIsButton(false);
    }
  });
  const handleKirim = () => {
    dispatch(setIsPopupCreatePinSuccess(true));

  };
  const handleCancelPopUp = () => {
    dispatch(setIsPopupCreatePinSuccess(false));

  };
  const handleLanjutkanLogin = () => {
    dispatch(setIsPopupCreatePinSuccess(false));

    navigation.navigate('Login');
  };
  return (
    <View style={styles.Container}>
      <PopUp
        visible={stateGlobal.isPopupCreatePinSuccess}
        onPressCancel={handleCancelPopUp}
        ImagePopUp={ImageSuccess}
        value={
          'Yeay! Anda memiliki akun baru. Selanjutnya lakukan Login di TransEvilz'
        }
        textButton={'Lanjutkan Login'}
        onPressButton={handleLanjutkanLogin}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Membuat Pin Evliz'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.Body}>
        <View style={styles.Info}>
          <IconInfo />
          <View style={styles.ViewTextInfo}>
            <Text style={styles.TextInfo}>
              Pin Evilz ini digunakan untuk proses pembayaran/transfer pada
              TransEvilz. Gunakan kombinasi 6 angka tanpa huruf dan simbol
            </Text>
          </View>
        </View>
        <View style={styles.FormTextInput}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Buat Pin Evilz '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Masukkan 6 digit Pin'}
            value={pin}
            onChangeText={value => setPin(value)}
            maxLength={6}
            keyboardType={'numeric'}
          />
          <NegatifCase text={'Anda harus mengisi bagian ini'} value={pin} />
        </View>
        <View style={styles.FormTextInput}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Konfirmasi Pin Evilz '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Masukkan 6 digit Pin yang telah dibuat'}
            onChangeText={value => setConfirmPin(value)}
            maxLength={6}
            keyboardType={'numeric'}
            value={confirmPin}
          />
          <NegatifCase
            text={'Anda harus mengisi bagian ini'}
            value={confirmPin}
          />
          {pin == confirmPin || confirmPin == null ||confirmPin==''?
          (null) :
            (<NegatifCase text={'Pin tidak sama'} value={''} />)
          }
        </View>
      </View>
      <View style={styles.ButtonKirim}>
        <BlueButton value={'Kirim'} onPress={handleKirim} isButton={isButton} />
      </View>
    </View>
  );
};

export default CreatePIN;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  Body: {
    alignItems: 'center',
  },
  Info: {
    flexDirection: 'row',
    width: '85%',
    marginTop: 40.5,
    marginBottom: 25,
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
  FormTextInput: {
    width: '90%',
    alignItems: 'baseline',
    marginTop: 24,
  },
  ButtonKirim: {
    width: '90%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
