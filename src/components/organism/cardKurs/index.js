import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconArrowUp from '../../../../assets/homepage/arrow-up.svg';
import IconArrowDown from '../../../../assets/homepage/arrow-down.svg';

const CardKurs = ({kursUang}) => {
  return (
    <View>
      {kursUang == true ? (
        <View style={styles.Container}>
          <Text style={styles.TextCurrency}>EUR/USD</Text>
          <View style={styles.ContainerKurs}>
            <Text style={styles.TextKursCurrency}>1,00064</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <IconArrowUp />
                <Text style={styles.TextUp}>Naik</Text>
              </View>
              <Text style={styles.TextPercent}>0,34 %</Text>
            </View>
          </View>
          <Text style={styles.TextCurrency}>EUR</Text>
        </View>
      ) : (
        <View style={styles.Container}>
          <Text style={styles.TextCurrency}>EUR/USD</Text>
          <View style={styles.ContainerKurs}>
            <Text style={styles.TextKursCurrency}>1,00064</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <IconArrowDown />
                <Text style={styles.TextUp}>Turun</Text>
              </View>
              <Text style={styles.TextPercentDown}>0,34 %</Text>
            </View>
          </View>
          <Text style={styles.TextCurrency}>EUR</Text>
        </View>
      )}
    </View>
  );
};

export default CardKurs;
const styles = StyleSheet.create({
  Container: {
    width: 340,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ContainerKurs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextCurrency: {
    fontSize: 8,
    fontWeight: '500',
    color: '#3A3A3A',
  },
  TextKursCurrency: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3A3A3A',
  },
  TextPercent: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2ACA10',
    marginLeft: 20,
  },
  TextPercentDown: {
    fontSize: 16,
    fontWeight: '500',
    color: '#DC3328',
    marginLeft: 20,
  },
  TextUp: {
    fontSize: 8,
    fontWeight: '500',
    color: '#2ACA10',
    position: 'absolute',
    bottom: -10,
  },
  TextDown: {
    fontSize: 8,
    fontWeight: '500',
    color: '#DC3328',
    position: 'absolute',
    bottom: -10,
  },
});
