import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import IconArrowDown from '../../../../assets/transferCard/icon_arrow_down.svg';
import Singapore from '../../../../assets/transferCard/openmoji_flag-singapore.png';
import Indonesia from '../../../../assets/transferCard/openmoji_flag-indonesia.png';
import UnitedStates from '../../../../assets/transferCard/openmoji_flag-united-states.png';
import Australia from '../../../../assets/transferCard/openmoji_flag-australia.png';
import Japan from '../../../../assets/transferCard/openmoji_flag-japan.png';

const TextFieldCurrency = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) => {
  const [hideSelectList, setHideSelectList] = useState(false);
  const [country, setCountry] = useState(UnitedStates);
  const handleAustralia = () => {
    setCountry(Australia);
    setHideSelectList(!hideSelectList);
  };

  const handleJapan = () => {
    setCountry(Japan);
    setHideSelectList(!hideSelectList);
  };
  const handleSingapore = () => {
    setCountry(Singapore);
    setHideSelectList(!hideSelectList);
  };
  const handleUS = () => {
    setCountry(UnitedStates);
    setHideSelectList(!hideSelectList);
  };
  useEffect(() => {
    console.log('isi Field Negara', country);
  });

  return (
    <>
      <View style={styles.Container}>
        <View style={styles.ContainerTextInput}>
          <TouchableOpacity
            style={styles.Country}
            onPress={() => setHideSelectList(!hideSelectList)}>
            {/* <TextInput value={country} editable={false}/> */}
            <Image source={country} style={{width: 30, height: 30}} />
            {/* <IconIndonesia/> */}

            <View style={{marginLeft: 10}}>
              <IconArrowDown />
            </View>
          </TouchableOpacity>

          <View style={styles.Currency}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
            />
          </View>
        </View>
        {hideSelectList ? (
          <ScrollView style={styles.ContainerSelectList}>
            <TouchableOpacity
              style={styles.ListCountry}
              onPress={handleAustralia}>
              <Image source={Australia} />

              <Text style={{paddingLeft: 10}}>Australia</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ListCountry} onPress={handleJapan}>
              <Image source={Japan} />
              <Text style={{paddingLeft: 10}}>Jepang</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ListCountry}
              onPress={handleSingapore}>
              <Image source={Singapore} />
              <Text style={{paddingLeft: 10}}>Singapore</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ListCountry} onPress={handleUS}>
              <Image source={UnitedStates} />
              <Text style={{paddingLeft: 10}}>United States of America</Text>
            </TouchableOpacity>
          </ScrollView>
        ) : null}
      </View>
    </>
  );
};

export default TextFieldCurrency;
const styles = StyleSheet.create({
  Container: {
    width: '100%',
  },
  ContainerTextInput: {
    flexDirection: 'row',
  },
  Country: {
    width: '20%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F7FF',
  },
  Currency: {
    width: '80%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // borderColor:'#F1F7FF'
    backgroundColor: '#F1F7FF',
  },
  ContainerSelectList: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  ListCountry: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#F1F7FF',
    height: 40,
    borderRadius: 10,
  },
});
