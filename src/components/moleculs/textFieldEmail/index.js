import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import NegatifCase from '../../atoms/negatifCaseTextInput';

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
  validValue,
  isNegatifCase1,
  isNegatifCase2,
  textNegatifCase1,
  textNegatifCase2,
  textNegatifCase3,
  textNegatifCaseBlank,
}) => {
  return (
    <>
      <View
        style={
          value === '' ||
          validValue === true ||
          isNegatifCase1 === true ||
          isNegatifCase2 === true
            ? styles.ContainerTextInputError
            : styles.Container
        }>
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

      <NegatifCase text={textNegatifCaseBlank} value={value} />

      {isNegatifCase1 ? (
        <NegatifCase text={textNegatifCase1} value={''} />
      ) : null}
      {isNegatifCase2 ? (
        <NegatifCase text={textNegatifCase2} value={''} />
      ) : null}
      {validValue === true ? (
        <NegatifCase text={textNegatifCase3} value={''} />
      ) : null}
    </>
  );
};

export default TextFieldEmail;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    width: '100%',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#F1F7FF',
  },
  ContainerTextInputError: {
    backgroundColor: '#F1F7FF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    paddingLeft: 10,
    width: '100%',
  },
});
