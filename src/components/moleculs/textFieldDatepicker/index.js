import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconCalender from '../../../../assets/formRegistration/calendar.svg';
import moment from 'moment';

const TextFieldDatepicker = ({placeholder, momentDate, onChangeText}) => {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  momentDate = moment(date).format('l');

  useEffect(() => {
    console.log('isi MomentData', momentDate);
  });
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
  };
  const showMode = currentMode => {
    setShowDate(true);
  };
  return (
    <View style={styles.ContainerTextInputDate}>
      <TextInput
        placeholder={placeholder}
        value={momentDate}
        onChangeText={onChangeText}
      />

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
  );
};

export default TextFieldDatepicker;
const styles = StyleSheet.create({
  ContainerTextInputDate: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#F1F7FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
});
