import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TextButtonBlue = ({value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.Container}>{value}</Text>
    </TouchableOpacity>
  );
};

export default TextButtonBlue;
const styles = StyleSheet.create({
  Container: {
    color: '#2075F3',
    fontSize: 14,
    fontWeight: '400',
  },
});
