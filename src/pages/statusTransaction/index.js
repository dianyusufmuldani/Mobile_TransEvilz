import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import HeaderPages from '../../components/moleculs/headerPages';
import HeaderPagesWhite from '../../components/moleculs/headerPagesWhite';
import CountDown from 'react-native-countdown-fixed';
import ImageBgStatus from '../../../assets/statusTransaction/cardStatusTransaction.png';
import ImageProccess from '../../../assets/statusTransaction/uim_process.png';
import ImageFailed from '../../../assets/statusTransaction/cross_icon.png';
import ImageSuccess from '../../../assets/statusTransaction/check_mark.png';
import IconTransEvilz from '../../../assets/statusTransaction/logo_transevilz.svg';

const StatusTransaction = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.ContainerBlueBackgrund}>
        <HeaderPagesWhite onPress={() => navigation.goBack()} />
        <View style={styles.ContainerTitle}>
          <Text style={styles.TextTitle}>Transaksi Anda Dalam Proses</Text>
          <Text style={styles.TextDescriptionTitle}>
            Selesaikan Pembayaran sebelum{' '}
          </Text>
          <CountDown
            until={84610}
            onFinish={() => console.log('END')}
            onPress={() => alert('hello')}
            size={18}
            digitTxtStyle={{color: '#FFFFFF'}}
            digitStyle={{
              backgroundColor: 'transparent',
              marginHorizontal: 15,
              left: -20,
            }}
            separatorStyle={{color: '#2ACA10'}}
            timeLabels={{h: 'Jam', m: 'Menit', s: 'Detik'}}
            timeToShow={['H', 'M', 'S']}
            timeLabelStyle={{
              color: '#FFFFFF',
              fontSize: 16,
              right: -15,
              top: -36,
              fontWeight: '700',
            }}
          />
        </View>
      </View>
      <View style={styles.Container}>
        <Image
          source={ImageBgStatus}
          style={{top: -90, position: 'absolute'}}
        />
        <Image
          source={ImageProccess}
          style={{top: -140, position: 'absolute'}}
        />
        <IconTransEvilz style={{top: -50, left: 40, position: 'absolute'}} />
        <View style={{width: '85%'}}>
          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Tanggal</Text>
            <Text style={styles.TextCardValue}>10 Januari 2023 09:00:00</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Nama Penerima</Text>
            <Text style={styles.TextCardValue}>Aurora Nugroho</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Jenis Bank</Text>
            <Text style={styles.TextCardValue}>BCC</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Tipe Transaksi</Text>
            <Text style={styles.TextCardValue}>IDR ke IDR</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>No Rekening</Text>
            <Text style={styles.TextCardValue}>1234-5678-9101-1121-314</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Jenis Transaksi</Text>
            <Text style={styles.TextCardValue}>Lokal</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Virtual Akun</Text>
            <Text style={styles.TextCardValue}>9999-5678-0033-1121-314</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#9EB9FF',
              borderStyle: 'dashed',
              marginBottom: 20,
            }}
          />

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Nominal</Text>
            <Text style={styles.TextCardValue}>995.000 IDR</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Biaya Admin</Text>
            <Text style={styles.TextCardValue}>5.000 IDR</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#9EB9FF',
              borderStyle: 'dashed',
              marginBottom: 20,
              width: '92%',
              alignSelf: 'center',
            }}
          />

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCardValue}>Total</Text>
            <Text style={styles.TextCardTotal}>1.000.000 IDR</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatusTransaction;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#EFEFEF',
    flex: 0.55,
    alignItems: 'center',
  },
  ContainerBlueBackgrund: {
    backgroundColor: '#2075F3',
    flex: 0.45,
    alignItems: 'center',
  },
  ContainerTitle: {
    width: '60%',
  },
  TextTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  TextDescriptionTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 15,
  },
  TextCard: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  TextCardValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
  },
  ContainerSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  TextCardTotal: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFAD0E',
  },
  TextCardTotalFailed: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DC3328',
  },
  TextCardTotalSuccess: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2ACA10',
  },
});
