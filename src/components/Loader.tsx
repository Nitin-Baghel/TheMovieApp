import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {images} from '../utils/images';
import responsive from '../utils/responsive';

interface LoaderProps {
  width?: number;
  height?: number;
}
const Loader = ({width, height}: LoaderProps) => {
  return (
    <LottieView
      source={images.loader}
      autoPlay
      loop
      style={{width: responsive.pWidth(width ?? 100), height: width ?? 200}}
    />
  );
};

export default Loader;