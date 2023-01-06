//Import Library
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

//Import Component
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import TextDefault from '../../components/atoms/textDefault';
import BlueButton from '../../components/moleculs/blueButton';
import HeaderPages from '../../components/moleculs/headerPages';
import TextField from '../../components/moleculs/textField';
import {Colours} from '../../helpers/colours';

//Import Assets

const TransactionInternational = ({navigation}) => {
  const [name, setName] = useState(null);
  const [noRek, setNoRek] = useState(null);
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'BCA'},
    {key: '2', value: 'BSI'},
    {key: '3', value: 'BRI'},
    {key: '4', value: 'Mandiri'},
  ];
  const handleSelanjutnya = () => {
    navigation.navigate('TransactionMethod');
  };
  const handleReset = () => {
    setSelected('');
    setName(null);
    setNoRek(null);
  };
  useEffect(() => {
    console.log(selected);
  });
  return (
    <View style={styles.Container}>
      <HeaderPages
        value={'Akun Bank'}
        hideShowTitle={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ContainerBody}>
        <View style={styles.ContainerCountTransaction}>
          <Text style={styles.TextTotal}>Total Transaksi</Text>
          <Text style={styles.TextIDR}>1.000.000 IDR</Text>
        </View>

        <View style={styles.FormInput}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Pilih Bank '} />
            <RequirementSymbols />
          </View>
          <SelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            boxStyles={{
              backgroundColor: '#F1F7FF',
              borderWidth: 0,
              width: '100%',
            }}
            placeholder="Pilih Bank"
            inputStyles={{marginLeft: -15}}
            search={false}
            dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
          />
        </View>

        <View style={styles.FormInput}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Nama Penerima '} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Masukkan Nama Penerima'}
            value={name}
            onChangeText={value => setName(value)}
          />
        </View>

        <View style={styles.FormInput}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'No. Rekening'} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Masukkan No. Rekening'}
            value={noRek}
            onChangeText={value => setNoRek(value)}
          />
        </View>
      </View>
      <View style={styles.ContainerButton}>
        <TouchableOpacity style={styles.ButtonAturUlang} onPress={handleReset}>
          <Text style={styles.TextAturUlang}>Atur Ulang</Text>
        </TouchableOpacity>
        <View style={styles.ButtonSelanjutnya}>
          <BlueButton
            value={'Selanjutnya'}
            isButton={true}
            onPress={handleSelanjutnya}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionInternational;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    width: '90%',
    alignSelf: 'center',
  },
  ContainerButtonMethod: {
    flexDirection: 'row',
    marginTop: 40,
  },
  ButtonMethod: {
    width: 171,
    height: 48,
    backgroundColor: '#2ACA10',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
  },
  ButtonMethodOff: {
    width: 171,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    borderWidth: 1,
    borderColor: '#2ACA10',
  },
  TextButtonMethodOff: {
    fontSize: 16,
    fontWeight: '700',
    color: '#C1C3C7',
  },
  TextButtonMethod: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  ContainerCountTransaction: {
    backgroundColor: '#DCBE23',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 115,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
  },
  TextTotal: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  TextIDR: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  FormInput: {
    marginTop: 30,
  },
  ContainerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  ButtonAturUlang: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DC3328',
    borderRadius: 8,
  },
  ButtonSelanjutnya: {
    width: '45%',
  },
  TextAturUlang: {
    color: '#DC3328',
    fontSize: 16,
    fontWeight: '700',
  },
});
