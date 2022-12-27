import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const RequirementSymbols = () => {
  return (
    <View>
      <Text style={styles.Container}>*</Text>
    </View>
  );
};

export default RequirementSymbols;
const styles = StyleSheet.create({
  Container: {
    fontSize: 16,
    fontWeight: '400',
    color: '#DC3328',
    textAlign: 'center',
  },
});
