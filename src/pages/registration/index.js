//Import Library
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

//Import Component
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import TextDefault from '../../components/atoms/textDefault';
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import TextField from '../../components/moleculs/textField';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';
import HeaderPages from '../../components/moleculs/headerPages';

//Import Assets
import ImageMan from '../../../assets/registration/Man_logging.png';

const Registration = ({navigation}) => {
  const [selected, setSelected] = React.useState('');
  const [noHp, setNoHp] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const data = [
    {key: '1', value: 'Indonesia'},
    {key: '2', value: 'Amerika'},
    {key: '3', value: 'China'},
    {key: '4', value: 'Korea Selatan'},
    {key: '5', value: 'Brazil'},
  ];
  useEffect(() => {
    if (selected == '' || selected == undefined) {
      setIsButton(false);
    } else if (noHp == '' || noHp == undefined) {
      console.log(isButton);
      setIsButton(false);
    } else {
      setIsButton(true);
    }
  });
  const handleKirim = () => {
    navigation.navigate('OTP');
  };
  return (
    <View style={styles.Container}>
      <HeaderPages onPress={() => navigation.goBack()} />
      <View style={styles.Title}>
        <Text style={styles.TextStyle}>Selamat Datang di TransEvilz</Text>
      </View>
      <View style={styles.Description}>
        <TextDescriptionOnBoarding
          value={'Jika anda ingin bergabung, lakukan register terlebih dahulu'}
        />
      </View>
      <Image source={ImageMan} />
      <View style={styles.FormNegara}>
        <View style={{flexDirection: 'row'}}>
          <TextDefault value={'Negara '} />
          <RequirementSymbols />
        </View>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{
            backgroundColor: '#F1F7FF',
            borderWidth: 0,
            width: '100%',
          }}
          placeholder="Pilih negara"
          inputStyles={{marginLeft: -15}}
        />
      </View>
      <View style={styles.FormNoHP}>
        <View style={{flexDirection: 'row'}}>
          <TextDefault value={'No.Hp '} />
          <RequirementSymbols />
        </View>
        <TextField
          placeholder={'Masukkan no.hp'}
          keyboardType={'numeric'}
          value={noHp}
          onChangeText={value => setNoHp(value)}
        />
      </View>
      <View style={styles.BlueButton}>
        <BlueButton value={'Kirim'} onPress={handleKirim} isButton={isButton} />
      </View>
    </View>
  );
};

export default Registration;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.background,
  },
  TextStyle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2075F3',
    textAlign: 'center',
  },
  Title: {
    width: '70%',
  },
  Description: {
    width: 291,
  },
  FormNegara: {
    width: '90%',
    alignItems: 'baseline',
  },
  FormNoHP: {
    width: '90%',
    alignItems: 'baseline',
    marginTop: 41,
  },
  BlueButton: {
    width: '90%',
    position: 'absolute',
    bottom: 5,
  },
});
