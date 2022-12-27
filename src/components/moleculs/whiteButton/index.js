import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const WhiteButton = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={onPress}>
      <Text style={styles.Text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default WhiteButton;
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 42,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2075F3',
  },
  Text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2075F3',
  },
});
