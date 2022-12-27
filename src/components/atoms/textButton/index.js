import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TextButton = ({value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.Container}>{value}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
const styles = StyleSheet.create({
  Container: {
    color: '#2ACA10',
    fontSize: 12,
    fontWeight: '400',
  },
});
