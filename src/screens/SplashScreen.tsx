import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import LottieView from 'lottie-react-native';
import {images} from '../utils/images';
import {StackNavigationProp} from '@react-navigation/stack';
import responsive from '../utils/responsive';
import { useAppSelector } from '../store';
import { selectUser } from '../store/auth/authSlice';

interface SplashProps {
  navigation: StackNavigationProp;
}

const SplashScreen = ({navigation}: SplashProps) => {
  const isLoggedIn = useAppSelector(selectUser);

  const navigateToNextScreen = () => {
    navigation.replace(
      isLoggedIn == null ? 'Login' : 'Movies',
    );
  };
  
  useEffect(() => {
    setTimeout(() => {
      navigateToNextScreen()
    }, 1000);
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <LottieView
        source={images.landingAnimation}
        style={styles.splashView}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'black'},
  splashView: {width: responsive.pWidth(100), height: responsive.pHeight(100)},
});

export default SplashScreen;
