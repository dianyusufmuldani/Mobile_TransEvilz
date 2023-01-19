//Import Library
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';
import {
  setNominalTransferLocal,
  setTotalTransactionLocal,
} from '../../service/redux/reducer/transferSlice';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {setIsButtonTransferLocal} from '../../service/redux/reducer/globalSlice';

//Import Assets
import IconIndonesia from '../../../assets/transferCard/openmoji_flag-indonesia.svg';
import HeaderPagesBlue from '../../components/moleculs/headerPagesBlue';
import {
  formatCurrencyWithoutComma,
  formatCurrencyWithoutCommaAndIDR,
} from '../../helpers/formatter/currencyFormatter';

const TransferCard = ({navigation}) => {
  const stateTransfer = useSelector(state => state.transfer);
  const stateGlobal = useSelector(state => state.global);
  const dispatch = useDispatch();
  const handleSelanjutnya = () => {
    navigation.navigate('Transaction');
  };
  useEffect(() => {
    console.log('isi Nominal', stateTransfer.nominalLocal);

    if (stateTransfer.nominalLocal <= 0) {
      dispatch(setTotalTransactionLocal(0));
      dispatch(setIsButtonTransferLocal(false));
    } else if (stateTransfer.nominalLocal >= 10000) {
      dispatch(setIsButtonTransferLocal(true));
      dispatch(
        setTotalTransactionLocal(
          Number(stateTransfer.nominalLocal) + Number(stateTransfer.adminLocal),
        ),
      );
    } else if (stateTransfer.nominalLocal <= 10000) {
      dispatch(setIsButtonTransferLocal(false));
      dispatch(
        setTotalTransactionLocal(
          Number(stateTransfer.nominalLocal) + Number(stateTransfer.adminLocal),
        ),
      );
    } else if (stateTransfer.nominalLocal !== '') {
      dispatch(
        setTotalTransactionLocal(
          Number(stateTransfer.nominalLocal) + Number(stateTransfer.adminLocal),
        ),
      );
    } else {
      dispatch(setIsButtonTransferLocal(false));
    }
  }, [stateTransfer.nominalLocal]);

  return (
    <View style={styles.Container}>
      <HeaderPagesBlue
        hideShowTitle={true}
        value={'Masukkan Nominal'}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.ContainerBody}>
        <View style={styles.ContainerFieldCurrency}>
          <View style={styles.ContainerFlag}>
            <IconIndonesia />
          </View>
          <TextInput
            style={
              stateTransfer.nominalLocal === '' ||
              (stateTransfer.nominalLocal < 10000 &&
                stateTransfer.nominalLocal !== null)
                ? styles.ContainerTextInputFlagError
                : styles.ContainerTextInputFlag
            }
            placeholder={'IDR'}
            value={
              stateTransfer.nominalLocal === null
                ? 0
                : formatCurrencyWithoutCommaAndIDR(stateTransfer.nominalLocal)
            }
            onChangeText={value =>
              dispatch(setNominalTransferLocal(value.replace(/\D/g, '')))
            }
            keyboardType={'number-pad'}
          />
        </View>
        {stateTransfer.nominalLocal < 10000 &&
        stateTransfer.nominalLocal != '' &&
        stateTransfer.nominalLocal !== null ? (
          <NegatifCase
            value={''}
            text={'Minimal nominal transaksi Rp 10.000'}
          />
        ) : null}
        <NegatifCase
          value={stateTransfer.nominalLocal}
          text={'Anda harus mengisi bagian ini'}
        />

        <View style={styles.TextNilaiKurs}>
          <TextDescriptionOnBoarding value={'Biaya Admin'} />
          <TextDescriptionOnBoarding
            value={formatCurrencyWithoutComma(stateTransfer.adminLocal)}
          />
        </View>
      </View>

      <View style={styles.ContainerFooter}>
        <Text style={styles.TextDescriptionFooter}>
          Uang akan terkirim satu hari setelah proses berhasil jika dibayar
          sebelum pukul 23:00
        </Text>
        <Text style={styles.TextTitleFooter}>Total Transaksi</Text>
        <Text style={styles.TextCurrencyFooter}>
          {formatCurrencyWithoutComma(stateTransfer.totalTransactionLocal)}
        </Text>

        <View style={styles.ContainerSelanjutnya}>
          <BlueButton
            value={'Selanjutnya'}
            isButton={stateGlobal.isButtonTransferLocal}
            onPress={handleSelanjutnya}
          />
        </View>
      </View>
    </View>
  );
};

export default TransferCard;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    width: '90%',
    alignSelf: 'center',
  },
  ContainerFieldCurrency: {
    marginTop: 24,
    flexDirection: 'row',
  },
  TextNilaiKurs: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 24,
  },
  ContainerSelanjutnya: {
    width: '100%',

    alignSelf: 'center',
  },
  ContainerFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    elevation: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  TextDescriptionFooter: {
    fontSize: 10,
    fontWeight: '700',
    color: '#B8B5B5',
    marginBottom: 10,
  },
  TextTitleFooter: {
    fontSize: 14,
    fontWeight: '700',
    color: '#98A5D3',
    marginBottom: 10,
  },
  TextCurrencyFooter: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2ACA10',
    marginBottom: 10,
  },

  ContainerFlag: {
    backgroundColor: '#EAF3FF',
    height: 39,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerTextInputFlag: {
    backgroundColor: '#F1F7FF',
    height: 39,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '85%',
    borderWidth: 1,
    borderColor: '#F1F7FF',
  },
  ContainerTextInputFlagError: {
    backgroundColor: '#F1F7FF',
    height: 39,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '85%',
    borderWidth: 1,
    borderColor: 'red',
  },
});
