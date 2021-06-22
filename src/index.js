import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {View, StyleSheet, Button} from 'react-native';

const Main = () => {
  const valueY = useSharedValue(0);
  const valueX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: valueX.value * 200},
        {translateY: valueY.value * 200},
      ],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.btn, animatedStyles]} />
      <Button
        title="Click"
        onPress={() => {
          valueY.value = withSpring(Math.random(-255, 255));
          valueX.value = withSpring(Math.random(-255, 255));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'purple',
  },
});

export default Main;
