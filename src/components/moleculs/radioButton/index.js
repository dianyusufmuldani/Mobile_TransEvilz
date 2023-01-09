import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const RadioButton = ({Value1, Value2, TextRadio1, TextRadio2, selected}) => {
  const [isRadio1, setIsRadio1] = useState(true);
  const [isRadio2, setIsRadio2] = useState(false);
  const [value, setValue] = useState(null);
  console.log('isi Value', value);

  const handleRadio1 = () => {
    setIsRadio1(true);
    setIsRadio2(false);
    setValue({Value1});
  };
  const handleRadio2 = () => {
    setIsRadio1(false);
    setIsRadio2(true);
    setValue({Value2});
  };
  return (
    <>
      <View style={styles.Cover}>
        <View style={styles.Container}>
          <TouchableOpacity onPress={handleRadio1}>
            <View style={styles.ContainerRadio}>
              {isRadio1 == true ? <View style={styles.RadioOn} /> : null}
            </View>
          </TouchableOpacity>
          <Text style={styles.TextRadio}>{TextRadio1}</Text>
        </View>

        <View style={styles.Container}>
          <TouchableOpacity onPress={handleRadio2}>
            <View style={styles.ContainerRadio}>
              {isRadio2 == true ? <View style={styles.RadioOn} /> : null}
            </View>
          </TouchableOpacity>
          <Text style={styles.TextRadio}>{TextRadio2}</Text>
        </View>
      </View>
    </>
  );
};

export default RadioButton;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ContainerRadio: {
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextRadio: {
    marginLeft: 10,
    color: '#000000',
  },
  Cover: {
    flexDirection: 'row',
    width: '50%',
  },
  RadioOn: {
    width: 10,
    height: 10,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
});
