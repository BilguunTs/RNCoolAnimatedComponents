import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Hello this is me</Text>

      <View style={styles.btn}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: 'purple',
  },
});

export default Main;
