import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const BlueButton = ({value, onPress, isButton, positionOn, positionOff}) => {
  return (
    <View>
      {isButton === true ? (
        <TouchableOpacity style={{width: '100%',
        height: 42,
        backgroundColor: '#2075F3',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position:positionOn,
        bottom: 0}} onPress={onPress}>
          <Text style={styles.TextTrue}>{value}</Text>
        </TouchableOpacity>
      ) : (
        <View style={{width: '100%',
        height: 42,
        backgroundColor: '#D8D8D8',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position:positionOff,
        bottom: 0}} onPress={onPress}>
          <Text style={styles.Text}>{value}</Text>
        </View>
      )}
    </View>
  );
};

export default BlueButton;
const styles = StyleSheet.create({
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
