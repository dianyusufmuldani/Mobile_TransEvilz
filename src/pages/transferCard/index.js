//Import Library
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency"


//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextFieldCurrency from '../../components/moleculs/textFieldCurrency';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';
import { setNominalTransferLocal, setTotalTransactionLocal } from '../../service/redux/reducer/transferSlice';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import { setIsButtonTransferLocal } from '../../service/redux/reducer/globalSlice';

//Import Assets
import IconIndonesia from '../../../assets/transferCard/openmoji_flag-indonesia.svg';
import IconUSA from '../../../assets/transferCard/openmoji_flag-united-states.svg';


const TransferCard = ({navigation}) => {
  const [adminCurrency, setAdminCurrency]=useState('5000')
  const stateTransfer=useSelector(state=>state.transfer)
  const stateGlobal=useSelector(state=>state.global)
  const dispatch=useDispatch()
  const handleSelanjutnya = () => {
    navigation.navigate('Transaction');
  };
  useEffect(()=>{
  
    console.log('isi Nominal', stateTransfer.nominalLocal)
   
    // else{
    //   console.log('ELSE', stateTransfer.nominalLocal)
    // }
    if(stateTransfer.nominalLocal<=0){
      dispatch(setTotalTransactionLocal(0))
      dispatch(setIsButtonTransferLocal(false))
      
      // dispatch(setTotalTransactionLocal(Number(stateTransfer.nominalLocal)+Number(stateTransfer.adminLocal)))
    }
    else if(stateTransfer.nominalLocal>=5000){
      dispatch(setIsButtonTransferLocal(true))
      dispatch(setTotalTransactionLocal(Number(stateTransfer.nominalLocal)+Number(stateTransfer.adminLocal)))
    }
    else if(stateTransfer.nominalLocal<=5000){
      dispatch(setIsButtonTransferLocal(false))
      dispatch(setTotalTransactionLocal(Number(stateTransfer.nominalLocal)+Number(stateTransfer.adminLocal)))

    }
    else if(stateTransfer.nominalLocal!=''){
      dispatch(setTotalTransactionLocal(Number(stateTransfer.nominalLocal)+Number(stateTransfer.adminLocal)))
    }
    

    //  if(stateTransfer.nominalLocal==''||stateTransfer.nominalLocal==0){
    //   dispatch(setTotalTransactionLocal(0))
    // }
    // if(stateTransfer.nominalLocal!=''||stateTransfer!=null){
    //   console.log('CEK')
    //   dispatch(setTotalTransactionLocal(Number(stateTransfer.nominalLocal)+Number(stateTransfer.adminLocal)))
    // }
  
    else{
      dispatch(setIsButtonTransferLocal(false))
    }
  },[stateTransfer])
  
  return (
    <View style={styles.Container}>
      <HeaderPages
        hideShowTitle={true}
        value={'Masukkan Nominal'}
        onPress={() => navigation.goBack()}
      />
      
      <View style={styles.ContainerBody}>
        <View style={styles.ContainerFieldCurrency}>
      
          <View style={styles.ContainerFlag}>
          <IconIndonesia/>
          </View>
          <TextInput style={styles.ContainerTextInputFlag} placeholder={'IDR'} value={stateTransfer.nominalLocal} onChangeText={(value)=>dispatch(setNominalTransferLocal(value.replace(/\D/g, '')))} keyboardType={'number-pad'} />
          
          
        </View>
        
        <NegatifCase value={stateTransfer.nominalLocal} text={'Anda harus mengisi bagian ini'}/>
       
      
        <View style={styles.TextNilaiKurs}>
          <TextDescriptionOnBoarding value={'Biaya Admin'} />
          <TextDescriptionOnBoarding value={stateTransfer.adminLocal+' IDR'} />
        </View>
      </View>
      
      <View style={styles.ContainerFooter}>
      
          <Text style={styles.TextDescriptionFooter}>
            Uang akan terkirim satu hari setelah proses berhasil jika dibayar
            sebelum pukul 23:00
          </Text>
          <Text style={styles.TextTitleFooter}>Total Transaksi</Text>
          <Text style={styles.TextCurrencyFooter}>{stateTransfer.totalTransactionLocal+' IDR'}</Text>

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
   
    width:'90%',
    alignSelf:'center'
  },
  ContainerFieldCurrency: {
    // width: '90%',
    marginTop: 24,
    flexDirection:'row'
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
    elevation:15,
    paddingVertical: 20,
   paddingHorizontal:20,
   backgroundColor:'#FFFFFF',
   
    
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

  ContainerFlag:{
    backgroundColor:'#EAF3FF', height:39,borderTopLeftRadius:10, borderBottomLeftRadius:10, width:'15%', justifyContent:'center', alignItems:'center'
  },
  ContainerTextInputFlag:{
    backgroundColor:'#F1F7FF', height:39, borderTopRightRadius:10, borderBottomRightRadius:10, width:'85%'
  }
});
