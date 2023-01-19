import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import BlueButton from '../../components/moleculs/blueButton';
import HeaderPages from '../../components/moleculs/headerPages';

const TermsAndConditions = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <HeaderPages
        hideShowTitle={true}
        value={'Syarat & Ketentuan'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.ContainerBody}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextTitleNumber}>A</Text>
          <Text style={styles.TextTitle}>Syarat</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>1</Text>
          <Text style={styles.TextDescription}>
            TransEvilz (Mobile Banking) adalah layanan produk perbankan
            TransEvilz yang dapat diakses secara langsung oleh Nasabah melalui
            telepon seluler/handphone, baik dengan menggunakan menu yang sudah
            tersedia di Subscriber Identification Module (SIM) Card, dengan
            menggunakan media SMS atau menggunakan menu pada TransEvilz mobile
            dengan menggunakan media jaringan internet pada handphone
            dikombinasikan dengan media SMS sesuai ketentuan yang berlaku di
            TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>2</Text>
          <Text style={styles.TextDescription}>
            TransEvilz mobile adalah aplikasi yang dapat di-download dari
            website resmi TransEvilz maupun media distribusi aplikasi/software
            resmi yang ditunjuk TransEvilz yang dimiliki oleh mobile operating
            system yang terdapat di handphone nasabah untuk melakukan transaksi
            melalui TransEvilz atau untuk memperoleh Info TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>3</Text>
          <Text style={styles.TextDescription}>
            PIN Evilz (Personal Identification Number) adalah nomor identifikasi
            pribadi bagi Nasabah yang menggunakan TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>4</Text>
          <Text style={styles.TextDescription}>
            Kode Akses adalah kode pribadi bagi Nasabah yang menggunakan
            TransEvilz pada TransEvilz mobile.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>5</Text>
          <Text style={styles.TextDescription}>
            Kode Transaksi adalah suatu kode yang dihasilkan oleh TransEvilz
            pada TransEvilz mobile untuk melakukan transaksi tarik tunai, setor
            tunai di ATM TransEvilz, atau transaksi di kantor cabang TransEvilz
            tanpa menggunakan Kartu TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>6</Text>
          <Text style={styles.TextDescription}>
            Kartu Kredit TransEvilz adalah segala jenis kartu kredit yang
            diterbitkan oleh TransEvilz untuk Nasabah.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>7</Text>
          <Text style={styles.TextDescription}>
            TransEvilz yang dapat diakses oleh Nasabah melalui smartphone.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>8</Text>
          <Text style={styles.TextDescription}>
            TransEvilz adalah layanan informasi mengenai produk dan layanan
            TransEvilz berikut program promosinya, lokasi mesin Anjungan Tunai
            Mandiri (ATM) TransEvilz dan kantor cabang BCA, serta informasi
            lainnya terkait dengan TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>9</Text>
          <Text style={styles.TextDescription}>
            Sakuku adalah uang elektronik dalam mata uang Rupiah dengan
            menggunakan aplikasi resmi dari TransEvilz dan berbasis server serta
            menggunakan nomor telepon seluler sebagai nomor rekening.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>10</Text>
          <Text style={styles.TextDescription}>
            Kartu TransEvilz adalah kartu ATM yang diterbitkan oleh BCA yang
            dapat dipergunakan oleh pemegang Kartu TransEvilz untuk melakukan
            transaksi perbankan tertentu melalui TransEvilz dan/atau sarana lain
            yang ditentukan oleh TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextTitleNumber}>B</Text>
          <Text style={styles.TextTitle}>Ketentuan</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>1</Text>
          <Text style={styles.TextDescription}>
            TransEvilz (Mobile Banking) adalah layanan produk perbankan
            TransEvilz yang dapat diakses secara langsung oleh Nasabah melalui
            telepon seluler/handphone, baik dengan menggunakan menu yang sudah
            tersedia di Subscriber Identification Module (SIM) Card, dengan
            menggunakan media SMS atau menggunakan menu pada TransEvilz mobile
            dengan menggunakan media jaringan internet pada handphone
            dikombinasikan dengan media SMS sesuai ketentuan yang berlaku di
            TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>2</Text>
          <Text style={styles.TextDescription}>
            TransEvilz mobile adalah aplikasi yang dapat di-download dari
            website resmi TransEvilz maupun media distribusi aplikasi/software
            resmi yang ditunjuk TransEvilz yang dimiliki oleh mobile operating
            system yang terdapat di handphone nasabah untuk melakukan transaksi
            melalui TransEvilz atau untuk memperoleh Info TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>3</Text>
          <Text style={styles.TextDescription}>
            PIN Evilz (Personal Identification Number) adalah nomor identifikasi
            pribadi bagi Nasabah yang menggunakan TransEvilz.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>4</Text>
          <Text style={styles.TextDescription}>
            Kode Akses adalah kode pribadi bagi Nasabah yang menggunakan
            TransEvilz pada TransEvilz mobile.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextNumber}>5</Text>
          <Text style={styles.TextDescription}>
            Kode Transaksi adalah suatu kode yang dihasilkan oleh TransEvilz
            pada TransEvilz mobile untuk melakukan transaksi tarik tunai, setor
            tunai di ATM TransEvilz, atau transaksi di kantor cabang TransEvilz
            tanpa menggunakan Kartu TransEvilz.
          </Text>
        </View>
        <View style={{height: 50}} />
      </ScrollView>
      <View style={styles.ButtonLanjut}>
        <BlueButton
          value={'Ya, Saya Mengerti'}
          onPress={() => navigation.goBack()}
          isButton={true}
        />
      </View>
    </View>
  );
};

export default TermsAndConditions;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  ContainerBody: {
    backgroundColor: '#F1F7FF',
    width: '90%',
    alignSelf: 'center',
    paddingTop: 10,
    marginTop: 15,
  },
  TextTitle: {
    fontWeight: '700',
    paddingTop: 20,
  },
  TextTitleNumber: {
    fontWeight: '700',
    marginRight: 10,
    paddingTop: 20,
  },
  TextNumber: {
    textAlign: 'center',
    width: '5%',
  },
  ButtonLanjut: {
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
});
