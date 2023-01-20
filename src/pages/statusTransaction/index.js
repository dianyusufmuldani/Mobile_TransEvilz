import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import HeaderPages from '../../components/moleculs/headerPages';
import HeaderPagesWhite from '../../components/moleculs/headerPagesWhite';
import CountDown from 'react-native-countdown-fixed';
import ImageBgStatus from '../../../assets/statusTransaction/cardStatusTransaction.png';
import ImageProccess from '../../../assets/statusTransaction/uim_process.png';
import ImageFailed from '../../../assets/statusTransaction/cross_icon.png';
import ImageSuccess from '../../../assets/statusTransaction/check_mark.png';
import IconTransEvilz from '../../../assets/statusTransaction/logo_transevilz.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setIdTransactionLocal } from '../../service/redux/reducer/transferSlice';
import { formatCurrencyWithoutComma } from '../../helpers/formatter/currencyFormatter';

const StatusTransaction = ({navigation}) => {
  const dispatch=useDispatch()
  const stateTransfer=useSelector(state=>state.transfer)
  return (
    <View style={{flex: 1}}>
      <View style={styles.ContainerBlueBackgrund}>
        <HeaderPagesWhite 
        onPress={() =>{ 
          navigation.goBack()
          dispatch(setIdTransactionLocal(null))}} />
        {stateTransfer.idTransactionLocal.status==='In Progress'?
        <View style={styles.ContainerTitle}>
          
          <Text style={styles.TextTitle}>Transaksi Anda Dalam Proses</Text>

          <Text style={styles.TextDescriptionTitle}>
            Selesaikan Pembayaran sebelum{' '}
          </Text>
          <CountDown
            until={84610}
            onFinish={() => console.log('END')}
            onPress={() => alert('hello')}
            size={18}
            digitTxtStyle={{color: '#FFFFFF'}}
            digitStyle={{
              backgroundColor: 'transparent',
              marginHorizontal: 15,
              left: -20,
            }}
            separatorStyle={{color: '#2ACA10'}}
            timeLabels={{h: 'Jam', m: 'Menit', s: 'Detik'}}
            timeToShow={['H', 'M', 'S']}
            timeLabelStyle={{
              color: '#FFFFFF',
              fontSize: 16,
              right: -15,
              top: -36,
              fontWeight: '700',
            }}
          />
          
        </View>:null
        }
        {stateTransfer.idTransactionLocal.status==='Failed'?
        <View style={styles.ContainerTitle}>
          
          <Text style={styles.TextTitle}>Transaksi Anda Gagal</Text>

          <Text style={styles.TextDescriptionTitle}>
          Proses Transaksi Anda tidak Berhasil
          </Text>
          <Text style={{fontSize:16, fontWeight:'700', color:'#FFFFFF', alignSelf:'center'}}>
            Silakan Lakukan Transaksi Ulang
          </Text>
                   
        </View>:null
        }
        {stateTransfer.idTransactionLocal.status==='Success'?
        <View style={styles.ContainerTitle}>
          
          <Text style={styles.TextTitle}>Transaksi Anda Berhasil</Text>       
        </View>:null
        }
      </View>
      <View style={styles.Container}>
        <Image
          source={ImageBgStatus}
          style={{top: -90, position: 'absolute'}}
        />
        {stateTransfer.idTransactionLocal.status==='In Progress'?
        <Image
          source={ImageProccess}
          style={{top: -140, position: 'absolute'}}
        />:null
        }
        {stateTransfer.idTransactionLocal.status==='Failed'?
        <Image
          source={ImageFailed}
          style={{top: -140, position: 'absolute'}}
        />:null
        }
        {stateTransfer.idTransactionLocal.status==='Success'?
        <Image
          source={ImageSuccess}
          style={{top: -140, position: 'absolute'}}
        />:null
        }
        <IconTransEvilz style={{top: -50, left: 40, position: 'absolute'}} />
        <View style={{width: '85%'}}>
          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Tanggal</Text>
            <Text style={styles.TextCardValue}>{stateTransfer.idTransactionLocal.transaction_date}</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Nama Penerima</Text>
            <Text style={styles.TextCardValue}>{stateTransfer.idTransactionLocal.recipient_name}</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Jenis Bank</Text>
            <Text style={styles.TextCardValue}>{stateTransfer.idTransactionLocal.bank}</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Tipe Transaksi</Text>
            <Text style={styles.TextCardValue}>{stateTransfer.idTransactionLocal.type_currency}</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>No Rekening</Text>
            <Text style={styles.TextCardValue}>{stateTransfer.idTransactionLocal.recipient_norek}</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Jenis Transaksi</Text>
            <Text style={styles.TextCardValue}>{stateTransfer.idTransactionLocal.type_transaction}</Text>
          </View>
          {stateTransfer.idTransactionLocal.status==='In Progress'?
          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Virtual Akun</Text>
            <Text style={styles.TextCardValue}>{stateTransfer.idTransactionLocal.virtual_account}</Text>
          </View>:
          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}></Text>
            <Text style={styles.TextCardValue}></Text>
          </View>
          }
          <View
            style={{
              borderWidth: 1,
              borderColor: '#9EB9FF',
              borderStyle: 'dashed',
              marginBottom: 20,
            }}
          />

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Nominal</Text>
            <Text style={styles.TextCardValue}>{formatCurrencyWithoutComma(stateTransfer.idTransactionLocal.nominal)}</Text>
          </View>

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCard}>Biaya Admin</Text>
            <Text style={styles.TextCardValue}>{formatCurrencyWithoutComma(stateTransfer.idTransactionLocal.admin_fee)}</Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#9EB9FF',
              borderStyle: 'dashed',
              marginBottom: 20,
              width: '92%',
              alignSelf: 'center',
            }}
          />

          <View style={styles.ContainerSpaceBetween}>
            <Text style={styles.TextCardValue}>Total</Text>
            {stateTransfer.idTransactionLocal.status==='In Progress'?
            <Text style={styles.TextCardTotal}>{formatCurrencyWithoutComma(stateTransfer.idTransactionLocal.total)}</Text>:null
          }
          {stateTransfer.idTransactionLocal.status==='Failed'?
            <Text style={styles.TextCardTotalFailed}>{formatCurrencyWithoutComma(stateTransfer.idTransactionLocal.total)}</Text>:null
          }
          {stateTransfer.idTransactionLocal.status==='Success'?
            <Text style={styles.TextCardTotalSuccess}>{formatCurrencyWithoutComma(stateTransfer.idTransactionLocal.total)}</Text>:null
          }
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatusTransaction;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#EFEFEF',
    flex: 0.55,
    alignItems: 'center',
  },
  ContainerBlueBackgrund: {
    backgroundColor: '#2075F3',
    flex: 0.45,
    alignItems: 'center',
  },
  ContainerTitle: {
    width: '70%',
  },
  TextTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    width:'80%',
    alignSelf:'center'
  },
  TextDescriptionTitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 15,
  },
  TextCard: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  TextCardValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
  },
  ContainerSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  TextCardTotal: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFAD0E',
  },
  TextCardTotalFailed: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DC3328',
  },
  TextCardTotalSuccess: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2ACA10',
  },
});
