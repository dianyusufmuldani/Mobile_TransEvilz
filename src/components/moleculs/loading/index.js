import React from 'react';
import {Modal, ActivityIndicator, StyleSheet} from 'react-native';
const Loading = ({visible}) => {
  return (
    <Modal visible={visible} animationType={'fade'} transparent={true}>
      <ActivityIndicator
        style={styles.Container}
        size="large"
        color="#00ff00"
        animating={true}
      />
    </Modal>
  );
};
export default Loading;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
