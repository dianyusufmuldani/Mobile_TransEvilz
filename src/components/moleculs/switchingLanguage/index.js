//Import Library
import React, {useState} from 'react';
import {View} from 'react-native';
import Toggle from 'react-native-toggle-element';

const SwitchingLanguage = () => {
  const [ToggleValue, setToggleValue] = useState(true);

  if (ToggleValue === true) {
  } else {
  }
  return (
    <View>
      <Toggle
        value={ToggleValue}
        onPress={toggle => setToggleValue(toggle)}
        leftTitle={ToggleValue === false ? 'EN' : ''}
        rightTitle={ToggleValue === true ? 'ID' : ''}
        trackBar={{
          width: 45,
          height: 16,
          top: 20,
          radius: 24,
          activeBackgroundColor: '#B8DAFF',
          inActiveBackgroundColor: '#B8DAFF',
          borderWidth: 1,
          borderActiveColor: '#FFFFFF',
          borderInActiveColor: '#B8DAFF',
        }}
        thumbButton={{
          width: 30,
          height: 30,
          radius: 20,
          activeBackgroundColor: '#3A90EF',
          inActiveBackgroundColor: '#B8DAFF',
          activeColor: '#B8DAFF',
          inActiveColor: '#3A90EF',
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default SwitchingLanguage;
