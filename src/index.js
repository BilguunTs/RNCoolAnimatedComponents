import React from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {View, StyleSheet} from 'react-native';

const Main = () => {
  const valueY = useSharedValue(0);
  return (
    <View style={styles.container}>
      <View
        style={{transform: [{translateY: valueY.value}], ...styles.btn}}></View>
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
    borderRadius: 20,
    backgroundColor: 'purple',
  },
});

export default Main;
