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
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');

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
import {formatCurrencyWithoutComma} from '../../helpers/formatter/currencyFormatter';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {
  getReceiverLocal,
  setAccountNumber,
  setBankReceiver,
  setNameReceiver,
} from '../../service/redux/reducer/transferSlice';

//Import Assets
import ImageBgTransaction from '../../../assets/transaction/bgTransaction.png';
import IconIndonesia from '../../../assets/registration/openmoji_flag-indonesia.svg';
import ImagePopupError from '../../../assets/popup/popup_error.png';

const Transaction = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const stateGlobal = useSelector(state => state.global);
  const stateTransfer = useSelector(state => state.transfer);
  const dispatch = useDispatch();

  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '111', value: 'Mandiri'},
    {key: '222', value: 'BCA'},
    {key: '333', value: 'CIMB Niaga'},
    {key: '444', value: 'BRI'},
    {key: '555', value: 'BNI'},
  ];
  const handleSelanjutnya = () => {
    if (stateTransfer.accountNumber === '00000000') {
      dispatch(setIsPopupAccountNumberNotFound(true));
    } else {
      navigation.navigate('TransactionMethod');
    }
  };
  const handleReset = () => {
    dispatch(setAccountNumber(null));
  };
  useEffect(() => {
    console.log(stateTransfer);
    console.log(selected);
    console.log(
      'pages transaction, account number',
      stateTransfer.accountNumber,
    );
    if (selected === null || selected === '') {
      dispatch(setBankReceiver(selected));
      dispatch(setIsButtonTransactionLocal(false));
    } else if (
      stateTransfer.accountNumber === null ||
      stateTransfer.accountNumber === ''
    ) {
      dispatch(setBankReceiver(selected));
      dispatch(setIsButtonTransactionLocal(false));
    } else if (stateTransfer.nameReceiver === 404) {
      dispatch(setBankReceiver(selected));
      dispatch(setIsButtonTransactionLocal(false));
    } else {
      dispatch(setBankReceiver(selected));
      dispatch(setIsButtonTransactionLocal(true));
    }
  }, [stateTransfer.accountNumber, stateTransfer.nameReceiver, selected]);

  useEffect(() => {
    if (stateTransfer.accountNumber !== null || stateTransfer.bankReceiver) {
      const request = {
        bank_code: stateTransfer.bankReceiver,
        no_rekening: stateTransfer.accountNumber,
      };
      dispatch(getReceiverLocal(request));
    }
  }, [stateTransfer.accountNumber, stateTransfer.bankReceiver]);
  return (
    <>
      <View style={styles.Container}>
        <HeaderPagesBlue
          value={'Bank account'}
          hideShowTitle={true}
          onPress={() => navigation.goBack()}
        />
        <PopUpError
          onPressButton={() => dispatch(setIsPopupAccountNumberNotFound(false))}
          ImagePopUp={ImagePopupError}
          visible={stateGlobal.isPopupAccountNumberNotFound}
          textButton={'Try again'}
          value={'Oops! No. Your destination account was not found'}
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
            <Text style={styles.TextTotal}>{t('Total transactions')}</Text>
            <Text style={styles.TextIDR}>
              {formatCurrencyWithoutComma(stateTransfer.totalTransactionLocal)}
            </Text>
          </View>

          <View style={styles.FormInputBank}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'Choose a bank'} />
              <RequirementSymbols />
            </View>
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="id"
              boxStyles={{
                backgroundColor: '#F1F7FF',
                borderWidth: 0,
                width: '100%',
              }}
              placeholder={t('Choose a bank')}
              inputStyles={{marginLeft: -15}}
              search={false}
              dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
            />
          </View>
          <View style={styles.FormInput}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={'No. Account'} />
              <RequirementSymbols />
            </View>
            <TextField
              placeholder={'Enter No. Account'}
              value={stateTransfer.accountNumber}
              onChangeText={value =>
                dispatch(setAccountNumber(value.replace(/\D/g, '')))
              }
              keyboardType={'numeric'}
              textNegatifCaseBlank={'You must fill in this section'}
              isNegatifCase1={
                stateTransfer.nameReceiver === 404 &&
                stateTransfer.accountNumber !== '' &&
                stateTransfer.accountNumber !== null
              }
              textNegatifCase1={'The account number you entered was not found'}
            />
          </View>
          <View style={styles.FormInput}>
            <View style={{flexDirection: 'row'}}>
              <TextDefault value={`Recipient's name`} />
              <RequirementSymbols />
            </View>
            <TextField
              placeholder={`Enter Recipient's Name`}
              value={
                stateTransfer.nameReceiver !== 404 ||
                stateTransfer.nameReceiver !== null
                  ? stateTransfer.nameReceiver
                  : null
              }
              editable={false}
              textNegatifCaseBlank={'You must fill in this section'}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.ContainerButton}>
        <TouchableOpacity style={styles.ButtonAturUlang} onPress={handleReset}>
          <Text style={styles.TextAturUlang}>{t('Reset')}</Text>
        </TouchableOpacity>
        <View style={styles.ButtonSelanjutnya}>
          <BlueButton
            value={'Next'}
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
