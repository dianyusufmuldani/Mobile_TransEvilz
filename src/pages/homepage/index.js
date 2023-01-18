//Import Library
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  Image,
} from 'react-native';

//Import Component
import {Colours} from '../../helpers/colours';

//Import Assets
import ImageGrafik from '../../../assets/homepage/image_analytics.png';
import IconAustralia from '../../../assets/registration/openmoji_flag-australia.svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTransfer,
  setCountryDestination,
} from '../../service/redux/reducer/transferSlice';
import {getLogin} from '../../service/redux/reducer/usersSlice';
import ImageUser from '../../../assets/user/kakashi.jpg';

const Homepage = ({navigation}) => {
  const dispatch = useDispatch();
  const stateTransfer = useSelector(state => state.transfer);
  const stateUsers = useSelector(state => state.users);
  const handleBankAccountButton = () => {
    dispatch(setCountryDestination(null));
    navigation.navigate('TransferCard');
  };
  const handleButtonTransactionInternational = () => {


    dispatch(setCountryDestination('USD'));
    navigation.navigate('TransferCardInternational');
  };
  const backAction = () => {
    BackHandler.removeEventListener();
    return true;
  };

  // useEffect(()=>{
  //   const request = {
  //     email,
  //     password
  //   };
  // dispatch(getLogin(request))
  // },[])

  useEffect(() => {
    // const request={}
    // dispatch(getTransfer(request))
    console.log('isi State Transfer', stateUsers.data.accessToken);
  }, []);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    // return () =>
    //   BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.CardHeader}>
          <View style={styles.ContainerHeader}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.TitleHomePage}>
                  Hai, {stateUsers.data.user.fullname}
                </Text>
                <Text style={styles.TextGreeting}>
                  Selamat Datang di TransEvilz
                </Text>
              </View>
              <Image source=
              {{
                uri: `https://robohash.org/${stateUsers.data.user.fullname}`
              }}
              style={{width: 40, height: 40, borderRadius: 40, bottom: -10}}
              />
            </View>

            <Text style={styles.TextMethod}>Transaksi Terakhir :</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.ContainerCardTransaction}>
                <View style={styles.WrapperCardTransaction}>
                  <IconAustralia />
                  <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
                </View>
                <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
                <Text style={styles.CountCurrency}>Rp 1,000,000.00</Text>
              </View>
              <View style={styles.ContainerCardTransaction}>
                <View style={styles.WrapperCardTransaction}>
                  <IconAustralia />
                  <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
                </View>
                <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
                <Text style={styles.CountCurrency}>Rp 1,000,000.00</Text>
              </View>
              <View style={styles.ContainerCardTransaction}>
                <View style={styles.WrapperCardTransaction}>
                  <IconAustralia />
                  <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
                </View>
                <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
                <Text style={styles.CountCurrency}>Rp 1,000,000.00</Text>
              </View>
              <View style={styles.ContainerCardTransaction}>
                <View style={styles.WrapperCardTransaction}>
                  <IconAustralia />
                  <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
                </View>
                <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
                <Text style={styles.CountCurrency}>Rp 1,000,000.00</Text>
              </View>
              <View style={styles.ContainerCardTransaction}>
                <View style={styles.WrapperCardTransaction}>
                  <IconAustralia />
                  <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
                </View>
                <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
                <Text style={styles.CountCurrency}>Rp 1,000,000.00</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.ContainerViewButton}>
            <TouchableOpacity
              style={styles.ContainerImageMethod}
              onPress={handleBankAccountButton}>
              <Text style={styles.TextBankAccount}>Transfer Local</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ContainerImageMethod}
              onPress={handleButtonTransactionInternational}>
              <Text style={styles.TextBankAccount}>Transfer Internasional</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ContainerImageGrafik}>
          <Image source={ImageGrafik} />
        </View>
        <View style={styles.ContainerBody}>
          <View style={styles.ContainerTitleBody}>
            <Text style={styles.TextKurs}>Kurs Mata Uang</Text>
          </View>
          <Text style={styles.CurrencytoCurrencyBody}>USD to IDR</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Homepage;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  CardHeader: {
    width: '100%',
    backgroundColor: '#2075F3',
    height: 273,
    borderRadius: 30,
  },
  ContainerHeader: {
    width: '90%',
    marginTop: 28,
    alignSelf: 'center',
  },
  TitleHomePage: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  TextGreeting: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  TextMethod: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 30,
  },
  ContainerSelectedMethod: {
    marginTop: 8,
  },

  ContainerBody: {
    width: '90%',
    alignSelf: 'center',
    // marginTop: 48,
    top: -545,
  },
  TextKurs: {
    color: '#2075F3',
    fontSize: 18,
    fontWeight: '700',
  },
  ContainerTitleBody: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  DescriptionKurs: {
    fontSize: 10,
    fontWeight: '700',
    color: '#86B6FF',
  },
  ContainerImageMethod: {
    width: '45%',
    alignItems: 'center',
    backgroundColor: '#FFAD0E',
    borderRadius: 10,
    height: 48,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  TextBankAccount: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  ContainerViewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -20,
    position: 'absolute',
    alignSelf: 'center',
  },
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
  CurrencytoCurrencyBody: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3A3A3A',
  },
  ContainerImageGrafik: {
    marginTop: 30,
  },
});
