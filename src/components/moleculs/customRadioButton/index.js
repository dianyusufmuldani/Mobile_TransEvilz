import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomRadioButton = ({onPress, isRadio, value}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextRadio}>{value}</Text>
      <TouchableOpacity
        style={isRadio != true ? styles.RadioOff : styles.RadioOn}
        onPress={onPress}
      />
    </View>
  );
};

export default CustomRadioButton;
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 39,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 19,
    backgroundColor: '#EFEFEF',
  },
  RadioOff: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#73788A',
  },
  RadioOn: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  TextRadio: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3A3A3A',
  },
});
