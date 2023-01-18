//Import Library
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
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
  setAccountNumber,
  setBankReceiver,
  setNameReceiver,
} from '../../service/redux/reducer/transferSlice';
import ImagePopupError from '../../../assets/popup/popup_error.png';
import { formatCurrencyWithoutComma } from '../../helpers/formatter/currencyFormatter';

const Transaction = ({navigation}) => {
  const stateGlobal = useSelector(state => state.global);
  const stateTransfer = useSelector(state => state.transfer);
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Mandiri'},
    {key: '2', value: 'BCA'},
    {key: '3', value: 'CIMB Niaga'},
    {key: '4', value: 'BRI'},
    {key: '5', value: 'BNI'},
  ];
  const handleSelanjutnya = () => {
    if (stateTransfer.accountNumber === '00000000') {
      dispatch(setIsPopupAccountNumberNotFound(true));
    } else {
      navigation.navigate('TransactionMethod');
    }
  };
  const handleReset = () => {
    // setSelected('');
    dispatch(setNameReceiver(null));
    dispatch(setAccountNumber(null));
  };
  useEffect(() => {
    console.log(selected);
    if (selected === null || selected === '') {
      dispatch(setIsButtonTransactionLocal(false));
    } else if (
      stateTransfer.nameReceiver === null ||
      stateTransfer.nameReceiver === ''
    ) {
      dispatch(setIsButtonTransactionLocal(false));
    } else if (
      stateTransfer.accountNumber === null ||
      stateTransfer.accountNumber === ''
    ) {
      dispatch(setIsButtonTransactionLocal(false));
    } else {
      dispatch(setBankReceiver(selected));
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
              <Text style={styles.TextFormatCurrencyCountry}>IDR</Text>
            </View>
            <Text style={styles.TextTotal}>Total Transaksi</Text>
            <Text style={styles.TextIDR}>
              {formatCurrencyWithoutComma(stateTransfer.totalTransactionLocal)}
            </Text>
          </View>

          <View style={styles.FormInputBank}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Pilih Bank '} />
              <RequirementSymbols />
            </View>
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
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
          </View>

          <View style={styles.FormInput}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Nama Penerima '} />
              <RequirementSymbols />
            </View>
            <TextField
              placeholder={'Masukkan Nama Penerima'}
              value={stateTransfer.nameReceiver}
              onChangeText={value => dispatch(setNameReceiver(value))}
              textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            />
            
          </View>

          <View style={styles.FormInput}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'No. Rekening'} />
              <RequirementSymbols />
            </View>
            <TextField
              placeholder={'Masukkan No. Rekening'}
              value={stateTransfer.accountNumber}
              onChangeText={value =>
                dispatch(setAccountNumber(value.replace(/\D/g, '')))
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

export default Transaction;
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
    // top:-135,
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
    // position: 'absolute',
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
