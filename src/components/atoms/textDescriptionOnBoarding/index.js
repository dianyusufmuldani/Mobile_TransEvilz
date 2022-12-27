import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TextDescriptionOnBoarding = ({value}) => {
  return (
    <View>
      <Text style={styles.Container}>{value}</Text>
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
