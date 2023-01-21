//Import Library
import React, {useState} from 'react';
import {View, PermissionsAndroid, StatusBar, Text} from 'react-native';
import Toggle from 'react-native-toggle-element';

const SwitchingApp = () => {
  const [ToggleValue, setToggleValue] = useState(true);

  
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  if (ToggleValue === true) {
    
  } else {
    requestCameraPermission()
  }
  return (
    <View>
      <Toggle
        value={ToggleValue}
        onPress={toggle => setToggleValue(toggle)}
        leftTitle={ToggleValue === false ? '' : ''}
        rightTitle={ToggleValue === true ? '' : ''}
        trackBar={{
          width: 45,
          height: 16,
          top: 20,
          radius: 24,
          activeBackgroundColor: '#B8DAFF',
          inActiveBackgroundColor: '#B8DAFF',
          borderWidth: 1,
          borderActiveColor: 'white',
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

export default SwitchingApp;
