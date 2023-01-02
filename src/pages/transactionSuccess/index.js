//Import Library
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import CountDownTimer from 'react-native-countdown-timer-hooks';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';

//Import Assets
import ImageSuccess from '../../../assets/transactionSuccess/check_mark.png';

const TransactionSuccess = ({navigation}) => {
  const refTimer = useRef();

  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = timerFlag => {
    setTimerEnd(timerFlag);
    console.log('Timeout', timerEnd);
  };

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
        <View style={styles.ContainerPayment}>
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Nama Penerima'} />
          </View>
          <TextDefault value={'Aurora Nugroho'} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Jenis Bank'} />
          </View>
          <TextDefault value={'BCC Bank'} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'No. Rekening'} />
          </View>
          <TextDefault value={'1234-5678-9101-1121-314'} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Virtual Akun'} />
          </View>
          <TextDefault value={'9999-5678-0033-1121-314'} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Total'} />
          </View>
          <Text style={styles.TextCount}>1.000.000 IDR</Text>
        </View>
      </View>
      <View style={styles.ContainerButtonFooter}>
        <BlueButton
          value={'Kembali Ke Beranda'}
          isButton={true}
          onPress={() => navigation.navigate('Homepage')}
        />
      </View>
    </View>
  );
};

export default TransactionSuccess;
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
    height: 264,
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
