import React from 'react';
import { StyleSheet, Text, useColorScheme, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const metrics = Dimensions.get('window');

const { width, height } = metrics;

const MainScreen = ({children, title}): Node => {

  const handleAnimFinish = () => {};

  return (
    <View style={styles.container}>
      <LottieView
        source={'level_233_0'}
        style={styles.animationStyle}
        autoPlay
        loop
        imageAssetsFolder="lottie"
        onAnimationFinish={handleAnimFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  animationStyle: {
    width,
    height: width * 1.6,
    zIndex: 2
  }
});

export default MainScreen;
