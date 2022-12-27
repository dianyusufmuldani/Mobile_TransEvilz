//Import Library
import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import {Colours} from '../../helpers/colours';

//Import Assets
import ImageUser from '../../../assets/user/kakashi.jpg';

const Riwayat = () => {
  return (
    <View style={styles.Container}>
      <HeaderPages
        value={'Riwayat Transaksi'}
        hideShowTitle={true}
        showBackButton={false}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{height: 500}}>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPaymentFailed}>
              <Text style={styles.StatusPayment}>Gagal</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPaymentFailed}>
              <Text style={styles.StatusPayment}>Gagal</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
        <View style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image source={ImageUser} style={styles.StyleImage} />
            </View>
            <View style={styles.ContainerText}>
              <Text style={styles.TextStyle}>Hatake Kakashi</Text>
              <Text style={styles.MethodPayment}>Credit Card</Text>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Sukses</Text>
            </View>
            <Text style={styles.CountPayment}>1.000.000 IDR</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Riwayat;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
    alignItems: 'center',
  },

  CardUser: {
    width: 342,
    height: 94,
    borderWidth: 1,
    borderRadius: 20,

    paddingLeft: 13,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ContainerImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  StyleImage: {
    width: '100%',
    height: '100%',

    borderRadius: 60,
  },
  ContainerText: {
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 12,
    fontWeight: '700',
  },
  MethodPayment: {
    fontSize: 6,
    fontWeight: '500',
    color: '#3A3A3A',
  },
  DatePayment: {
    fontSize: 6,
    fontWeight: '400',
    color: '#98A5D3',
  },
  ContainerStatusPayment: {
    width: 38,
    height: 12,
    backgroundColor: '#2ACA10',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  StatusPayment: {
    fontSize: 6,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  CountPayment: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3A3A3A',
    marginRight: 20,
    marginTop: 15,
  },
  ContainerStatusPaymentFailed: {
    width: 38,
    height: 12,
    backgroundColor: '#DC3328',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
