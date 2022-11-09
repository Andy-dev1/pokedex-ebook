import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomePage from './components/HomePage';
// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:0,
    margin:0,
    width:'100vw',
    height:'100vh'
  },
});