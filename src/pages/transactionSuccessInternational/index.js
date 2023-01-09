//Import Library
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import {useDispatch, useSelector} from 'react-redux';
import CountDown from 'react-native-countdown-component';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';

//Import Assets
import ImageSuccess from '../../../assets/transactionSuccess/check_mark.png';
import { setAccountNumberInternational, setCountryDestination, setNameReceiverInternational, setNominalDestination, setNominalIndonesia, setSwiftCode } from '../../service/redux/reducer/transferSlice';

const TransactionSuccessInternational = ({navigation}) => {
  const dispatch=useDispatch()
  const stateTransfer = useSelector(state => state.transfer);
  const refTimer = useRef();

  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = timerFlag => {
    setTimerEnd(timerFlag);
    console.log('Timeout', timerEnd);
  };
  
  const handleButtonFooter=()=>{
    dispatch(setNominalIndonesia(null))
    dispatch(setNominalDestination(null))
    dispatch(setCountryDestination('USD'))
    dispatch(setNameReceiverInternational(null))
    dispatch(setAccountNumberInternational(null))
    dispatch(setSwiftCode(null))
    navigation.goBack()
  }

  return (
    <View style={styles.Container}>
      <View style={styles.ContainerBody}>
        <View style={styles.ContainerImage}>
          <Image source={ImageSuccess} />
        </View>
        <View style={styles.ContainerTextTitle}>
          <Text style={styles.TextTitle}>
            Selamat Dinda Salsabila, Proses anda berhasil{' '}
          </Text>
        </View>
        <Text style={styles.TextDescription}>
          Selesaikan Pembayaran sebelum{' '}
        </Text>
        <CountDownTimer
          ref={refTimer}
          timestamp={86399}
          timerCallback={timerCallbackFunc}
          containerStyle={{
            height: 56,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
            backgroundColor: 'transparent',
          }}
          textStyle={{
            fontSize: 18,
            color: '#2ACA10',
            fontWeight: '700',
            letterSpacing: 5.25,
            paddingHorizontal: 30,
          }}
        />
        {/* <CountDown
        until={10}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={20}
      /> */}
        <View style={styles.ContainerPayment}>
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Nama Penerima'} />
          </View>
          <TextDefault value={stateTransfer.nameReceiverInternational} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Jenis Bank'} />
          </View>
          <TextDefault value={stateTransfer.bankReceiverInternational} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Tipe Transaksi'} />
          </View>
          <TextDefault value={`IDR ke ${stateTransfer.countryDestination}`} />
          
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'No. Rekening'} />
          </View>
          <TextDefault value={stateTransfer.accountNumberInternational} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Virtual Akun'} />
          </View>
          <TextDefault value={'9999-5678-0033-1121-314'} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Total'} />
          </View>
          <Text style={styles.TextCount}>
            {stateTransfer.totalTransactionInternational}
          </Text>
        </View>
      </View>
      <View style={styles.ContainerButtonFooter}>
        <BlueButton
          value={'Kembali Ke Beranda'}
          isButton={true}
          onPress={handleButtonFooter}
        />
      </View>
    </View>
  );
};

export default TransactionSuccessInternational;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ContainerImage: {
    marginTop: 24,
    marginBottom: 25,
  },
  TextTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3A3A3A',
    textAlign: 'center',
  },
  TextDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#98A5D3',
  },
  ContainerTextTitle: {
    marginBottom: 22,
    width: '70%',
  },
  ContainerPayment: {
    width: '90%',
    height: 300,
    borderWidth: 1,
    borderColor: '#2ACA10',
    borderRadius: 10,
  },
  ContainerButtonFooter: {
    width: '90%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  ContainerTextDescription: {
    marginVertical: 5,
  },
  TextCount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2ACA10',
    textAlign: 'center',
  },
});
