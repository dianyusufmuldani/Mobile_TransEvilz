//Import Library
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {useSelector, useDispatch} from 'react-redux';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import BlueButton from '../../components/moleculs/blueButton';
import HeaderPages from '../../components/moleculs/headerPages';
import {setIsButtonMethodLocal} from '../../service/redux/reducer/globalSlice';

//Import Assets
import {Colours} from '../../helpers/colours';
import ImageBgTransaction from '../../../assets/transaction/bgTransaction.png';
import IconIndonesia from '../../../assets/registration/openmoji_flag-indonesia.svg';
import HeaderPagesBlue from '../../components/moleculs/headerPagesBlue';
import Singapore from '../../../assets/transferCard/openmoji_flag-singapore.png';
import UnitedStates from '../../../assets/transferCard/openmoji_flag-united-states.png';
import Australia from '../../../assets/transferCard/openmoji_flag-australia.png';
import Japan from '../../../assets/transferCard/openmoji_flag-japan.png';
import { formatCurrencyWithoutComma } from '../../helpers/formatter/currencyFormatter';

const TransactionMethodInternational = ({navigation}) => {
  const dispatch = useDispatch();
  const stateGlobal = useSelector(state => state.global);
  const stateTransfer = useSelector(state => state.transfer);
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Mandiri'},
    {key: '2', value: 'BCA'},
    {key: '3', value: 'CIMB Niaga'},
    {key: '4', value: 'BRI'},
    {key: '5', value: 'BNI'},
  ];
  useEffect(() => {
    if (selected === null || selected === '') {
      dispatch(setIsButtonMethodLocal(false));
    } else {
      dispatch(setIsButtonMethodLocal(true));
    }
  });

  return (
    <View style={styles.Container}>
      <HeaderPagesBlue
        value={'Akun Bank'}
        hideShowTitle={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ContainerBody}>
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
            {stateTransfer.countryDestination == 'USD' ?
                (<Image source={UnitedStates} style={{marginLeft:10}} />)
             : (null)}
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
            {formatCurrencyWithoutComma(stateTransfer.totalTransactionInternational)}
          </Text>
        </View>
        <TextDefault value={'Metode Pembayaran'} />

        <View style={styles.ContainerRadioButton}>
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
            search={false}
            dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
          />
        </View>
      </View>
      <View style={styles.ContainerSelanjutnya}>
        <BlueButton
          value={'Selanjutnya'}
          isButton={stateGlobal.isButtonMethodLocal}
          onPress={() => navigation.navigate('PIN')}
        />
      </View>
    </View>
  );
};

export default TransactionMethodInternational;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    alignSelf: 'center',
    width: '90%',
  },

  ContainerSelanjutnya: {
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  ContainerRadioButton: {
    marginTop: 20,
  },
  ContainerCountTransaction: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 115,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 10,
    // top:-135,
  },
  TextFormatCurrencyCountry: {
    color: '#3A3A3A',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
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
});
