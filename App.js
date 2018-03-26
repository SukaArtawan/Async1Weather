import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Weather from './src/Cuaca/weather';
import weather from './src/Cuaca/AsyncWeather';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Weather/>
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
