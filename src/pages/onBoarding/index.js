//Import Library
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ScrollView, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

//Import Component
import TextTitleOnBoarding from '../../components/atoms/textTitleOnBoarding';
import TextDescriptionOnBoarding from '../../components/atoms/textDescriptionOnBoarding';
import BlueButton from '../../components/moleculs/blueButton';
import WhiteButton from '../../components/moleculs/whiteButton';
import {Colours} from '../../helpers/colours';

//Import Assets
import Image1 from '../../../assets/onBoarding/image1.png';
import Image2 from '../../../assets/onBoarding/image2.png';
import Image3 from '../../../assets/onBoarding/image3.png';

const OnBoarding = ({navigation}) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(Image1);
  const [imgActive, setImgActive] = useState(0);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const images = [];
  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  // useEffect(() => {
  //   if (imgActive == 0) {
  //     setTitle('Teknologi terkini yang memberikan kemudahan bagi Anda');
  //     setDescription(
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  //     );
  //   } else if (imgActive == 1) {
  //     setTitle('Anda dapat melakukan transfer antar Negara dengan Mudah');
  //     setDescription(
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //     );
  //     setImage(Image2);
  //   } else if (imgActive == 2) {
  //     setTitle('Lalu, Tunggu Apalagi, Gabung sekarang dengan TransEvilz');
  //     setDescription(
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //     );
  //     setImage(Image3);
  //   }
  // });
  const handleMulai = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.Container}>
      <View>
        {/* <View style={styles.ContainerImage}>
          <Image source={image} style={styles.Image} />
        </View> */}
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
                value={'Teknologi terkini yang memberikan kemudahan bagi Anda'}
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
                  'Anda dapat melakukan transfer antar Negara dengan Mudah'
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
                  'Lalu, Tunggu Apalagi, Gabung sekarang dengan TransEvilz'
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
        {/* <View style={styles.ContainerTextTitleOnBoarding}>
          <TextTitleOnBoarding value={title} />
        </View> */}
        {/* <View style={styles.ContainerTextDescriptionOnBoarding}>
          <TextDescriptionOnBoarding value={description} />
        </View> */}
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
        <BlueButton value={'Mulai'} onPress={handleMulai} isButton={true} />
      </View>
      {/* )} */}
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
    marginTop: 60,
    marginBottom: 20,
    height: 450,
  },
  ContainerTextTitleOnBoarding: {
    width: 310,
    marginLeft: 40,
  },
  ContainerTextDescriptionOnBoarding: {
    alignItems: 'center',
    width: 360,
    marginLeft: 15,
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