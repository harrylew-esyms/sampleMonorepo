/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Demo from '../shared/components/Demo';
import AnotherDemo from '../shared/components/AnotherDemo';

const Stack = createNativeStackNavigator();

const App = () => {
  //Below is the router map for the navigation
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Demo">
        <Stack.Screen name="Demo" component={Demo} options={{title: 'Home'}} />
        <Stack.Screen name="AnotherDemo" component={AnotherDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
