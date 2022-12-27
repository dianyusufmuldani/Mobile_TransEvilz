//Import Library
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextButtonBlue from '../../components/atoms/textButtonBlue';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import {Colours} from '../../helpers/colours';

//Import Assets
import IconMaps from '../../../assets/layanan/maps.svg';
import IconMessage from '../../../assets/layanan/message.svg';
import IconWhatsapp from '../../../assets/layanan/whatsapp.svg';
import IconPhone from '../../../assets/layanan/phone.svg';

const Layanan = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <HeaderPages
        value={'Layanan Pengaduan'}
        hideShowTitle={true}
        showBackButton={false}
      />
      <View>
        <Text style={styles.TextTitle}>TransEvilz</Text>
      </View>
      <View style={styles.ContainerIcon}>
        <View>
          <IconMaps />
          <Text style={styles.TextDescription}>Lokasi Kantor</Text>
        </View>
        <View style={styles.ContainerTextButton}>
          <TextButtonBlue
            value={'Jl Raya Pegangsaan Timur No 123, Jakarta Timur, 55990'}
          />
        </View>
      </View>
      <View style={styles.ContainerIcon}>
        <View>
          <IconMessage />
          <Text style={styles.TextDescription}>Email</Text>
        </View>
        <View style={styles.ContainerTextButton}>
          <TextButtonBlue value={'transevilz@evil.id'} />
        </View>
      </View>
      <View style={styles.ContainerIcon}>
        <View>
          <IconWhatsapp />
          <Text style={styles.TextDescription}>Whatsapp</Text>
        </View>
        <View style={styles.ContainerTextButton}>
          <TextButtonBlue value={'WA Bisnis'} />
        </View>
      </View>
      <View style={styles.ContainerIcon}>
        <View>
          <IconPhone />
          <Text style={styles.TextDescription}>Call Center</Text>
        </View>
        <View style={styles.ContainerTextButton}>
          <TextButtonBlue value={'+62 1234 5678 9101'} />
        </View>
      </View>
      <Text style={styles.ContainerDescription}>
        Untuk keperluan yang lebih lanjut silakan datang langsung ke kantor
      </Text>
    </View>
  );
};

export default Layanan;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.background,
  },
  TextTitle: {
    fontSize: 40,
    fontWeight: '700',
    color: '#3A3A3A',
    marginTop: 35.5,
  },
  ContainerIcon: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#EEF6FF',
    marginTop: 23,
  },
  TextDescription: {
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'center',
  },
  ContainerTextButton: {
    width: '80%',
    marginLeft: 38,
    paddingTop: 5,
  },
  ContainerDescription: {
    width: '80%',
    marginTop: 22,
    fontSize: 12,
    fontWeight: '500',
    color: '#7A7A7A',
  },
});
