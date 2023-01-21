//Import Library
import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Clipboard from '@react-native-community/clipboard';
import CountDown from 'react-native-countdown-fixed';

//Import Component
import TextDefault from '../../components/atoms/textDefault';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';

//Import Assets
import ImageSuccess from '../../../assets/transactionSuccess/check_mark.png';
import {
  getHistory,
  setAccountNumber,
  setCountryDestination,
  setIdTransactionLocal,
  setNameReceiver,
  setNominalTransferLocal,
  setTransactionLocal,
} from '../../service/redux/reducer/transferSlice';
import IconCopy from '../../../assets/transactionSuccess/copy.svg';
import {formatCurrencyWithoutComma} from '../../helpers/formatter/currencyFormatter';
import ToastedSuccess from '../../components/moleculs/toastSuccess';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
const {width, height} = Dimensions.get('window');

const TransactionSuccess = ({navigation}) => {
  const {t, i18n}=useTranslation()
  const dispatch = useDispatch();
  const stateTransfer = useSelector(state => state.transfer);
  const stateUsers = useSelector(state => state.users);
  const refTimer = useRef();

  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = timerFlag => {
    setTimerEnd(timerFlag);
    console.log('Timeout', timerEnd);
  };
  const handleButtonFooter = () => {
    dispatch(setNominalTransferLocal(null));
    dispatch(setNameReceiver(null));
    dispatch(setAccountNumber(null));
    dispatch(setTransactionLocal(null));
    dispatch(getHistory());
    navigation.navigate('HomepageNav');
  };

  return (
    <View style={styles.Container}>
      {/* <ToastedSuccess textToasted={'Copied'} visible={true} width={150} height={50}/> */}
      <View style={styles.ContainerBody}>
        <View style={styles.ContainerImage}>
          <Image source={ImageSuccess} />
        </View>
        <View style={styles.ContainerTextTitle}>
          <Text style={styles.TextTitle}>
            {t('Congratulations')} {stateUsers.data.user.fullname}, {t('your process is successful')}{' '}
          </Text>
        </View>
        <Text style={styles.TextDescription}>
          {t('Complete the payment before')}{' '}
        </Text>
        <CountDown
          until={84610}
          onFinish={() => console.log('END')}
          onPress={() => alert('hello')}
          size={18}
          digitTxtStyle={{color: '#2ACA10'}}
          digitStyle={{
            backgroundColor: 'transparent',
            marginHorizontal: 25,
            left: -20,
          }}
          separatorStyle={{color: '#2ACA10'}}
          timeLabels={{h: `${t('Hours')}`, m: `${t('Minutes')}`, s: `${t('Seconds')}`}}
          timeToShow={['H', 'M', 'S']}
          timeLabelStyle={{
            color: '#2ACA10',
            fontSize: 16,
            right: -23,
            top: -36,
            fontWeight: '700',
          }}
        />

        <View style={styles.ContainerPayment}>
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={`Recipient's name`} />
          </View>
          <TextDefault value={stateTransfer.idTransactionLocal.recipient_name} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Bank type'} />
          </View>
          <TextDefault value={stateTransfer.idTransactionLocal.bank} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Transaction Type'} />
          </View>
          <TextDefault value={stateTransfer.idTransactionLocal.type_currency} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'No. Account'} />
          </View>
          <TextDefault value={stateTransfer.idTransactionLocal.recipient_norek} />
          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Virtual Account'} />
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TextDefault value={stateTransfer.idTransactionLocal.virtual_account} />
            <TouchableOpacity
              onPress={() => Clipboard.setString('9999-5678-0033-1121-314')}>
              <IconCopy style={{marginLeft: 10}} />
            </TouchableOpacity>
          </View>

          <View style={styles.ContainerTextDescription}>
            <TextDescriptionOnBoarding value={'Total'} />
          </View>
          <Text style={styles.TextCount}>
            {formatCurrencyWithoutComma(stateTransfer.idTransactionLocal.total)}
          </Text>
        </View>
      </View>
      <View style={styles.ContainerButtonFooter}>
        <BlueButton
          value={'Return To Home'}
          isButton={true}
          onPress={handleButtonFooter}
        />
      </View>
    </View>
  );
};

export default TransactionSuccess;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ContainerImage: {
    marginTop: 24,
    marginBottom: 25,
  },
  TextTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3A3A3A',
    textAlign: 'center',
  },
  TextDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#98A5D3',
  },
  ContainerTextTitle: {
    marginBottom: 22,
    width: '70%',
  },
  ContainerPayment: {
    width: '90%',
    height: 300,
    borderWidth: 1,
    borderColor: '#2ACA10',
    borderRadius: 10,
  },
  ContainerButtonFooter: {
    width: '90%',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  ContainerTextDescription: {
    marginVertical: 5,
  },
  TextCount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2ACA10',
    textAlign: 'center',
  },
});
