import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

const TextFieldEmail = ({
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
  );
};

export default TextFieldEmail;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    width: '100%',
  },
});
