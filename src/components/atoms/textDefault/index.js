import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TextDefault = ({value}) => {
  return (
    <View>
      <Text style={styles.Container}>{value}</Text>
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
