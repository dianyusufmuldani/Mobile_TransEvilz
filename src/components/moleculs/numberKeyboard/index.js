import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
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
    fontSize: 16,
    fontWeight: '500',
    color: '#2075F3',
  },
  CoverNumberKeyboard: {
    backgroundColor: '#F1F7FF',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 27,
    marginBottom: 25,
  },
});
