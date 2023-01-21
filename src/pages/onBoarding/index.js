//Import Library
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

//Import Component
import TextTitleOnBoarding from '../../components/atoms/textTitleOnBoarding';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import {Colours} from '../../helpers/colours';

//Import Assets
import Image1 from '../../../assets/onBoarding/image1.png';
import Image2 from '../../../assets/onBoarding/image2.png';
import Image3 from '../../../assets/onBoarding/image3.png';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../service/redux/reducer/usersSlice';
const {width, height} = Dimensions.get('window');

const OnBoarding = ({navigation}) => {
  const dispatch=useDispatch()
  const {t, i18n}=useTranslation()
  const stateUsers=useSelector(state=>state.users)
  const [imgActive, setImgActive] = useState(0);
  const [checkLanguage, setCheckLanguage]=useState(false)
  useEffect(() => {
    setCheckLanguage(true)
    getLanguage()      
    SplashScreen.hide();
    console.log('splashcreen nih')
  }, []);
  useEffect(()=>{
    i18n.changeLanguage(stateUsers.language)  
  },[stateUsers.language])
  const getLanguage = async() => {
    const languageStorage = await AsyncStorage.getItem('languageStorage');
     dispatch(setLanguage(languageStorage))


};
  const images = [];
  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  const handleMulai = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.Container}>
      <View style={{justifyContent:'center'}}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.ScrollViewStyle}>
          {images.map((e, index) => (
            <View
              key={e}
              resizeMode="stretch"
              source={{uri: e}}
              style={{width: 400, height: 200}}
            />
          ))}

          <View>
            <Image source={Image1} style={styles.Image} />
            <View style={styles.ContainerTextTitleOnBoarding}>
              <TextTitleOnBoarding
                value={'The latest technology that provides convenience for you'}
              />
            </View>
            <View style={styles.ContainerTextDescriptionOnBoarding}>
              <TextDescriptionOnBoarding
                value={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                }
              />
            </View>
          </View>

          <View>
            <Image source={Image2} style={styles.Image} />
            <View style={styles.ContainerTextTitleOnBoarding}>
              <TextTitleOnBoarding
                value={
                  'You can easily do transfers between countries'
                }
              />
            </View>
            <View style={styles.ContainerTextDescriptionOnBoarding}>
              <TextDescriptionOnBoarding
                value={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
              />
            </View>
          </View>

          <View>
            <Image source={Image3} style={styles.Image} />
            <View style={styles.ContainerTextTitleOnBoarding}>
              <TextTitleOnBoarding
                value={
                  'what are you waiting for join now with TransEvilz'
                }
              />
            </View>
            <View style={styles.ContainerTextDescriptionOnBoarding}>
              <TextDescriptionOnBoarding
                value={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.ContainerDotActive}>
          <View
            style={[
              imgActive >= 0 ? styles.DotSlideActive : styles.DotSlideInActive,
            ]}
          />
          <View
            style={[
              imgActive >= 1 ? styles.DotSlideActive : styles.DotSlideInActive,
            ]}
          />
          <View
            style={[
              imgActive >= 2 ? styles.DotSlideActive : styles.DotSlideInActive,
            ]}
          />
        </View>
      </View>

      <View style={styles.ContainerButtonMulai}>
        <BlueButton value={'Start'} onPress={handleMulai} isButton={true} />
      </View>
    </View>
  );
};

export default OnBoarding;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colours.background,
  },
  Image: {
    width: 300,
    height: 300,
    marginHorizontal: 45,
  },
  ScrollViewStyle: {
    marginTop: 100,
    marginBottom: 40,
    height: 450,
  },
  ContainerTextTitleOnBoarding: {
    width: 310,
    marginLeft: 40,
  },
  ContainerTextDescriptionOnBoarding: {
    alignItems: 'center',
    width: 350,
    marginLeft: 20,
    marginTop: 20,
  },
  DotSlideInActive: {
    backgroundColor: '#D9D9D9',
    width: 10,
    height: 10,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  DotSlideActive: {
    backgroundColor: '#2075F3',
    width: 10,
    height: 10,
    borderRadius: 20,
    marginHorizontal: 2,
  },
  ContainerDotActive: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
  },
  ContainerButtonTwin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 62,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  ContainerButtonMulai: {
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  ContainerButton: {
    width: 140,
  },
  ContainerImage: {
    marginTop: 80,
  },
});
