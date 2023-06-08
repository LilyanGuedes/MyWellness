import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rect  from 'react';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <AppRoutes/>
    </View>
  );
}