//Import Library
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextFieldCurrency from '../../components/moleculs/textFieldCurrency';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';

//Import Assets
import IconIndonesia from '../../../assets/transferCard/openmoji_flag-indonesia.svg';
import IconUSA from '../../../assets/transferCard/openmoji_flag-united-states.svg';

const TransferCard = ({navigation}) => {
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
          <TextFieldCurrency
            placeholder={'IDR'}
            IconCurrency={<IconIndonesia />}
          />
        </View>
        <View style={styles.ContainerFieldCurrency}>
          <TextFieldCurrency placeholder={'USD'} IconCurrency={<IconUSA />} />
        </View>
        <View style={styles.TextNilaiKurs}>
          <TextDescriptionOnBoarding value={'Nilai Kurs Saat ini'} />
          <TextDescriptionOnBoarding value={'15.000 IDR'} />
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
          <Text style={styles.TextCurrencyFooter}>1.000.000 IDR</Text>

          <View style={styles.ContainerSelanjutnya}>
            <BlueButton
              value={'Selanjutnya'}
              isButton={true}
              onPress={handleSelanjutnya}
            />
          </View>
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
    alignItems: 'center',
  },
  ContainerFieldCurrency: {
    width: '90%',
    marginTop: 24,
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
});
