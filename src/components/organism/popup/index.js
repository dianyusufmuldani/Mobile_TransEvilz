import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import IconXCancel from '../../../../assets/popup/x.svg';
import BlueButton from '../../moleculs/blueButton';

const PopUp = ({
  visible,
  onPressCancel,
  onPressButton,
  value,
  ImagePopUp,
  textButton,
}) => {
  return (
    <Modal visible={visible} transparent={true} animationType={'fade'}>
      <View style={styles.Container}>
        <View style={styles.ContainerPopUp}>
          <TouchableOpacity style={styles.CancelX} onPress={onPressCancel}>
            <IconXCancel />
          </TouchableOpacity>
          <View style={styles.ViewImage}>
            <Image source={ImagePopUp} />
            <Text style={styles.TextPopUp}>{value}</Text>
          </View>
          <View style={styles.ButtonPopUp}>
            <BlueButton
              value={textButton}
              onPress={onPressButton}
              isButton={true}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopUp;
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
  },
  TextPopUp: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonPopUp: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 41,
  },
});
