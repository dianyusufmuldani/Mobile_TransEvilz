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
import IconEditPhoto from '../../../assets/user/IconEditPhoto.svg';
import IconLogout from '../../../assets/user/power.svg';
import IconArrowRight from '../../../assets/user/arrowright.svg';
import {useDispatch, useSelector} from 'react-redux';
import HeaderPagesBlue from '../../components/moleculs/headerPagesBlue';
import { setLogin, setUsers } from '../../service/redux/reducer/usersSlice';

const User = ({navigation}) => {
  const dispatch=useDispatch()
  const stateUsers = useSelector(state => state.users);
  const handleLogout = () => {
    dispatch(setLogin(null))
    dispatch(setUsers(null))
    navigation.navigate('Login');
  };
  return (
    <View style={styles.Container}>
      <HeaderPagesBlue
        value={'Akun Saya'}
        hideShowTitle={true}
        showBackButton={false}
      />
      <View style={styles.ContainerBody}>
        <View style={styles.CardUser}>
          <View style={styles.ContainerImage}>
            <Image
              source={{
                uri: `https://robohash.org/${stateUsers.data.user.fullname}`,
              }}
              style={styles.StyleImage}
            />
            <TouchableOpacity style={{bottom: 20, right: -40}}>
              <IconEditPhoto />
            </TouchableOpacity>
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.TextStyle}>
              {stateUsers.data.user.fullname}
            </Text>
            {/* <TouchableOpacity style={styles.ContainerIconEdit}>
              <IconEdit />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.CardFeature}>
          <TextDefault value={'Bahasa'} />
          <SwitchingLanguage />
        </View>
        <View style={styles.CardFeature}>
          <TextDefault value={'Izin Aplikasi'} />
          <SwitchingApp />
        </View>

        <TouchableOpacity
          style={styles.CardFeature}
          onPress={() => navigation.navigate('TermsAndConditions')}>
          <TextDefault value={'Syarat & Ketentuan'} />
          <IconArrowRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerLogout} onPress={handleLogout}>
          <IconLogout />
          <Text style={styles.TextLogout}>Keluar</Text>
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
    height: 139,
    borderRadius: 20,
    backgroundColor: '#F1F7FF',
    paddingLeft: 13,
    paddingVertical: 17,
    marginVertical: 10,
    alignItems: 'center',
  },
  ContainerImage: {
    width: 60,
    height: 60,
    marginBottom: 15,
    borderWidth:1,
    borderRadius:60,
    borderColor:'#FFFFFF'
  },
  StyleImage: {
    width: '100%',
    height: '100%',

    // borderRadius: 60,
  },
  ContainerText: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: '700',
  },
  ContainerIconEdit: {
    marginLeft: 10,
  },
  CardFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,

    height: 60,
    alignItems: 'center',
    // borderRadius: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EEF6FF',
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
