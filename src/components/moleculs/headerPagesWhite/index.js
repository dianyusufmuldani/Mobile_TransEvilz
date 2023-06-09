import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import BackIcon from '../../../../assets/statusTransaction/arrow_left.svg';
const HeaderPagesWhite = ({onPress, hideShowTitle, value, showBackButton}) => {
  return (
    <View style={styles.Container}>
      {showBackButton === false ? (
        <View style={styles.ContainerBlank} />
      ) : (
        <TouchableOpacity onPress={onPress}>
          <BackIcon />
        </TouchableOpacity>
      )}

      {hideShowTitle === true ? (
        <Text style={styles.TextStyle}>{value}</Text>
      ) : null}
      <View style={styles.ContainerBlank} />
    </View>
  );
};
export default HeaderPagesWhite;
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 45,
  },
  TextStyle: {
    color: '#2075F3',
    fontSize: 16,
    fontWeight: '700',
  },
  ContainerBlank: {
    width: 25,
    backgroundColor: 'transparent',
  },
});
