//Import Library
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import {launchImageLibrary} from 'react-native-image-picker';
const {width, height} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';

//Import Component
import {Colours} from '../../helpers/colours';
import TextDefault from '../../components/atoms/textDefault';
import SwitchingLanguage from '../../components/moleculs/switchingLanguage';
import SwitchingApp from '../../components/moleculs/switching';
import HeaderPagesBlue from '../../components/moleculs/headerPagesBlue';
import {
  setLogin,
  setPhoto,
  setUsers,
} from '../../service/redux/reducer/usersSlice';
import PopUpExit from '../../components/organism/popupExit';

//Import Assets
import IconEditPhoto from '../../../assets/user/IconEditPhoto.svg';
import IconLogout from '../../../assets/user/power.svg';
import IconArrowRight from '../../../assets/user/arrowright.svg';
import ImageError from '../../../assets/popup/popup_error.png';

const User = ({navigation}) => {
  const dispatch = useDispatch();
  const stateUsers = useSelector(state => state.users);
  const [isPopupExit, setIsPopupExit] = useState(false);
  const {t, i18n} = useTranslation();

  const handleLogout = () => {
    setIsPopupExit(true);
  };
  const handleLogoutSuccess = () => {
    dispatch(setLogin(null));
    dispatch(setUsers(null));
    navigation.navigate('Login');
  };

  let options = {
    setToPhotos: true,
    mediaType: 'photo',
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    dispatch(setPhoto(result.assets[0].uri));
  };
  return (
    <View style={styles.Container}>
      <HeaderPagesBlue
        value={'My account'}
        hideShowTitle={true}
        showBackButton={false}
      />
      <PopUpExit
        visible={isPopupExit}
        onPressBlue={handleLogoutSuccess}
        onPressWhite={() => setIsPopupExit(false)}
        ImagePopUp={ImageError}
        textButtonBlue={'Yes'}
        textButtonWhite={'Not'}
        value={'Are you sure you want to go out?'}
      />
      <View style={styles.ContainerBody}>
        <View style={styles.CardUser}>
          <View style={styles.ContainerImage}>
            {stateUsers.photo === null || stateUsers.photo === undefined ? (
              <Image
                source={{
                  uri: `https://robohash.org/${stateUsers.data.user.fullname}`,
                }}
                style={styles.StyleImage}
              />
            ) : (
              <Image
                source={{uri: stateUsers.photo}}
                style={{width: 60, height: 60, borderRadius: 60}}
              />
            )}

            <TouchableOpacity
              style={{bottom: 20, right: -40}}
              onPress={openGallery}>
              <IconEditPhoto />
            </TouchableOpacity>
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.TextStyle}>
              {stateUsers.data.user.fullname}
            </Text>
          </View>
        </View>
        <View style={styles.CardFeature}>
          <TextDefault value={'Language'} />
          <SwitchingLanguage />
        </View>
        <View style={styles.CardFeature}>
          <TextDefault value={'Application permit'} />
          <SwitchingApp />
        </View>

        <TouchableOpacity
          style={styles.CardFeature}
          onPress={() => navigation.navigate('TermsAndConditions')}>
          <TextDefault value={'Terms and conditions'} />
          <IconArrowRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContainerLogout} onPress={handleLogout}>
          <IconLogout />
          <Text style={styles.TextLogout}>{t('Logout')}</Text>
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
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#FFFFFF',
  },
  StyleImage: {
    width: 60,
    height: 60,
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
