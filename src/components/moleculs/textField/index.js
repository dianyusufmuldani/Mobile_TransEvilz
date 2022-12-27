import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

const TextField = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  autoCapitalize,
  multiline,
  onContentSizeChange,
  style,
  numberOfLines,
}) => {
  return (
    <>
      <View style={styles.Container}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          onContentSizeChange={onContentSizeChange}
          style={style}
          numberOfLines={numberOfLines}
        />
      </View>
      {value == '' ? (
        <Text style={styles.NegatifCase}>Anda Harus mengisi bagian ini</Text>
      ) : null}
    </>
  );
};

export default TextField;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    width: '100%',
  },
  NegatifCase: {
    fontSize: 14,
    fontWeight: '400',
    color: '#DC3328',
  },
});