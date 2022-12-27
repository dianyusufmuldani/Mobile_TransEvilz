import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
const NumberKeyboard = ({onPress, value}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.CoverNumberKeyboard}>
      <Text style={styles.FontNumberKeyboard}>{value}</Text>
    </TouchableOpacity>
  );
};
export default NumberKeyboard;
const styles = StyleSheet.create({
  FontNumberKeyboard: {
    fontSize: 22,
    fontWeight: '500',
  },
  CoverNumberKeyboard: {
    backgroundColor: '#F3F7FD',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 27,
    marginBottom: 25,
  },
});
