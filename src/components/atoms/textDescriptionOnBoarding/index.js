import React from 'react';
import { useTranslation } from 'react-i18next';
import {Text, View, StyleSheet} from 'react-native';

const TextDescriptionOnBoarding = ({value}) => {
  const {t, i18n}=useTranslation()
  return (
    <View>
      <Text style={styles.Container}>{t(value)}</Text>
    </View>
  );
};

export default TextDescriptionOnBoarding;
const styles = StyleSheet.create({
  Container: {
    fontSize: 12,
    fontWeight: '400',
    color: '#929292',
    textAlign: 'center',
  },
});
