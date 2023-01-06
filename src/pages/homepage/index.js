//Import Library
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  Image
} from 'react-native';
// import {LineChart} from 'react-native-chart-kit';
// import {Dimensions} from 'react-native';

//Import Component
import {Colours} from '../../helpers/colours';
// import CardKurs from '../../components/organism/cardKurs';

//Import Assets
// import ImageCard from '../../../assets/homepage/Card.png';
// import ImageBankAccount from '../../../assets/homepage/BankAccount.png';
// import IconHome from '../../../assets/homepage/homeicon.svg';
import ImageGrafik from '../../../assets/homepage/image_analytics.png'
import IconAustralia from '../../../assets/registration/openmoji_flag-australia.svg'
import IconJapan from '../../../assets/registration/openmoji_flag-japan.svg'
import IconSingapore from '../../../assets/registration/openmoji_flag-singapore.svg'
import IconUS from '../../../assets/registration/openmoji_flag-united-states.svg'
import IconIndonesia from '../../../assets/registration/openmoji_flag-indonesia.svg'

const Homepage = ({navigation}) => {
  const handleBankAccountButton = () => {
    navigation.navigate('TransferCard');
  };
  const backAction = () => {
    BackHandler.removeEventListener();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  return (
    <View style={styles.Container}>
      <ScrollView>
      <View style={styles.CardHeader}>
        <View style={styles.ContainerHeader}>
          <Text style={styles.TitleHomePage}>Hai, Dinda Salsabila</Text>
          <Text style={styles.TextGreeting}>Selamat Datang di TransEvilz</Text>

          <Text style={styles.TextMethod}>Transaksi Terakhir :</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.ContainerCardTransaction} >
              <View style={styles.WrapperCardTransaction}>
                <IconAustralia/>
                <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
              <Text style={styles.CountCurrency}>Rp 1.000.000</Text>
            </View>
            <View style={styles.ContainerCardTransaction} >
              <View style={styles.WrapperCardTransaction}>
                <IconAustralia/>
                <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
              <Text style={styles.CountCurrency}>Rp 1.000.000</Text>
            </View>
            <View style={styles.ContainerCardTransaction} >
              <View style={styles.WrapperCardTransaction}>
                <IconAustralia/>
                <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
              <Text style={styles.CountCurrency}>Rp 1.000.000</Text>
            </View>
            <View style={styles.ContainerCardTransaction} >
              <View style={styles.WrapperCardTransaction}>
                <IconAustralia/>
                <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
              <Text style={styles.CountCurrency}>Rp 1.000.000</Text>
            </View>
            <View style={styles.ContainerCardTransaction} >
              <View style={styles.WrapperCardTransaction}>
                <IconAustralia/>
                <Text style={styles.CurrencyToCurrency}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TransactionBank}>BCC - 123412341234</Text>
              <Text style={styles.CountCurrency}>Rp 1.000.000</Text>
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
            onPress={()=>navigation.navigate('TransferCardInternational')}>

            <Text style={styles.TextBankAccount}>Transfer Internasional</Text>
          </TouchableOpacity>
        </View>
      </View>
 
        <View style={styles.ContainerImageGrafik}>
        

        <Image source={ImageGrafik}/>
        
        </View>
        <View style={styles.ContainerBody}>
        <View style={styles.ContainerTitleBody}>
          <Text style={styles.TextKurs}>Kurs Mata Uang</Text>
          
          {/* <Text style={styles.DescriptionKurs}>Hari ini</Text> */}
        </View>
        <Text style={styles.CurrencytoCurrencyBody}>USD to IDR</Text>

        </View>
      {/* <LineChart
        data={{
          labels: ['Jul', 'Ags', 'Sep', 'April', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 2,
          color: (opacity = 1) => '#2075F3',
          labelColor: (opacity = 1) => '#000000',
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'transparent',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        /> */}
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
    top:-545
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
    paddingLeft:10,
    paddingTop:5
  },
  CountCurrency:{
    color:'#2075F3', fontSize:20,fontWeight:'700',
    paddingTop:10
  },
  CurrencyToCurrency:{
    fontSize:12,
    fontWeight:'700',
    color:'#585E67',
  },
  TransactionBank:{
    fontSize:12,
    fontWeight:'500',
    color:'#585E67'
  },
  WrapperCardTransaction:{
    flexDirection:'row', alignItems:'center'
  },
  CurrencytoCurrencyBody:{
    fontSize:14,
    fontWeight:'700',
    color:'#3A3A3A'
  },
  ContainerImageGrafik:{
    marginTop:30
  }
});
