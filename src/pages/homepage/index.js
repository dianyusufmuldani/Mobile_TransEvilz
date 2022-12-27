//Import Library
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

//Import Component
import {Colours} from '../../helpers/colours';
import CardKurs from '../../components/organism/cardKurs';

//Import Assets
import ImageCard from '../../../assets/homepage/Card.png';
import ImageBankAccount from '../../../assets/homepage/BankAccount.png';
import IconHome from '../../../assets/homepage/homeicon.svg';

const Homepage = ({navigation}) => {
  const handleBankAccountButton = () => {
    navigation.navigate('TransferCard');
  };
  return (
    <View style={styles.Container}>
      <View style={styles.CardHeader}>
        <View style={styles.ContainerHeader}>
          <Text style={styles.TitleHomePage}>Hai, Dinda Salsabila</Text>
          <Text style={styles.TextGreeting}>Selamat Datang di TransEvilz</Text>

          <Text style={styles.TextMethod}>Metode Transfer</Text>

          <TouchableOpacity
            style={styles.ContainerImageMethod}
            onPress={handleBankAccountButton}>
            <IconHome />
            <Text style={styles.TextBankAccount}>Akun Bank</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ContainerBody}>
        <View style={styles.ContainerTitleBody}>
          <Text style={styles.TextKurs}>Kurs Mata Uang</Text>
          <Text style={styles.DescriptionKurs}>Hari ini</Text>
        </View>
        <CardKurs kursUang={true} />
        <CardKurs kursUang={false} />
        <CardKurs kursUang={false} />
        <CardKurs kursUang={true} />
      </View>
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
    height: 233,
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
    fontSize: 10,
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
    marginTop: 13,
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
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#2ACA10',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  TextBankAccount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 30,
  },
});
