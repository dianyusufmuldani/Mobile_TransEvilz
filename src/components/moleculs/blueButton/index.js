import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const BlueButton = ({value, onPress, isButton}) => {
  return (
    <View>
      {isButton == true ? (
        <TouchableOpacity style={styles.Container} onPress={onPress}>
          <Text style={styles.Text}>{value}</Text>
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
  },
  ContainerOffButton: {
    width: '100%',
    height: 42,
    backgroundColor: '#609FFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
