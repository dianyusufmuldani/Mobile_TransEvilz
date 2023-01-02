import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const BlueButton = ({value, onPress, isButton}) => {
  return (
    <View>
      {isButton == true ? (
        <TouchableOpacity style={styles.Container} onPress={onPress}>
          <Text style={styles.TextTrue}>{value}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.ContainerOffButton} onPress={onPress}>
          <Text style={styles.Text}>{value}</Text>
        </View>
      )}
    </View>
  );
};

export default BlueButton;
const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 42,
    backgroundColor: '#2075F3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // position:'absolute',
    bottom: 0,
  },
  ContainerOffButton: {
    width: '100%',
    height: 42,
    backgroundColor: '#D8D8D8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // position:'absolute',
    bottom: 0,
  },
  Text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3A3A3A',
  },
  TextTrue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
