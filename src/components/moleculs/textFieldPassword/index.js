import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NegatifCase from '../../atoms/negatifCaseTextInput';
const TextFieldPassword = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  maxLength,
  validValue,
  isNegatifCase1,
  isNegatifCase2,
  textNegatifCase1,
  textNegatifCase2,
  textNegatifCase3,
  textNegatifCaseBlank,
}) => {
  const {t, i18n}=useTranslation()
  const [isShowPassword, setIsShowPassword] = useState(true);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <>
      <View
        style={
          value === '' ||
          (validValue === true&&value!==''&&value!==null) ||
          isNegatifCase1 === true ||
          isNegatifCase2 === true
            ? styles.ContainerError
            : styles.Container
        }>
        <TextInput
          placeholder={t(placeholder)}
          secureTextEntry={isShowPassword}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
        <TouchableOpacity
          onPress={handleShowPassword}
          style={styles.IconHidePassword}>
          {isShowPassword === true ? (
            <FontAwesome name="eye-slash" size={20} color={'blue'} />
          ) : (
            <FontAwesome name="eye" size={20} color={'blue'} />
          )}
          {/* <IconHidePassword /> */}
        </TouchableOpacity>
      </View>
      <NegatifCase text={t(textNegatifCaseBlank)} value={value} />

      {isNegatifCase1 ? (
        <NegatifCase text={t(textNegatifCase1)} value={''} />
      ) : null}
      {isNegatifCase2 ? (
        <NegatifCase text={t(textNegatifCase2)} value={''} />
      ) : null}
      {validValue === true&&value!==''&&value!==null ? (
        <NegatifCase text={t(textNegatifCase3)} value={''} />
      ) : null}
    </>
  );
};

export default TextFieldPassword;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    width: '100%',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#F1F7FF',
  },
  IconHidePassword: {
    position: 'absolute',
    right: 12,
    top: 16,
    transform:[{rotateY:'180deg'}]
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
