//Import Library
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import {Colours} from '../../helpers/colours';
import TextDefault from '../../components/atoms/textDefault';
import SwitchingLanguage from '../../components/moleculs/switchingLanguage';
import SwitchingApp from '../../components/moleculs/switching';

//Import Assets
import ImageUser from '../../../assets/user/kakashi.jpg';
import IconEdit from '../../../assets/user/edit.svg';
import IconLogout from '../../../assets/user/power.svg';
import IconArrowRight from '../../../assets/user/arrowright.svg';

const User = ({navigation}) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.Container}>
      <HeaderPages
        value={'Akun Saya'}
        hideShowTitle={true}
        showBackButton={false}
      />
      <View style={styles.ContainerBody}>
        <View style={styles.CardUser}>
          <View style={styles.ContainerImage}>
            <Image source={ImageUser} style={styles.StyleImage} />
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.TextStyle}>Hatake Kakashi</Text>
          </View>
          <TouchableOpacity style={styles.ContainerIconEdit}>
            <IconEdit />
          </TouchableOpacity>
        </View>
        <View style={styles.CardFeature}>
          <TextDefault value={'Bahasa'} />
          <SwitchingLanguage />
        </View>
        <View style={styles.CardFeature}>
          <TextDefault value={'Izin Aplikasi'} />
          <SwitchingApp />
        </View>

        <TouchableOpacity style={styles.CardFeature} onPress={()=>navigation.navigate('TermsAndConditions')}>
          <TextDefault value={'Syarat & Ketentuan'} />
          <IconArrowRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerLogout} onPress={handleLogout}>
          <IconLogout />
          <Text style={styles.TextLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default User;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    alignItems: 'center',
  },
  CardUser: {
    width: 342,
    height: 94,
    borderWidth: 3,
    borderColor: 'rgba(52, 52, 52, 0.1)',
    borderRadius: 20,

    paddingLeft: 13,
    paddingVertical: 17,
    flexDirection: 'row',
    marginVertical: 10,
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
    fontSize: 18,
    fontWeight: '700',
  },
  ContainerIconEdit: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  CardFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,

    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 0.1,
    borderColor: 'grey',
  },
  ContainerLogout: {
    flexDirection: 'row',
    marginTop: 30,
  },
  TextLogout: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DC3328',
    marginLeft: 20,
  },
});
