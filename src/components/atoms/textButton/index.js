import React from 'react';
import { useTranslation } from 'react-i18next';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TextButton = ({value, onPress}) => {
  const {t, i18n}=useTranslation()
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.Container}>{t(value)}</Text>
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
