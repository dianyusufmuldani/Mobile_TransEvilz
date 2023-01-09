import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

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
  NegatifCase,
  editable,
  maxLength,
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
          editable={editable}
          maxLength={maxLength}
        />
      </View>
      {/* {value == '' ? (
        <Text style={styles.NegatifCase}>{NegatifCase}</Text>
      ) : null} */}
    </>
  );
};

export default TextField;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    width: '100%',
    paddingLeft: 10,
  },
  NegatifCase: {
    fontSize: 14,
    fontWeight: '400',
    color: '#DC3328',
  },
});
