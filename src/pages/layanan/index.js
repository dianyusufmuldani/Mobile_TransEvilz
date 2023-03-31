//Import Library
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
const {width, height} = Dimensions.get('window');

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import TextButtonBlue from '../../components/atoms/textButtonBlue';
import {Colours} from '../../helpers/colours';
import HeaderPagesBlue from '../../components/moleculs/headerPagesBlue';

//Import Assets
import IconMaps from '../../../assets/layanan/maps.svg';
import IconMessage from '../../../assets/layanan/message.svg';
import IconWhatsapp from '../../../assets/layanan/whatsapp.svg';
import IconPhone from '../../../assets/layanan/phone.svg';

const Layanan = ({navigation}) => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.Container}>
      <HeaderPagesBlue
        value={'Complaint Service'}
        hideShowTitle={true}
        showBackButton={false}
      />
      <View>
        <Text style={styles.TextTitle}>TransEvilz</Text>
      </View>
      <View style={styles.ContainerIcon}>
        <View>
          <IconMaps />
          <Text style={styles.TextDescription}>{t('Office Location')}</Text>
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
          <Text style={styles.TextDescription}>{t('E-mail')}</Text>
        </View>
        <View style={styles.ContainerTextButton}>
          <TextButtonBlue value={'transevilz@evil.id'} />
        </View>
      </View>
      <View style={styles.ContainerIcon}>
        <View>
          <IconWhatsapp />
          <Text style={styles.TextDescription}>{t('Whatsapp')}</Text>
        </View>
        <View style={styles.ContainerTextButton}>
          <TextButtonBlue value={'WA Business'} />
        </View>
      </View>
      <View style={styles.ContainerIcon}>
        <View>
          <IconPhone />
          <Text style={styles.TextDescription}>{t('Call Center')}</Text>
        </View>
        <View style={styles.ContainerTextButton}>
          <TextButtonBlue value={'+62 1234 5678 9101'} />
        </View>
      </View>
      <Text style={styles.ContainerDescription}>
        {t('For further needs, please come directly to the office')}
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
