import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TextTitleOnBoarding = ({value}) => {
  return (
    <View>
      <Text style={styles.Container}>{value}</Text>
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
