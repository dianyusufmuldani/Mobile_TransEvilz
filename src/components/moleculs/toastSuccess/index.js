import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity} from 'react-native';
const ToastedSuccess = ({
  height,
  width,
  visible,
  onPressButton,
  onPressModal,
  textToasted,
}) => {
  return (
    <>
      <Modal visible={visible} animationType={'fade'} transparent={true}>
        <TouchableOpacity onPress={onPressModal} style={styles.Container}>
          <TouchableOpacity
            onPress={onPressButton}
            style={{
              backgroundColor: '#DDEBFF',
              height: height,
              width: width,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.TextToasted}>{textToasted}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
export default ToastedSuccess;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  TextToasted: {
    color: '#2075F3',
    fontSize: 12,
    fontWeight: '500',
  },
});
