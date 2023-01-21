import React from 'react';
import { useTranslation } from 'react-i18next';
import {StyleSheet, Text} from 'react-native';

const NegatifCase = ({text, value}) => {
  const {t, i18n}=useTranslation()
  return (
    <>{value === '' ? <Text style={styles.NegatifCase}>{t(text)}</Text> : null}</>
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
