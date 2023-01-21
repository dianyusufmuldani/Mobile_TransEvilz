import React from 'react';
import { useTranslation } from 'react-i18next';
import {Modal, StyleSheet, Text, TouchableOpacity} from 'react-native';
const ToastedFailed = ({
  height,
  width,
  visible,
  onPressButton,
  onPressModal,
  textToasted,
}) => {
  const {t, i18n}=useTranslation()
  return (
    <>
      <Modal visible={visible} animationType={'fade'} transparent={true}>
        <TouchableOpacity onPress={onPressModal} style={styles.Container}>
          <TouchableOpacity
            onPress={onPressButton}
            style={{
              backgroundColor: '#FFD3D0',
              height: height,
              width: width,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.TextToasted}>{t(textToasted)}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
export default ToastedFailed;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  TextToasted: {
    color: '#DC3328',
    fontSize: 12,
    fontWeight: '500',
  },
});
