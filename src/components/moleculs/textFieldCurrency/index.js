import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import IconIndonesia from '../../../../assets/transferCard/openmoji_flag-indonesia.svg';
import IconUSA from '../../../../assets/transferCard/openmoji_flag-united-states.svg';

const TextFieldCurrency = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  IconCurrency,
}) => {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Indonesia'},
    {key: '2', value: 'USA'},
  ];
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerTextInput}>
        <View style={styles.Country}>
          <SelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            boxStyles={{
              backgroundColor: '#F1F7FF',
              borderWidth: 0,
              width: '100%',
            }}
            placeholder={IconCurrency}
            inputStyles={{marginLeft: -15}}
          />
        </View>
        <View style={styles.Currency}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
          />
        </View>
      </View>
    </View>
  );
};

export default TextFieldCurrency;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F1F7FF',
    width: '100%',
  },
  ContainerTextInput: {
    flexDirection: 'row',
  },
  Country: {
    width: '20%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  Currency: {
    width: '80%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
