import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import BackIcon from '../../../../assets/otp/arrow-left.svg';
const HeaderPages = ({onPress, hideShowTitle, value, showBackButton}) => {
  return (
    <View style={styles.Container}>
      {showBackButton == false ? (
        <View style={styles.ContainerBlank} />
      ) : (
        <TouchableOpacity onPress={onPress}>
          <BackIcon />
        </TouchableOpacity>
      )}

      {hideShowTitle == true ? (
        <Text style={styles.TextStyle}>{value}</Text>
      ) : null}
      <View style={styles.ContainerBlank} />
    </View>
  );
};
export default HeaderPages;
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 45,
  },
  TextStyle: {
    color: '#3A3A3A',
    fontSize: 16,
    fontWeight: '700',
  },
  ContainerBlank: {
    width: 25,
    backgroundColor: 'transparent',
  },
});
