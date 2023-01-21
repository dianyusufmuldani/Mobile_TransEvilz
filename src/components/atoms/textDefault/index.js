import React from 'react';
import { useTranslation } from 'react-i18next';
import {Text, View, StyleSheet} from 'react-native';

const TextDefault = ({value}) => {
  const {t, i18n}=useTranslation()
  return (
    <View>
      <Text style={styles.Container}>{t(value)}</Text>
    </View>
  );
};

export default TextDefault;
const styles = StyleSheet.create({
  Container: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
});
