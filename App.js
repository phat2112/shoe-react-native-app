/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import indexScreen from './screen/indexScreen';
import LoginScreen from './screen/loginScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Index"
            component={indexScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
