import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Indonesia from '../../../../assets/transferCard/openmoji_flag-indonesia.png';
import Singapore from '../../../../assets/transferCard/openmoji_flag-singapore.png';
import UnitedStates from '../../../../assets/transferCard/openmoji_flag-united-states.png';
import Australia from '../../../../assets/transferCard/openmoji_flag-australia.png';
import Japan from '../../../../assets/transferCard/openmoji_flag-japan.png';
import {useState} from 'react';
import {useEffect} from 'react';

const CardLastTransactionHomePages = ({
  countryToCountry,
  bank,
  accountNumber,
  totalPayment,
}) => {
  const [imageCountery, setImageCountery] = useState(null);
  useEffect(() => {
    if (countryToCountry === 'IDR to IDR') {
      setImageCountery(Indonesia);
    } else if (countryToCountry === 'IDR to AUD') {
      setImageCountery(Australia);
    } else if (countryToCountry === 'IDR to USD') {
      setImageCountery(UnitedStates);
    } else if (countryToCountry === 'IDR to SGD') {
      setImageCountery(Singapore);
    } else if (countryToCountry === 'IDR to JPY') {
      setImageCountery(Japan);
    }
  }, [imageCountery]);
  return (
    <View style={styles.ContainerCardTransaction}>
      <View style={styles.WrapperCardTransaction}>
        <Image source={imageCountery} />
        <Text style={styles.CurrencyToCurrency}>{countryToCountry}</Text>
      </View>
      <Text style={styles.TransactionBank}>
        {bank} - {accountNumber}
      </Text>
      <Text style={styles.CountCurrency}>{totalPayment}</Text>
    </View>
  );
};

export default CardLastTransactionHomePages;
const styles = StyleSheet.create({
  ContainerCardTransaction: {
    width: 180,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginRight: 15,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
  },
  CountCurrency: {
    color: '#2075F3',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 10,
  },
  CurrencyToCurrency: {
    fontSize: 12,
    fontWeight: '700',
    color: '#585E67',
  },
  TransactionBank: {
    fontSize: 12,
    fontWeight: '500',
    color: '#585E67',
  },
  WrapperCardTransaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
