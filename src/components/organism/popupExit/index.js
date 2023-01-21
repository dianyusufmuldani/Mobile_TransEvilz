import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import BlueButton from '../../moleculs/blueButton';
import WhiteButton from '../../moleculs/whiteButton';

const PopUpExit = ({
  visible,
  onPressCancel,
  onPressBlue,
  onPressWhite,
  value,
  ImagePopUp,
  textButtonBlue,
  textButtonWhite,
}) => {
  const {t, i18n}=useTranslation()
  return (
    <Modal visible={visible} transparent={true} animationType={'fade'}>
      <View style={styles.Container}>
        <View style={styles.ContainerPopUp}>
          <TouchableOpacity style={styles.CancelX} onPress={onPressCancel} />
          <View style={styles.ViewImage}>
            <Image source={ImagePopUp} />
            <Text style={styles.TextPopUp}>{t(value)}</Text>
          </View>
          <View style={styles.ButtonPopUp}>
            <View style={{width: '45%'}}>
              <WhiteButton
                isButton={true}
                value={t(textButtonWhite)}
                onPress={onPressWhite}
              />
            </View>
            <View style={{width: '45%'}}>
              <BlueButton
                value={t(textButtonBlue)}
                onPress={onPressBlue}
                isButton={true}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopUpExit;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerPopUp: {
    backgroundColor: '#FFFFFF',
    width: 342,
    height: 332,
    borderRadius: 30,
  },
  CancelX: {
    alignItems: 'flex-end',
    marginRight: 19.5,
    marginTop: 19.5,
  },
  ViewImage: {
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
  },
  TextPopUp: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#DC3328',
    marginTop: 15,
  },
  ButtonPopUp: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 41,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
