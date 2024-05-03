import { Dimensions, PixelRatio } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const scale = deviceWidth / 375;

const responsive = {
	width: (w: number) => PixelRatio.roundToNearestPixel(w * scale),
	height: (h: number) => PixelRatio.roundToNearestPixel(h * scale),
	margin: (m: number) => PixelRatio.roundToNearestPixel(m * scale),
	padding: (p: number) => PixelRatio.roundToNearestPixel(p * scale),
	pHeight: (pH: number) => pHeight(pH), 
	pWidth: (pW: number) => pWidth(pW), 
	deviceHeight: deviceHeight,
	deviceWidth: deviceWidth,
	fontSize: (size: number) => PixelRatio.roundToNearestPixel(size * scale),
};

const pHeight = (percentage: number) => {
	const screenHeight = Dimensions.get('screen').height;
	return (percentage / 100) * screenHeight;
};

const pWidth = (percentage: number) => {
	const screenWidth = Dimensions.get('screen').width;
	return (percentage / 100) * screenWidth;
};

export default responsive;
