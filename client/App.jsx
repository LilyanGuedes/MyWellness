import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rect  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import{Water} from './src/pages/water'
import{User} from './src/pages/user'
import {Details} from './src/pages/details';
import { Home } from './src/pages/home';
import { Training } from './src/pages/training';

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen
            name="home"
            component={Home}
            options={{headerShown : false}}/>
          <Stack.Screen
            name="training"
            component={Training}
            options={{headerShown : false}}
            />
          <Stack.Screen
            name="details"
            component={Details}
            options={{headerShown : false}}
            />
          <Stack.Screen
            name="user"
            component={User}
            options={{headerShown : false}}
           />
          <Stack.Screen
            name="water"
            component={Water}
            options={{headerShown : false}}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}