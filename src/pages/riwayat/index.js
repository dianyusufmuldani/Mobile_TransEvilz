//Import Library
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

//Import Component
import HeaderPages from '../../components/moleculs/headerPages';
import {Colours} from '../../helpers/colours';
import HeaderPagesBlue from '../../components/moleculs/headerPagesBlue';

//Import Assets
import ImageUser from '../../../assets/user/kakashi.jpg';
import {useDispatch, useSelector} from 'react-redux';
import IconCalender from '../../../assets/formRegistration/calendar.svg';
import IconSearch from '../../../assets/riwayat/search.svg';
import PopUpError from '../../components/organism/popupError';
import ImagePopupErrorDate from '../../../assets/popup/popup_error.png';
import {setIsPopupErrorDate} from '../../service/redux/reducer/globalSlice';
import Indonesia from '../../../assets/transferCard/openmoji_flag-indonesia.png';
import Singapore from '../../../assets/transferCard/openmoji_flag-singapore.png';
import UnitedStates from '../../../assets/transferCard/openmoji_flag-united-states.png';
import Australia from '../../../assets/transferCard/openmoji_flag-australia.png';
import Japan from '../../../assets/transferCard/openmoji_flag-japan.png';

const Riwayat = ({navigation}) => {
  const dispatch = useDispatch();
  const stateGlobal = useSelector(state=>state.global);
  const stateUsers = useSelector(state=>state.users);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [date2, setDate2] = useState(new Date());
  const [showDate2, setShowDate2] = useState(false);
  const [startDate, setStartDate]=useState(null)
  const [endDate, setEndDate]=useState(null)

  useEffect(() => {
    console.log('isi pengurangan', date2-date);
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
    setStartDate(date)
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


  const onChange2 = (event, selectedDate2) => {
    const currentDate2 = selectedDate2 || date2;
    setShowDate2(false);
    setDate2(currentDate2);
    setEndDate(date)
    let tempDate = new Date(currentDate2);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
  };
  const showMode2 = currentMode => {
    setShowDate2(true);
  };
  const handleSearch = ()=>{
    if (date2 - date < 0){
      dispatch(setIsPopupErrorDate(true));
    } else {
      console.log('Lainnya');
    }
  };
  useEffect(()=>{
    if(startDate!==null){
    setStartDate(moment(date).format('DD/MM/YYYY'))
    }
  },[startDate])

  useEffect(()=>{
    if(endDate!==null){
    setEndDate(moment(date2).format('DD/MM/YYYY'))
    }
  },[endDate])
  return (
    <View style={styles.Container}>
      <HeaderPagesBlue
        value={'Riwayat Transaksi'}
        hideShowTitle={true}
        showBackButton={false}
      />
      <PopUpError
        textButton={'Oke'}
        onPressButton={() => dispatch(setIsPopupErrorDate(false))}
        visible={stateGlobal.isPopupErrorDate}
        ImagePopUp={ImagePopupErrorDate}
        value={'Tanggal Awal tidak boleh lebih besar dari Tanggal Akhir '}
      />

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View style={{width: '40%', marginRight: 20}}>
          <Text style={styles.TextTitleDate}>Awal:</Text>
          <TouchableOpacity onPress={() => showMode('date')}>
            <View style={styles.ContainerTextInputDate}>
              <TextInput
                value={startDate}
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
        </View>
        <View style={{width: '40%'}}>
          <Text style={styles.TextTitleDate}>Akhir:</Text>
          <TouchableOpacity onPress={() => showMode2('date')} >
            <View style={styles.ContainerTextInputDate}>
              <TextInput
                value={endDate}
                editable={false}
                placeholder={'mm/dd/yyyy'}
                style={styles.ContainerPlaceholderDate}
              />

              <IconCalender />

              {showDate2 && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date2}
                  mode={'date'}
                  is24Hour={true}
                  onChange={onChange2}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.ContainerSearch} onPress={handleSearch}>
        <Text style={styles.TextSearch}>Cari</Text>
        <IconSearch />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={{height: 500}}>
        <TouchableOpacity style={styles.CardUser} onPress={()=>navigation.navigate('StatusTransaction')}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image
                source={{
                  uri: `https://robohash.org/${stateUsers.data.user.fullname}`,
                }}
                style={styles.StyleImage}
              />
            </View>
            <View style={styles.ContainerText}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={Australia} style={{width:20, height:20, marginRight:10}}/>
              <Text style={styles.TextCountryToCountry}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TextStyle}>
                {stateUsers.data.user.fullname}
              </Text>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.MethodPayment}>BCC</Text>
              <Text style={styles.MethodPayment}> - </Text>
              <Text style={styles.MethodPayment}>112321312</Text>
              </View>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPayment}>
              <Text style={styles.StatusPayment}>Berhasil</Text>
            </View>
            <Text style={styles.CountPayment}>1,000,000.00 IDR</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image
                source={{
                  uri: `https://robohash.org/${stateUsers.data.user.fullname}`,
                }}
                style={styles.StyleImage}
              />
            </View>
            <View style={styles.ContainerText}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={UnitedStates} style={{width:20, height:20, marginRight:10}}/>
              <Text style={styles.TextCountryToCountry}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TextStyle}>
                {stateUsers.data.user.fullname}
              </Text>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.MethodPayment}>BCC</Text>
              <Text style={styles.MethodPayment}> - </Text>
              <Text style={styles.MethodPayment}>112321312</Text>
              </View>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPaymentFailed}>
              <Text style={styles.StatusPayment}>Berhasil</Text>
            </View>
            <Text style={styles.CountPayment}>1,000,000.00 IDR</Text>
          </View>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.CardUser}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.ContainerImage}>
              <Image
                source={{
                  uri: `https://robohash.org/${stateUsers.data.user.fullname}`,
                }}
                style={styles.StyleImage}
              />
            </View>
            <View style={styles.ContainerText}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={Indonesia} style={{width:20, height:20, marginRight:10}}/>
              <Text style={styles.TextCountryToCountry}>IDR ke AUD</Text>
              </View>
              <Text style={styles.TextStyle}>
                {stateUsers.data.user.fullname}
              </Text>
              <View style={{flexDirection:'row'}}>
              <Text style={styles.MethodPayment}>BCC</Text>
              <Text style={styles.MethodPayment}> - </Text>
              <Text style={styles.MethodPayment}>112321312</Text>
              </View>
              <Text style={styles.DatePayment}> 22 Desember 2022</Text>
            </View>
          </View>
          <View>
            <View style={styles.ContainerStatusPaymentProccess}>
              <Text style={styles.StatusPayment}>Dalam Proses</Text>
            </View>
            <Text style={styles.CountPayment}>1,000,000.00 IDR</Text>
          </View>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
};

export default Riwayat;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
    alignItems: 'center',
  },

  CardUser: {
    width: 342,
    height: 94,
    borderWidth: 1,
    borderRadius: 20,

    paddingLeft: 13,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ContainerImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  StyleImage: {
    width: '100%',
    height: '100%',

    borderRadius: 60,
  },
  ContainerText: {
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 12,
    fontWeight: '700',
  },
  MethodPayment: {
    fontSize: 6,
    fontWeight: '500',
    color: '#3A3A3A',
  },
  DatePayment: {
    fontSize: 6,
    fontWeight: '400',
    color: '#98A5D3',
  },
  ContainerStatusPayment: {
    width: 38,
    height: 12,
    backgroundColor: '#2ACA10',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  StatusPayment: {
    fontSize: 6,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  CountPayment: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3A3A3A',
    marginRight: 20,
    marginTop: 15,
  },
  ContainerStatusPaymentFailed: {
    width: 38,
    height: 12,
    backgroundColor: '#DC3328',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
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
  ContainerPlaceholderDate: {
    paddingLeft: 10,
  },
  TextTitleDate: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  ContainerSearch: {
    height: 39,
    width: '88%',
    backgroundColor: '#2075F3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  TextSearch: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginRight: 10,
  },
  TextCountryToCountry:{
    fontSize:8,
    fontWeight:'700'
  },
  ContainerStatusPaymentProccess:{
    backgroundColor:'#FFAD0E',
    width: 51,
    height: 12,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  }
});
