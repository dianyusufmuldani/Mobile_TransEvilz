import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import NegatifCase from '../../atoms/negatifCaseTextInput';

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
  editable,
  maxLength,
  isNegatifCase1,
  isNegatifCase2,
  textNegatifCase1,
  textNegatifCase2,
  textNegatifCaseBlank
}) => {
  return (
    <>
      <View
        style={value === '' ||
        isNegatifCase1===true ||
        isNegatifCase2===true ? styles.ContainerError : styles.Container}>
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
      <NegatifCase text={textNegatifCaseBlank} value={value} />
   
    {isNegatifCase1 ?
     <NegatifCase text={textNegatifCase1} value={''} />:null
    }
    {isNegatifCase2 ?
     <NegatifCase text={textNegatifCase2} value={''} />:null
    }

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
    borderWidth: 1,
    borderColor: '#F1F7FF',
  },
  NegatifCase: {
    fontSize: 14,
    fontWeight: '400',
    color: '#DC3328',
  },
  ContainerError: {
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    width: '100%',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
});
