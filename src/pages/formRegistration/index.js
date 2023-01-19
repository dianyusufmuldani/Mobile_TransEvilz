//Import Library
import React, {useEffect, useRef, useState} from 'react';
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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

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
import {
  setRegisterStatus,
  setUsers,
} from '../../service/redux/reducer/usersSlice';
import {getUsers} from '../../service/redux/reducer/usersSlice';
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
var ListAgreeTerms = [{value: 'Setuju'}];

var listGender = [
  {label: 'male', value: 'Laki-laki'},
  {label: 'female', value: 'Perempuan'},
];

const FormRegistration = ({navigation}) => {
  const [typeDocument, setTypeDocument] = useState(null);
  const [noDocument, setNoDocument] = useState(null);
  const [gender, setGender] = useState('male');
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
  const [matchPassword, setMatchPassword] = useState(false);
  const dispatch = useDispatch();
  const stateUsers = useSelector(state => state.users);
  const stateGlobal = useSelector(state => state.global);

  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);
  const [checkRegistered, setCheckRegistered] = useState(false);
  const handleCheckValidEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
      setCheckRegistered(false);
      dispatch(setRegisterStatus(null));
    } else {
      setCheckValidEmail(true);
      setCheckRegistered(false);
      dispatch(setRegisterStatus(null));
    }
  };
  const handleCheckValidPassword = text => {
    let re = /\S+@\S+\.\S+/;
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*#&])[A-Za-z\d#$@!%&*?]{8,16}$/;
    setPassword(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };
  const scrollRef = useRef();
  useEffect(() => {
    if (birtday !== null) {
      setBirthday(moment(date).format('DD/MM/YYYY'));
    }
  }, [birtday]);

  useEffect(() => {
    console.log('isi Age', stateUsers.registerStatus);
    if (email === null || email === '') {
      setCheckValidEmail(false);
    }
    if (password === '' || password === null) {
      setCheckValidPassword(false);
    }
    if (confirmPassword !== null || confirmPassword !== undefined) {
      if (confirmPassword === '') {
        setMatchPassword(false);
      } else if (password !== confirmPassword) {
        setMatchPassword(true);
      } else {
        setMatchPassword(false);
      }
    } else {
      setMatchPassword(false);
    }
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
    setBirthday(date);
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
    console.log('isi state', gender);
    if (email === '' || email === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (typeDocument === '' || typeDocument === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (noDocument === '' || noDocument === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (firstName === '' || firstName === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (lastName === '' || lastName === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (birthplace === '' || birthplace === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (Number(moment().diff(date, 'years', false)) <= 17) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (address === '' || address === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (password === '' || password === null) {
      dispatch(setIsButtonFormRegistration(false));
      setCheckValidPassword(false);
    } else if (checkValidEmail === true) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (checkValidPassword === true) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (matchPassword === true) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (confirmPassword === '' || confirmPassword === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (agreeTerms === '' || agreeTerms === null) {
      dispatch(setIsButtonFormRegistration(false));
    } else if (password === confirmPassword) {
      dispatch(setIsButtonFormRegistration(true));
    }
  });

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
      email: email.toLowerCase(),
      doc_type: typeDocument,
      doc_number: Number(noDocument),
      firstname: firstName,
      lastname: lastName,
      birth_place: birthplace,
      birth_date: date,
      address: address,
      sex: gender,
      phone_number: stateUsers.noHp,
      password: password,
    };
    dispatch(getUsers(request));
  };
  useEffect(() => {
    if (stateUsers.registerStatus !== null) {
      if (stateUsers.registerStatus === 201) {
        dispatch(setIsPopupSuccessFormRegistration(true));
        console.log('sukses buat');
      } else if (stateUsers.registerStatus === 400) {
        console.log('gagal buat');
        setCheckRegistered(true);
        scrollRef.current?.scrollTo({
          y: 0,
          animated: true,
        });
        dispatch(setRegisterStatus(null));
      }
    }
  }, [stateUsers.registerStatus]);
  const handleCancelPopUp = () => {
    dispatch(setIsPopupSuccessFormRegistration(false));
  };
  const handleAktivasiSekarang = () => {
    dispatch(setIsPopupSuccessFormRegistration(false));
    dispatch(setIsButtonFormRegistration(false));
    dispatch(setRegisterStatus(null));
    navigation.navigate('Login');
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
    <ScrollView style={styles.Container} ref={scrollRef}>
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
            validValue={checkValidEmail}
            keyboardType={'email-address'}
            textNegatifCase3={'Format email salah'}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            isNegatifCase1={checkRegistered}
            textNegatifCase1={'Email sudah terdaftar'}
          />
        </View>

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
                  onChangeText={value => setNoDocument(value)}
                  maxLength={16}
                  textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
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
                  textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
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
                  textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
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
        </View>

        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Nama Depan '} />
            <RequirementSymbols />
          </View>
          <TextField
            placeholder={'Nama depan'}
            value={firstName}
            onChangeText={value =>
              setFirstName(value.replace(/[^a-z ]/gim, ''))
            }
            maxLength={15}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
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
            onChangeText={value => setLastName(value.replace(/[^a-z ]/gim, ''))}
            maxLength={15}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
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
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
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
            <View
              style={
                Number(moment().diff(date, 'years', false)) <= 17 &&
                birtday !== null
                  ? styles.ContainerTextInputDateError
                  : styles.ContainerTextInputDate
              }>
              <TextInput
                value={birtday}
                editable={false}
                placeholder={'dd/mm/yyyy'}
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

          {Number(moment().diff(date, 'years', false)) <= 17 &&
          birtday !== null ? (
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
            style={
              address === ''
                ? styles.ContainerAddressError
                : styles.ContainerAddress
            }
            textAlignVertical="top"
          />

          <NegatifCase text={'Anda harus mengisi bagian ini'} value={address} />
        </View>
        <View style={styles.FormStyle}>
          <View style={{flexDirection: 'row'}}>
            <TextDefault value={'Jenis Kelamin '} />
            <RequirementSymbols />
          </View>

          <RadioForm
            radio_props={listGender}
            initial={0}
            onPress={value => {
              setGender(value);
            }}
            formHorizontal={true}
            labelStyle={{marginRight: 20}}
            buttonSize={10}
            buttonOuterSize={20}
            buttonColor={'#73788A'}
            selectedButtonColor={'#73788A'}
            animation={false}
            style={{marginTop: 10}}
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
            validValue={checkValidPassword}
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            textNegatifCase3={
              'Kata sandi harus berisi huruf besar, angka dan simbol (@ * # &)'
            }
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
            textNegatifCaseBlank={'Anda harus mengisi bagian ini'}
            isNegatifCase1={
              password !== confirmPassword &&
              confirmPassword !== '' &&
              confirmPassword !== null
            }
            textNegatifCase1={'Kata sandi tidak sama'}
          />
        </View>
        <View style={styles.ViewAgreeTerms}>
          <RadioForm
            radio_props={ListAgreeTerms}
            initial={2}
            onPress={value => {
              setAgreeTerms({value: value});
            }}
            formHorizontal={true}
            buttonSize={7}
            buttonOuterSize={15}
            buttonColor={'#73788A'}
            selectedButtonColor={'#73788A'}
            animation={false}
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
    marginTop: 10,
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
    borderWidth: 1,
    borderColor: '#F1F7FF',
  },
  ContainerTextInputDateError: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#F1F7FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    borderWidth: 1,
    borderColor: 'red',
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
    borderWidth: 1,
    borderColor: '#F1F7FF',
  },
  ContainerAddressError: {
    backgroundColor: '#F1F7FF',
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'red',
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
  ContainerTextInputError: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    width: '100%',
  },
  ContainerTextInputValid: {
    width: '100%',
    borderRadius: 10,
  },
});
