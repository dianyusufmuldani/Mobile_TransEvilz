import React from 'react';
import { useTranslation } from 'react-i18next';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TextButtonBlue = ({value, onPress}) => {
  const {t, i18n}=useTranslation()
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.Container}>{t(value)}</Text>
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
