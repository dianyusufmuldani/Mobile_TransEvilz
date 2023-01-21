import React from 'react';
import { useTranslation } from 'react-i18next';
import {Text, View, StyleSheet} from 'react-native';

const TextTitleOnBoarding = ({value}) => {
  const {t, i18n}=useTranslation()
  return (
    <View>
      <Text style={styles.Container}>{t(value)}</Text>
    </View>
  );
};

export default TextTitleOnBoarding;
const styles = StyleSheet.create({
  Container: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2075F3',
    textAlign: 'center',
  },
});
