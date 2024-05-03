import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {images} from '../utils/images';

export const Overlay = ({isVisible}) => {
  if (!isVisible) return null;

  return (
    <View
      testID="overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        source={images.loader}
        autoPlay
        loop
        style={{width: 400, height: 400}}
      />
    </View>
  );
};

const withLoader = WrappedComponent => {
  return props => {
    const [isVisible, setIsVisible] = useState(false);

    const showLoader = isVisible => {
      setIsVisible(isVisible);
    };

    return (
      <>
        <WrappedComponent testID="withLoaderHOC" showLoader={showLoader} {...props} />
        <Overlay isVisible={isVisible} />
      </>
    );
  };
};

export default withLoader;
