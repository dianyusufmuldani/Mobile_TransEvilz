//Import Library
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {useSelector, useDispatch} from 'react-redux';

//Import Component
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import TextDefault from '../../components/atoms/textDefault';
import BlueButton from '../../components/moleculs/blueButton';
import HeaderPagesBlue from '../../components/moleculs/headerPagesBlue';
import TextField from '../../components/moleculs/textField';
import {Colours} from '../../helpers/colours';
import {
  setIsButtonTransactionLocal,
  setIsPopupAccountNumberNotFound,
} from '../../service/redux/reducer/globalSlice';
import PopUpError from '../../components/organism/popupError';

//Import Assets
import ImageBgTransaction from '../../../assets/transaction/bgTransaction.png';
import IconIndonesia from '../../../assets/registration/openmoji_flag-indonesia.svg';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {
  setAccountNumberInternational,
  setBankReceiver,
  setBankReceiverInternational,
  setNameReceiverInternational,
  setSwiftCode,
} from '../../service/redux/reducer/transferSlice';
import ImagePopupError from '../../../assets/popup/popup_error.png';
import Singapore from '../../../assets/transferCard/openmoji_flag-singapore.png';
import UnitedStates from '../../../assets/transferCard/openmoji_flag-united-states.png';
import Australia from '../../../assets/transferCard/openmoji_flag-australia.png';
import Japan from '../../../assets/transferCard/openmoji_flag-japan.png';
import TextButtonBlue from '../../components/atoms/textButtonBlue';
import {formatCurrencyWithoutComma} from '../../helpers/formatter/currencyFormatter';

const TransactionInternational = ({navigation}) => {
  const stateGlobal = useSelector(state => state.global);
  const stateTransfer = useSelector(state => state.transfer);
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState('');
  const dataUS = [
    {key: '1', value: 'Bank Of America'},
    {key: '2', value: 'JPMorgan Chase,'},
    {key: '3', value: 'Wells Fargo'},
    {key: '4', value: 'Citigroup'},
    {key: '5', value: 'Goldman Sachs Group'},
  ];
  const dataSGD = [
    {key: '1', value: 'DBS Singapore'},
    {key: '2', value: 'UOB Singapore'},
    {key: '3', value: 'Citibank Singapore'},
    {key: '4', value: 'Maybank Singapore'},
    {key: '5', value: 'SBI Singapore'},
  ];
  const dataJPY = [
    {key: '1', value: 'Mizuho Bank'},
    {key: '2', value: 'Mizuho Corporate Bank'},
    {key: '3', value: 'Mizuho Trust & Banking Co'},
    {key: '4', value: 'Chiba Kogyo Bank'},
    {key: '5', value: 'Trust & Custody Services Bank'},
  ];
  const dataAUD = [
    {key: '1', value: 'Commonwealth Bank of Australia'},
    {key: '2', value: 'ANZ'},
    {key: '3', value: 'NAB Westpasck'},
    {key: '4', value: 'Bank of Queensland'},
  ];
  const handleSelanjutnya = () => {
    if (stateTransfer.accountNumberInternational == '00000000') {
      dispatch(setIsPopupAccountNumberNotFound(true));
    } else {
      navigation.navigate('TransactionMethodInternational');
    }
  };
  const handleReset = () => {
    setSelected('HELO');
    dispatch(setNameReceiverInternational(null));
    dispatch(setAccountNumberInternational(null));
    dispatch(setSwiftCode(null));
  };
  useEffect(() => {
    console.log(selected);
    if (selected == null || selected == '') {
      dispatch(setIsButtonTransactionLocal(false));
    } else if (
      stateTransfer.nameReceiverInternational == null ||
      stateTransfer.nameReceiverInternational == ''
    ) {
      dispatch(setIsButtonTransactionLocal(false));
    } else if (
      stateTransfer.accountNumberInternational == null ||
      stateTransfer.accountNumberInternational == ''
    ) {
      dispatch(setIsButtonTransactionLocal(false));
    } else if (
      stateTransfer.swiftCode == null ||
      stateTransfer.swiftCode == ''
    ) {
      dispatch(setIsButtonTransactionLocal(false));
    } else {
      dispatch(setBankReceiverInternational(selected));
      dispatch(setIsButtonTransactionLocal(true));
    }
  });
  return (
    <>
      <View style={styles.Container}>
        <HeaderPagesBlue
          value={'Akun Bank'}
          hideShowTitle={true}
          onPress={() => navigation.goBack()}
        />
        <PopUpError
          onPressButton={() => dispatch(setIsPopupAccountNumberNotFound(false))}
          ImagePopUp={ImagePopupError}
          visible={stateGlobal.isPopupAccountNumberNotFound}
          textButton={'Coba Lagi'}
          value={'Oops! No. Rekening tujuan anda tidak ditemukan'}
        />
        <ScrollView style={styles.ContainerBody}>
          <Image
            source={ImageBgTransaction}
            style={{top: 10, position: 'absolute'}}
          />
          <View style={styles.ContainerCountTransaction}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconIndonesia />
              <Text style={styles.TextFormatCurrencyCountry}>
                IDR ke {stateTransfer.countryDestination}
              </Text>
              {stateTransfer.countryDestination == 'USD' ? (
                <Image source={UnitedStates} style={{marginLeft: 10}} />
              ) : null}
              {stateTransfer.countryDestination == 'AUD' ? (
                <Image source={Australia} style={{marginLeft: 10}} />
              ) : null}
              {stateTransfer.countryDestination == 'JPY' ? (
                <Image source={Japan} style={{marginLeft: 10}} />
              ) : null}
              {stateTransfer.countryDestination == 'SGD' ? (
                <Image source={Singapore} style={{marginLeft: 10}} />
              ) : null}
            </View>
            <Text style={styles.TextTotal}>Total Transaksi</Text>
            <Text style={styles.TextIDR}>
              {formatCurrencyWithoutComma(
                stateTransfer.totalTransactionInternational,
              )}
            </Text>
          </View>

          <View style={styles.FormInputBank}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Pilih Bank '} />
              <RequirementSymbols />
            </View>
            {stateTransfer.countryDestination == 'USD' ? (
              <SelectList
                setSelected={val => setSelected(val)}
                data={dataUS}
                save="value"
                boxStyles={{
                  backgroundColor: '#F1F7FF',
                  borderWidth: 0,
                  width: '100%',
                }}
                placeholder="Pilih Bank"
                inputStyles={{marginLeft: -15}}
                search={false}
                dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
              />
            ) : null}
            {stateTransfer.countryDestination == 'SGD' ? (
              <SelectList
                setSelected={val => setSelected(val)}
                data={dataSGD}
                save="value"
                boxStyles={{
                  backgroundColor: '#F1F7FF',
                  borderWidth: 0,
                  width: '100%',
                }}
                placeholder="Pilih Bank"
                inputStyles={{marginLeft: -15}}
                search={false}
                dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
              />
            ) : null}
            {stateTransfer.countryDestination == 'JPY' ? (
              <SelectList
                setSelected={val => setSelected(val)}
                data={dataJPY}
                save="value"
                boxStyles={{
                  backgroundColor: '#F1F7FF',
                  borderWidth: 0,
                  width: '100%',
                }}
                placeholder="Pilih Bank"
                inputStyles={{marginLeft: -15}}
                search={false}
                dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
              />
            ) : null}
            {stateTransfer.countryDestination == 'AUD' ? (
              <SelectList
                setSelected={val => setSelected(val)}
                data={dataAUD}
                save="value"
                boxStyles={{
                  backgroundColor: '#F1F7FF',
                  borderWidth: 0,
                  width: '100%',
                }}
                placeholder="Pilih Bank"
                inputStyles={{marginLeft: -15}}
                search={false}
                dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
              />
            ) : null}
          </View>
          <View style={styles.FormInput}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Kode Swift '} />
              <RequirementSymbols />
            </View>
            <TextField
              placeholder={'Masukkan kode swift'}
              value={stateTransfer.swiftCode}
              onChangeText={value =>
                dispatch(setSwiftCode(value.replace(/\D/g, '')))
              }
              keyboardType={'numeric'}
              textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            />

            <TextButtonBlue
              value={'Silakan cek kode swift disini'}
              onPress={() =>
                Linking.openURL('https://www.transfez.com/swift-codes/')
              }
            />
          </View>
          <View style={styles.FormInput}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Nama Penerima '} />
              <RequirementSymbols />
            </View>
            <TextField
              placeholder={'Masukkan Nama Penerima'}
              value={stateTransfer.nameReceiverInternational}
              onChangeText={value =>
                dispatch(setNameReceiverInternational(value))
              }
              textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            />
          </View>

          <View style={styles.FormInput}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'No. Rekening '} />
              <RequirementSymbols />
            </View>
            <TextField
              placeholder={'Masukkan No. Rekening'}
              value={stateTransfer.accountNumberInternational}
              onChangeText={value =>
                dispatch(
                  setAccountNumberInternational(value.replace(/\D/g, '')),
                )
              }
              keyboardType={'numeric'}
              textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.ContainerButton}>
        <TouchableOpacity style={styles.ButtonAturUlang} onPress={handleReset}>
          <Text style={styles.TextAturUlang}>Atur Ulang</Text>
        </TouchableOpacity>
        <View style={styles.ButtonSelanjutnya}>
          <BlueButton
            value={'Selanjutnya'}
            isButton={stateGlobal.isButtonTransactionLocal}
            onPress={handleSelanjutnya}
          />
        </View>
      </View>
    </>
  );
};

export default TransactionInternational;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    width: '90%',
    alignSelf: 'center',
  },
  ContainerButtonMethod: {
    flexDirection: 'row',
    marginTop: 40,
  },
  ButtonMethod: {
    width: 171,
    height: 48,
    backgroundColor: '#2ACA10',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
  },
  ButtonMethodOff: {
    width: 171,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#2ACA10',
  },
  TextButtonMethodOff: {
    fontSize: 16,
    fontWeight: '700',
    color: '#C1C3C7',
  },
  TextButtonMethod: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  ContainerCountTransaction: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 115,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  TextTotal: {
    color: '#7A7A7A',
    fontSize: 14,
    fontWeight: '500',
  },
  TextIDR: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
  },
  FormInputBank: {
    marginTop: 60,
  },
  FormInput: {
    marginTop: 10,
  },
  ContainerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    height: 80,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    elevation: 20,
  },
  ButtonAturUlang: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DC3328',
    borderRadius: 8,
    height: 42,
  },
  ButtonSelanjutnya: {
    width: '45%',
  },
  TextAturUlang: {
    color: '#DC3328',
    fontSize: 16,
    fontWeight: '700',
  },
  TextFormatCurrencyCountry: {
    color: '#3A3A3A',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
  },
});
