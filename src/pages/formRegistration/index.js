//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {SelectList} from 'react-native-dropdown-select-list';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

//Import Component
import RequirementSymbols from '../../components/atoms/requirementSymbols';
import TextDefault from '../../components/atoms/textDefault';
import HeaderPages from '../../components/moleculs/headerPages';
import TextField from '../../components/moleculs/textField';
import TextFieldPassword from '../../components/moleculs/textFieldPassword';
import BlueButton from '../../components/moleculs/blueButton';
import PopUp from '../../components/organism/popup';
import {Colours} from '../../helpers/colours';
import TextFieldEmail from '../../components/moleculs/textFieldEmail';

//Import Assets
import ImageReceiveMessage from '../../../assets/popup/received_message_icon.png';
import IconCalender from '../../../assets/formRegistration/calendar.svg';
import IconUserImageAdd from '../../../assets/formRegistration/user-plus.svg';

const kewarganegaraanData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'WNI',
    value: 'WNI',
    labelStyle: {fontSize: 14, fontWeight: '500'},
    size: 15,
  },
  {
    id: '2',
    label: 'WNA',
    value: 'WNA',
    labelStyle: {fontSize: 14, fontWeight: '500'},
    size: 15,
  },
];
const jenisKelaminData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Laki-laki',
    value: 'Laki-laki',
    labelStyle: {fontSize: 14, fontWeight: '500'},
    size: 15,
  },
  {
    id: '2',
    label: 'Perempuan',
    value: 'Perempuan',
    labelStyle: {fontSize: 14, fontWeight: '500'},
    size: 15,
  },
];
const agreementData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    value: 'Setuju',
    size: 15,
  },
];

const FormRegistration = ({navigation}) => {
  const [isPopup, setIsPopup] = useState(false);
  const [kewarganegaraan, setKewarganegaraan] = useState(null);
  const [selected, setSelected] = React.useState('');
  const [noDocument, setNoDocument] = useState(null);
  const [jenisKelamin, setJenisKelamin] = useState(jenisKelaminData);
  const [namaDepan, setNamaDepan] = useState(null);
  const [namaBelakang, setNamaBelakang] = useState(null);
  const [tempatLahir, setTempatLahir] = useState(null);
  const [birtday, setBirthday] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [kataSandi, setKataSandi] = useState(null);
  const [konfirmasiKataSandi, setKonfirmasiKataSandi] = useState(null);
  const [agreement, setAgreement] = useState(null);
  const [email, setEmail] = useState(null);
  const [isButton, setIsButton] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  momentDate = moment(date).format('l');

  useEffect(() => {
    console.log('isi MomentData', momentDate);
    console.log('isi Birthday', date);
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
    setBirthday(momentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
  };
  const showMode = currentMode => {
    setShowDate(true);
  };

  useEffect(() => {
    // console.log('cek isi', birtday)
    if (email == '' || email == undefined) {
      console.log(isButton);
      setIsButton(false);
    } else if (kewarganegaraan == '' || kewarganegaraan == undefined) {
      setIsButton(false);
    } else if (selected == '' || selected == undefined) {
      setIsButton(false);
    } else if (noDocument == '' || noDocument == undefined) {
      setIsButton(false);
    } else if (namaDepan == '' || namaDepan == undefined) {
      setIsButton(false);
    } else if (namaBelakang == '' || namaBelakang == undefined) {
      setIsButton(false);
    } else if (tempatLahir == '' || tempatLahir == undefined) {
      setIsButton(false);
    } else if (alamat == '' || alamat == undefined) {
      setIsButton(false);
    } else if (jenisKelamin == '' || jenisKelamin == undefined) {
      setIsButton(false);
    } else if (kataSandi == '' || kataSandi == undefined) {
      setIsButton(false);
    } else if (konfirmasiKataSandi == '' || konfirmasiKataSandi == undefined) {
      setIsButton(false);
    } else if (agreement == '' || agreement == undefined) {
      setIsButton(false);
    } else {
      setIsButton(true);
    }
  });
  function onPressKewarganegaraan(radioButtonsArray) {
    setKewarganegaraan(radioButtonsArray);
  }
  function onPressJenisKelamin(radioButtonsArray) {
    setJenisKelamin(radioButtonsArray);
  }
  function onPressAgreement(radioButtonsArray) {
    setAgreement(radioButtonsArray);
  }

  const documentData = [
    {key: '1', value: 'KTP'},
    {key: '2', value: 'SIM'},
    {key: '3', value: 'Passport'},
  ];
  const handleLanjut = () => {
    setIsPopup(true);
  };
  const handleCancelPopUp = () => {
    setIsPopup(false);
  };
  const handleAktivasiSekarang = () => {
    setIsPopup(false);
    navigation.navigate('CreatePIN');
  };
  return (
    <ScrollView style={styles.Container}>
      <PopUp
        visible={isPopup}
        onPressCancel={handleCancelPopUp}
        onPressButton={handleAktivasiSekarang}
        value={'Cek email anda untuk melakukan aktivasi akun'}
        ImagePopUp={ImageReceiveMessage}
        textButton={'Aktivasi Sekarang'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Registration'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.ContainerBody}>
        <View style={styles.FormStyle}>
          <TouchableOpacity style={styles.ContainerImageAdd}>
            <IconUserImageAdd />
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Email '} />
            <RequirementSymbols />
          </View>
          <TextFieldEmail
            placeholder={'Email'}
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Kewarganegaraan '} />
            <RequirementSymbols />
          </View>
          <RadioGroup
            radioButtons={kewarganegaraanData}
            onPress={onPressKewarganegaraan}
            containerStyle={{flexDirection: 'row'}}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Tipe Dokumen '} />
            <RequirementSymbols />
          </View>
          <SelectList
            setSelected={val => setSelected(val)}
            data={documentData}
            save="value"
            boxStyles={{
              backgroundColor: '#F1F7FF',
              borderWidth: 0,
              width: '100%',
            }}
            placeholder="Pilih tipe dokumen"
            inputStyles={{marginLeft: -15}}
          />
          <View style={{marginTop: 10}} />
          <TextField
            placeholder={'Masukkan no dokumen'}
            value={noDocument}
            onChangeText={value => setNoDocument(value)}
          />
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Nama Depan '} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Nama depan'}
            value={namaDepan}
            onChangeText={value => setNamaDepan(value)}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Nama Belakang '} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Nama Belakang'}
            value={namaBelakang}
            onChangeText={value => setNamaBelakang(value)}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Tempat Lahir'} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Tempat Lahir'}
            value={tempatLahir}
            onChangeText={value => setTempatLahir(value)}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Tanggal Lahir'} />
            <RequirementSymbols />
          </View>
          <View style={styles.ContainerTextInputDate}>
            <TextInput value={birtday} />

            <TouchableOpacity onPress={() => showMode('date')}>
              <IconCalender />
            </TouchableOpacity>

            {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Alamat'} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Alamat'}
            multiline={true}
            numberOfLines={4}
            value={alamat}
            onChangeText={value => setAlamat(value)}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Jenis Kelamin '} />
            <RequirementSymbols />
          </View>
          <RadioGroup
            radioButtons={jenisKelamin}
            onPress={onPressJenisKelamin}
            containerStyle={{flexDirection: 'row'}}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Kata Sandi'} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Kata Sandi'}
            value={kataSandi}
            onChangeText={value => setKataSandi(value)}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Konfirmasi Kata Sandi'} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Konfirmasi Kata Sandi'}
            value={konfirmasiKataSandi}
            onChangeText={value => setKonfirmasiKataSandi(value)}
          />
        </View>
        <View style={styles.ViewAgreement}>
          <RadioGroup
            radioButtons={agreementData}
            onPress={onPressAgreement}
            containerStyle={{flexDirection: 'row'}}
          />
          <Text style={styles.TextAgreement}>Saya setuju dengan </Text>
          <TouchableOpacity>
            <Text style={styles.TextButtonAgreement}>
              Syarat & Ketentuan yang berlaku
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonLanjut}>
          <BlueButton
            value={'Lanjut'}
            onPress={handleLanjut}
            isButton={isButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FormRegistration;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  ContainerBody: {
    alignItems: 'center',
  },
  FormStyle: {
    width: '90%',
    alignItems: 'baseline',
    marginTop: 30,
  },
  TextAgreement: {
    fontSize: 12,
    fontWeight: '500',
  },
  TextButtonAgreement: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2075F3',
  },
  ViewAgreement: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ButtonLanjut: {
    width: '90%',
    marginTop: 20,
  },
  ContainerTextInputDate: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#F1F7FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  ContainerImageAdd: {
    width: 60,
    height: 60,
    backgroundColor: '#F1F7FF',
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 5,
  },
});
