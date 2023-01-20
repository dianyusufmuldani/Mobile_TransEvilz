import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import Indonesia from '../../../../assets/transferCard/openmoji_flag-indonesia.png';
import Singapore from '../../../../assets/transferCard/openmoji_flag-singapore.png';
import UnitedStates from '../../../../assets/transferCard/openmoji_flag-united-states.png';
import Australia from '../../../../assets/transferCard/openmoji_flag-australia.png';
import Japan from '../../../../assets/transferCard/openmoji_flag-japan.png';
import {getHistory} from '../../../service/redux/reducer/transferSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const CardRiwayat = ({
  onPress,
  countryToCountry,
  name,
  bank,
  accountNumber,
  dateTransfer,
  status,
  totalTransfer,
}) => {
  // const dispatch = useDispatch();
  // const stateTransfer = useSelector(state => state.transfer);
  const [imageCountery, setImageCountery] = useState(null);
  // useEffect(() => {
  //   dispatch(getHistory());
  //   // console.log('isi Histori', stateTransfer);
  // }, []);
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
    <TouchableOpacity onPress={onPress} style={styles.CardUser}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.ContainerImage}>
          <Image
            source={{
              uri: `https://robohash.org/${name}`,
            }}
            style={styles.StyleImage}
          />
        </View>
        <View style={styles.ContainerText}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image 
            source={imageCountery}
            style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text style={styles.TextCountryToCountry}>{countryToCountry}</Text>
          </View>
          <Text style={styles.TextStyle}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.MethodPayment}>{bank}</Text>
            <Text style={styles.MethodPayment}> - </Text>
            <Text style={styles.MethodPayment}>{accountNumber}</Text>
          </View>
          <Text style={styles.DatePayment}>{dateTransfer}</Text>
        </View>
      </View>
      <View>
        {status === 'Failed' ? (
          <View style={styles.ContainerStatusPaymentFailed}>
            <Text style={styles.StatusPayment}>{status}</Text>
          </View>
        ) : null}
        {status === 'In Progress' ? (
          <View style={styles.ContainerStatusPaymentProccess}>
            <Text style={styles.StatusPayment}>{status}</Text>
          </View>
        ) : null}
        {status === 'Success' ? (
          <View style={styles.ContainerStatusPayment}>
            <Text style={styles.StatusPayment}>{status}</Text>
          </View>
        ) : null}
        <Text style={styles.CountPayment}>{totalTransfer}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardRiwayat;
const styles = StyleSheet.create({
  CardUser: {
    width: 342,
    height: 94,
    borderWidth: 1,
    borderRadius: 20,

    paddingLeft: 13,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ContainerImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  StyleImage: {
    width: '100%',
    height: '100%',

    borderRadius: 60,
  },
  ContainerText: {
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 12,
    fontWeight: '700',
  },

  MethodPayment: {
    fontSize: 6,
    fontWeight: '500',
    color: '#3A3A3A',
  },
  DatePayment: {
    fontSize: 6,
    fontWeight: '400',
    color: '#98A5D3',
  },
  ContainerStatusPayment: {
    width: 38,
    height: 12,
    backgroundColor: '#2ACA10',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  StatusPayment: {
    fontSize: 6,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  CountPayment: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3A3A3A',
    marginRight: 20,
    marginTop: 15,
  },
  ContainerStatusPaymentFailed: {
    width: 38,
    height: 12,
    backgroundColor: '#DC3328',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  TextCountryToCountry: {
    fontSize: 8,
    fontWeight: '700',
  },
  ContainerStatusPaymentProccess: {
    backgroundColor: '#FFAD0E',
    width: 51,
    height: 12,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
