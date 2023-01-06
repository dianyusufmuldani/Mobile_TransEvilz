//Import Library
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import { useSelector, useDispatch } from 'react-redux';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import BlueButton from '../../components/moleculs/blueButton';
import HeaderPages from '../../components/moleculs/headerPages';
import { setIsButtonMethodLocal } from '../../service/redux/reducer/globalSlice';

//Import Assets
import {Colours} from '../../helpers/colours';
import ImageBgTransaction from '../../../assets/transaction/bgTransaction.png'
import IconIndonesia from '../../../assets/registration/openmoji_flag-indonesia.svg'


const TransactionMethod = ({navigation}) => {
  const dispatch=useDispatch()
  const stateGlobal=useSelector(state=>state.global)
  const stateTransfer=useSelector(state=>state.transfer)
  const [bankAccount, setBankAccount] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [debitCard, setDebitCard] = useState(false);
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Mandiri'},
    {key: '2', value: 'BCA'},
    {key: '3', value: 'CIMB Niaga'},
    {key: '4', value: 'BRI'},
    {key: '5', value: 'BNI'},
  ];
  useEffect(()=>{
    if(selected==null||selected==''){
      dispatch(setIsButtonMethodLocal(false))
    }
    else{
      dispatch(setIsButtonMethodLocal(true))
    }
  })
  const handleButtonBankAccount = () => {
    setBankAccount(true);
    setCreditCard(false);
    setDebitCard(false);
  };
  const handleButtonCreditCard = () => {
    setCreditCard(true);
    setBankAccount(false);
    setDebitCard(false);
  };
  const handleButtonDebitCard = () => {
    setDebitCard(true);
    setBankAccount(false);
    setCreditCard(false);
  };
  return (
    <View style={styles.Container}>
      <HeaderPages
        value={'Akun Bank'}
        hideShowTitle={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ContainerBody}>
      <Image source={ImageBgTransaction} style={{top:0, position:'absolute'}}/>
        <View style={styles.ContainerCountTransaction}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <IconIndonesia/>
          <Text style={styles.TextFormatCurrencyCountry}>IDR ke IDR</Text>
          </View>
          <Text style={styles.TextTotal}>Total Transaksi</Text>
          <Text style={styles.TextIDR}>{stateTransfer.totalTransactionLocal} IDR</Text>
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

export default TransactionMethod;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    alignSelf: 'center',
    width: '90%',
  },

  TextTotal: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  TextIDR: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
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
    marginBottom:50
    // top:-135,
  },
  TextFormatCurrencyCountry:{
    color:'#3A3A3A',
    fontSize:12,
    fontWeight:'700',
    marginLeft:10
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
