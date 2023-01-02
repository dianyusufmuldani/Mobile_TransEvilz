//Import Library
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import BlueButton from '../../components/moleculs/blueButton';
import HeaderPages from '../../components/moleculs/headerPages';

//Import Assets
import {Colours} from '../../helpers/colours';

const TransactionMethod = ({navigation}) => {
  const [bankAccount, setBankAccount] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [debitCard, setDebitCard] = useState(false);
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'BCA'},
    {key: '2', value: 'BSI'},
    {key: '3', value: 'BRI'},
    {key: '4', value: 'Mandiri'},
  ];
  const handleButtonBankAccount = () => {
    setBankAccount(true);
    setCreditCard(false);
    setDebitCard(false);
  };
  const handleButtonCreditCard = () => {
    setCreditCard(true);
    setBankAccount(false);
    setDebitCard(false);
  };
  const handleButtonDebitCard = () => {
    setDebitCard(true);
    setBankAccount(false);
    setCreditCard(false);
  };
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
        <TextDefault value={'Metode Pembayaran'} />

        <View style={styles.ContainerRadioButton}>
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
            search={false}
            dropdownStyles={{backgroundColor: '#F1F7FF', borderWidth: 0}}
          />
        </View>
      </View>
      <View style={styles.ContainerSelanjutnya}>
        <BlueButton
          value={'Selanjutnya'}
          isButton={true}
          onPress={() => navigation.navigate('TransactionSuccess')}
        />
      </View>
    </View>
  );
};

export default TransactionMethod;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    alignSelf: 'center',
    width: '90%',
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
    marginBottom: 41,
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
  ContainerSelanjutnya: {
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  ContainerRadioButton: {
    marginTop: 20,
  },
});
