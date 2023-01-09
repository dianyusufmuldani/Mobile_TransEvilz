//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {SelectList} from 'react-native-dropdown-select-list';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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
import {setUsers} from '../../service/redux/reducer/usersSlice';
import {getUsers} from '../../service/redux/reducer/usersSlice';
import RadioButton from '../../components/moleculs/radioButton';
import NegatifCase from '../../components/atoms/negatifCaseTextInput';
import {
  setIsPopupSuccessFormRegistration,
  setIsButtonFormRegistration,
} from '../../service/redux/reducer/globalSlice';

//Import Assets
import ImageReceiveMessage from '../../../assets/popup/received_message_icon.png';
import IconCalender from '../../../assets/formRegistration/calendar.svg';
import IconUserImageAdd from '../../../assets/formRegistration/user-plus.svg';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';

// const nationalityData = [
//   {
//     id: '1', // acts as primary key, should be unique and non-empty string
//     label: 'WNI',
//     value: 'WNI',
//     labelStyle: {fontSize: 14, fontWeight: '500'},
//     size: 15,
//   },
//   {
//     id: '2',
//     label: 'WNA',
//     value: 'WNA',
//     labelStyle: {fontSize: 14, fontWeight: '500'},
//     size: 15,
//   },
// ];
const genderData = [
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
const agreeTermsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    value: 'Setuju',
    size: 15,
  },
];

const FormRegistration = ({navigation}) => {
  // const [isPopup, setisPopupSuccessFormRegistration] = useState(false);
  // const [nationality, setNationality] = useState(null);
  const [typeDocument, setTypeDocument] = useState(null);
  const [noDocument, setNoDocument] = useState(null);
  const [gender, setGender] = useState(genderData);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [birthplace, setBirthplace] = useState(null);
  const [birtday, setBirthday] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(null);
  const [email, setEmail] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [matchPassword, setMatchPassword] = useState(true);
  const dispatch = useDispatch();
  const stateUsers = useSelector(state => state.users);
  const stateGlobal = useSelector(state => state.global);

  momentDate = moment(date).format('l');
  momentAge = moment().diff(birtday, 'years', false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(true);
  const handleCheckValidEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handleCheckValidPassword = text => {
    let re = /\S+@\S+\.\S+/;
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*#&])[A-Za-z\d#$@!%&*?]{8,16}$/;
    setPassword(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPassword(true);
    } else {
      setCheckValidPassword(false);
    }
  };

  useEffect(() => {
    console.log('isi Age', momentAge);
    if (email == null || email == '') {
      setCheckValidEmail(false);
    }
    if (password == '' || password == null) {
      setCheckValidPassword(true);
    }
    if (confirmPassword != null || confirmPassword != undefined) {
      if (confirmPassword == '') {
        setMatchPassword(true);
      } else if (password != confirmPassword) {
        setMatchPassword(false);
      } else {
        setMatchPassword(true);
      }
    } else {
      setMatchPassword(true);
    }
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
    console.log('sampai sini', stateGlobal.isButtonFormRegistration);
    console.log('isi state', typeDocument);
    if (email == '' || email == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    }
    //  else if (nationality == '' || nationality == undefined) {
    //   dispatch(setIsButtonFormRegistration(false));
    // }
    else if (typeDocument == '' || typeDocument == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (noDocument == '' || noDocument == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (firstName == '' || firstName == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (lastName == '' || lastName == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (birthplace == '' || birthplace == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (momentAge <= 17) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (address == '' || address == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (gender == '' || gender == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (password == '' || password == undefined) {
      dispatch(setIsButtonFormRegistration(false));
      setCheckValidPassword(true);
    } else if (checkValidPassword == false) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (matchPassword == false) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (confirmPassword == '' || confirmPassword == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (agreeTerms == '' || agreeTerms == undefined) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (password == confirmPassword) {
      dispatch(setIsButtonFormRegistration(true));
    }
  });

  // function onPressNationality(radioButtonsArray) {
  //   setNationality(radioButtonsArray);
  // }
  function onPressGender(radioButtonsArray) {
    setGender(radioButtonsArray);
  }
  function onPressAgreeTerms(radioButtonsArray) {
    setAgreeTerms(radioButtonsArray);
  }

  const documentData = [
    {key: '1', value: 'Passport'},
    {key: '2', value: 'KTP'},
    {key: '3', value: 'SIM'},
  ];
  const handleLanjut = () => {
    const request = {
      email: email,
      // nationality: nationality,
      typeDocument: typeDocument,
      noDocument: noDocument,
      firstName: firstName,
      lastName: lastName,
      birthplace: birthplace,
      birtday: birtday,
      address: address,
      gender: gender,
      password: password,
      confirmPassword: confirmPassword,
      agreeTerms: agreeTerms,
    };
    dispatch(getUsers(request));
    dispatch(setIsPopupSuccessFormRegistration(true));
  };
  const handleCancelPopUp = () => {
    dispatch(setIsPopupSuccessFormRegistration(false));
  };
  const handleAktivasiSekarang = () => {
    dispatch(setIsPopupSuccessFormRegistration(false));
    dispatch(setIsButtonFormRegistration(false));
    navigation.navigate('CreatePIN');
  };
  const [photo, setPhoto] = useState(null);
  let options = {
    setToPhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setPhoto(result.assets[0].uri);
    console.log('isi Photo', photo);
  };
  return (
    <ScrollView style={styles.Container}>
      <PopUp
        visible={stateGlobal.isPopupSuccessFormRegistration}
        onPressCancel={handleCancelPopUp}
        onPressButton={handleAktivasiSekarang}
        value={'Cek email anda untuk melakukan aktivasi akun'}
        ImagePopUp={ImageReceiveMessage}
        textButton={'Aktivasi Sekarang'}
      />
      <HeaderPages
        hideShowTitle={true}
        value={'Registration'}
        onPress={() => navigation.navigate('Registration')}
      />
      <View style={styles.ContainerBody}>
        <View style={styles.FormStyle}>
          <TouchableOpacity
            style={styles.ContainerImageAdd}
            onPress={openGallery}>
            {photo ? (
              <Image source={{uri: photo}} style={styles.ImageProfilPick} />
            ) : (
              <IconUserImageAdd />
            )}
          </TouchableOpacity>
          <View style={{alignSelf: 'center', marginBottom: 20}}>
            <TextDescriptionOnBoarding value={'Tambah gambar '} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Email '} />
            <RequirementSymbols />
          </View>
          <TextFieldEmail
            placeholder={'Email'}
            value={email}
            onChangeText={handleCheckValidEmail}
          />
          {checkValidEmail ? (
            <NegatifCase text={'Format email salah'} value={''} />
          ) : null}
          {email == 'admin@gmail.com' ? (
            <NegatifCase text={'Email sudah terdaftar'} value={''} />
          ) : null}

          {email == '' ? (
            <NegatifCase text={'Anda harus mengisi bagian ini'} value={email} />
          ) : null}
        </View>
        {/* <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Kewarganegaraan '} />
            <RequirementSymbols />
          </View>
          <RadioGroup
            radioButtons={nationalityData}
            onPress={onPressNationality}
            containerStyle={{flexDirection: 'row'}}
          />
        </View> */}
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Tipe Dokumen '} />
            <RequirementSymbols />
          </View>
          <View style={styles.ContainerDropdownType}>
            <SelectList
              setSelected={val => setTypeDocument(val)}
              data={documentData}
              save="value"
              boxStyles={{
                backgroundColor: '#F1F7FF',
                borderWidth: 0,
                width: '100%',
              }}
              placeholder="Pilih Tipe dokumen"
              inputStyles={{marginLeft: -15, paddingLeft: 10}}
              dropdownStyles={{
                height: 130,
                backgroundColor: '#F1F7FF',
                borderWidth: 0,
              }}
              search={false}
            />
          </View>
          <View style={{marginTop: 10}} />
          {typeDocument ? (
            <>
              {typeDocument == 'Passport' ? (
                <TextField
                  placeholder={'Masukkan no dokumen'}
                  value={noDocument}
                  onChangeText={value =>
                    setNoDocument(value)
                  }
                  maxLength={16}
                />
              ) : null}
              {typeDocument == 'KTP' ? (
                <TextField
                  placeholder={'Masukkan no dokumen'}
                  value={noDocument}
                  onChangeText={value =>
                    setNoDocument(value.replace(/\D/g, ''))
                  }
                  maxLength={16}
                  keyboardType={'numeric'}
                />
              ) : null}
              {typeDocument == 'SIM' ? (
                <TextField
                  placeholder={'Masukkan no dokumen'}
                  value={noDocument}
                  onChangeText={value =>
                    setNoDocument(value.replace(/\D/g, ''))
                  }
                  maxLength={12}
                  keyboardType={'numeric'}
                />
              ) : null}
            </>
          ) : (
            <TextInput
              placeholder={'Masukkan no dokumen'}
              value={noDocument}
              onChangeText={value => setNoDocument(value)}
              editable={false}
              maxLength={16}
              style={styles.ContainerTextInputFalseNoDocument}
            />
          )}

          <NegatifCase
            text={'Anda harus mengisi bagian ini'}
            value={noDocument}
          />
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Nama Depan '} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Nama depan'}
            value={firstName}
            onChangeText={value => setFirstName(value)}
            maxLength={15}
          />
          <NegatifCase
            text={'Anda harus mengisi bagian ini'}
            value={firstName}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Nama Belakang '} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Nama Belakang'}
            value={lastName}
            onChangeText={value => setLastName(value)}
            maxLength={15}
          />
          <NegatifCase
            text={'Anda harus mengisi bagian ini'}
            value={lastName}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Tempat Lahir'} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Tempat Lahir '}
            value={birthplace}
            onChangeText={value => setBirthplace(value)}
            maxLength={15}
          />
          <NegatifCase
            text={'Anda harus mengisi bagian ini'}
            value={birthplace}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Tanggal Lahir '} />
            <RequirementSymbols />
          </View>
          <TouchableOpacity
            onPress={() => showMode('date')}
            style={{width: '100%'}}>
            <View style={styles.ContainerTextInputDate}>
              <TextInput
                value={birtday}
                editable={false}
                placeholder={'mm/dd/yyyy'}
                style={styles.ContainerPlaceholderDate}
              />

              <IconCalender />

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
          </TouchableOpacity>
          {momentAge <= 17 ? (
            <NegatifCase
              text={'Umur tidak boleh kurang dari 17 tahun'}
              value={''}
            />
          ) : null}
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Alamat '} />
            <RequirementSymbols />
          </View>
          <TextInput
            placeholder={'Alamat'}
            multiline={true}
            numberOfLines={4}
            value={address}
            onChangeText={value => setAddress(value)}
            style={styles.ContainerAddress}
            textAlignVertical="top"
            maxLength={60}
          />
          <NegatifCase text={'Anda harus mengisi bagian ini'} value={address} />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Jenis Kelamin '} />
            <RequirementSymbols />
          </View>
          <RadioGroup
            radioButtons={gender}
            onPress={onPressGender}
            containerStyle={{flexDirection: 'row'}}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Kata sandi '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Kata sandi'}
            value={password}
            onChangeText={handleCheckValidPassword}
            maxLength={16}
          />
          {checkValidPassword ? (
            <></>
          ) : (
            <NegatifCase
              text={
                'Kata sandi harus berisi huruf besar, angka dan simbol (@ * # &)'
              }
              value={''}
            />
          )}
          <NegatifCase
            text={'Anda harus mengisi bagian ini'}
            value={password}
          />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Konfirmasi kata sandi '} />
            <RequirementSymbols />
          </View>
          <TextFieldPassword
            placeholder={'Konfirmasi kata sandi'}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            maxLength={16}
          />

          {matchPassword ? null : (
            <NegatifCase text={'Kata sandi tidak sama'} value={''} />
          )}
          <NegatifCase
            text={'Anda harus mengisi bagian ini'}
            value={confirmPassword}
          />
        </View>
        <View style={styles.ViewAgreeTerms}>
          <RadioGroup
            radioButtons={agreeTermsData}
            onPress={onPressAgreeTerms}
            containerStyle={{flexDirection: 'row'}}
          />
          <Text style={styles.TextAgreeTerms}>Saya setuju dengan </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <Text style={styles.TextButtonAgreeTerms}>
              Syarat & Ketentuan yang berlaku
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonLanjut}>
          <BlueButton
            value={'Selanjutnya'}
            onPress={handleLanjut}
            isButton={stateGlobal.isButtonFormRegistration}
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
  TextAgreeTerms: {
    fontSize: 12,
    fontWeight: '500',
  },
  TextButtonAgreeTerms: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2075F3',
  },
  ViewAgreeTerms: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
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
  ContainerDropdownType: {
    width: '100%',
  },
  ContainerTextInputFalseNoDocument: {
    backgroundColor: '#EFEFEF',
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  ContainerPlaceholderDate: {
    paddingLeft: 10,
  },
  ContainerAddress: {
    backgroundColor: '#F1F7FF',
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  TextWrong: {
    color: '#DC3328',
  },
  ImageProfilPick: {
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
