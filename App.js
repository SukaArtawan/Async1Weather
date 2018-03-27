import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FixWeather from './src/Cuaca/FixAsyncWeather';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FixWeather/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
