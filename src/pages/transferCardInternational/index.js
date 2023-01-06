//Import Library
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextFieldCurrency from '../../components/moleculs/textFieldCurrency';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';
import { setIsButtonTransferInternational } from '../../service/redux/reducer/globalSlice';

//Import Assets
import IconIndonesia from '../../../assets/transferCard/openmoji_flag-indonesia.svg';
import IconUSA from '../../../assets/transferCard/openmoji_flag-united-states.svg';
import Singapore from '../../../assets/transferCard/openmoji_flag-singapore.png';
import UnitedStates from '../../../assets/transferCard/openmoji_flag-united-states.png';
import Australia from '../../../assets/transferCard/openmoji_flag-australia.png';
import Japan from '../../../assets/transferCard/openmoji_flag-japan.png';
import IconArrowDown from '../../../assets/transferCard/icon_arrow_down.svg';
import { useDispatch, useSelector } from 'react-redux';


const TransferCardInternational = ({navigation}) => {
  const dispatch=useDispatch();
  const stateGlobal=useSelector(state=>state.global)
  const [hideSelectList, setHideSelectList] = useState(false);
  const [country, setCountry] = useState(UnitedStates);
  const [currencyConversion, setCurrencyConversion]=useState(0)
  const [valuePlaceholder, setValuePlaceHolder]=useState('USD')
  const [kurs, setKurs]=useState(15677)
  const [currencyIndonesia, setCurrencyIndonesia]=useState(null)
  const [totalTransactionInternational, setTotalTransactionInternational]=useState('0')
  const [adminInternational, setAdminInternational]=useState(100000)
  const handleAustralia = ()=>{
    setCountry(Australia);
    setHideSelectList(!hideSelectList);
    setValuePlaceHolder('AUD')
    setKurs(10550)
  };

  const handleJapan = ()=>{
    setCountry(Japan);
    setHideSelectList(!hideSelectList);
    setValuePlaceHolder('JPY')
    setKurs(116)
  };
  const handleSingapore = ()=>{
    setCountry(Singapore);
    setHideSelectList(!hideSelectList);
    setValuePlaceHolder('SGD')
    setKurs(11634)
  };
  const handleUS = ()=>{
    setCountry(UnitedStates);
    setHideSelectList(!hideSelectList);
    setValuePlaceHolder('USD')
    setKurs(15677)
  };
  useEffect(()=>{
    console.log('isi Field Negara', currencyConversion)
    if(currencyIndonesia==null||currencyIndonesia==''){
      setTotalTransactionInternational(0)
    }
    else if(currencyIndonesia>=100000){
      setCurrencyConversion(Number(currencyIndonesia)/Number(kurs))
      setTotalTransactionInternational(Number(currencyIndonesia)+adminInternational)
      dispatch(setIsButtonTransferInternational(true))
    }
    else if(currencyIndonesia!=null||currencyIndonesia!=''){
      setCurrencyConversion(Number(currencyIndonesia)/Number(kurs))
      setTotalTransactionInternational(Number(currencyIndonesia)+adminInternational)
      dispatch(setIsButtonTransferInternational(false))
    }
    
  })
  const handleSelanjutnya = () => {
    navigation.navigate('Transaction');
  };
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
          <TextInput style={styles.ContainerTextInputFlag} placeholder={'IDR'}  onChangeText={(value)=>setCurrencyIndonesia(value.replace(/\D/g, ''))} keyboardType={'number-pad'} value={currencyIndonesia} />
          
          
        </View>
        <View style={styles.ContainerFieldCurrency}>
          {/* <TextFieldCurrency /> */}
          <View style={styles.Container}>
        <View style={styles.ContainerTextInput}>

         <TouchableOpacity  style={styles.Country} onPress={()=>setHideSelectList(!hideSelectList)}>
    
            <Image source={country} style={{width: 30, height: 30}} />



          <View style={{marginLeft:10}}>
              <IconArrowDown />
            </View>
          </TouchableOpacity>

        <View style={styles.Currency}>
            <TextInput
              placeholder={valuePlaceholder}
              value={`${currencyConversion.toFixed(2)}`}
              onChangeText={(value)=>setCurrencyConversion(value)}
              keyboardType={'numeric'}

          />
          </View>
        </View>
        {hideSelectList ? (
          <ScrollView style={styles.ContainerSelectList}>
            <TouchableOpacity
              style={styles.ListCountry}
              onPress={handleAustralia}>
                <Image source={Australia}/>
    
              <Text style={{paddingLeft: 10}}>Australia</Text>
            </TouchableOpacity>

       <TouchableOpacity style={styles.ListCountry} onPress={handleJapan}>
      
              <Image source={Japan}/>
              <Text style={{paddingLeft: 10}}>Jepang</Text>
            </TouchableOpacity>

       
       <TouchableOpacity style={styles.ListCountry} onPress={handleSingapore}>
       <Image source={Singapore}/>
              <Text style={{paddingLeft: 10}}>Singapore</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ListCountry} onPress={handleUS}>
            <Image source={UnitedStates}/>
              <Text style={{paddingLeft: 10}}>United States of America</Text>
            </TouchableOpacity>

        </ScrollView>) : (null)
      }

    </View>
        </View>
        <View style={styles.TextNilaiKurs}>
          <TextDescriptionOnBoarding value={'Nilai Kurs Saat ini'} />
          <TextDescriptionOnBoarding value={kurs+" IDR"} />
        </View>
        <View style={styles.TextNilaiKurs}>
          <TextDescriptionOnBoarding value={'Biaya Admin'} />
          <TextDescriptionOnBoarding value={'100.000 IDR'} />
        </View>
      </View>
      <View style={styles.ContainerFooter}>
        <View style={styles.BodyFooter}>
          <Text style={styles.TextDescriptionFooter}>
            Uang akan terkirim satu hari setelah proses berhasil jika dibayar
            sebelum pukul 23:00
          </Text>
          <Text style={styles.TextTitleFooter}>Total Transaksi</Text>
          <Text style={styles.TextCurrencyFooter}>{totalTransactionInternational+" IDR"}</Text>

          <View style={styles.ContainerSelanjutnya}>
            <BlueButton
              value={'Selanjutnya'}
              isButton={stateGlobal.isButtonTransferInternational}
              onPress={handleSelanjutnya}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransferCardInternational;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    alignItems: 'center',
  },
  ContainerFieldCurrency: {
    width: '90%',
    marginTop: 24,
    flexDirection:'row'
  },
  ContainerFlag:{
    backgroundColor:'#EAF3FF', height:39,borderTopLeftRadius:10, borderBottomLeftRadius:10, width:'15%', justifyContent:'center', alignItems:'center'
  },
  ContainerTextInputFlag:{
    backgroundColor:'#F1F7FF', height:39, borderTopRightRadius:10, borderBottomRightRadius:10, width:'85%'
  },
  TextNilaiKurs: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 24,
  },
  ContainerSelanjutnya: {
    width: '100%',

    alignSelf: 'center',
  },
  ContainerFooter: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    elevation: 0.5,
    paddingVertical: 20,
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
  BodyFooter: {
    width: '90%',
    alignSelf: 'center',
  },
  ContainerTextInput: {
    flexDirection: 'row',
  },
  Country: {
    width: '20%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F7FF',
  },
  Currency: {
    width: '80%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // borderColor:'#F1F7FF'
    backgroundColor: '#F1F7FF',
  },
  ContainerSelectList: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  ListCountry: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#F1F7FF',
    height: 40,
    borderRadius: 10,
  },
});
