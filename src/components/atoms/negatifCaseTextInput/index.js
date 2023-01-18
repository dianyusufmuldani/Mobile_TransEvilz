import React from 'react';
import {StyleSheet, Text} from 'react-native';

const NegatifCase = ({text, value}) => {
  return (
    <>{value === '' ? <Text style={styles.NegatifCase}>{text}</Text> : null}</>
  );
};

export default NegatifCase;
const styles = StyleSheet.create({
  NegatifCase: {
    fontSize: 14,
    fontWeight: '400',
    color: '#DC3328',
  },
});
