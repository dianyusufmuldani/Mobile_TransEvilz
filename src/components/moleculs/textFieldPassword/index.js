import React, {useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconHidePassword from '../../../../assets/login/IconHidePassword.svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const TextFieldPassword = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <View style={styles.Container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isShowPassword}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      <TouchableOpacity
        onPress={handleShowPassword}
        style={styles.IconHidePassword}>
        {isShowPassword == true ? (
          <FontAwesome name="eye-slash" size={20} color={'blue'} />
        ) : (
          <FontAwesome name="eye" size={20} color={'blue'} />
        )}
        {/* <IconHidePassword /> */}
      </TouchableOpacity>
    </View>
  );
};

export default TextFieldPassword;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F7FF',
    borderRadius: 10,
    width: '100%',
  },
  IconHidePassword: {
    position: 'absolute',
    right: 12,
    top: 16,
  },
});