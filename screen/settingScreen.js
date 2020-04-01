import React from 'react';
import PropTypes from 'prop-types';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ShoeSettings from '../components/shoeSettings';

const settingScreen = props => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={ShoeSettings}
        options={{
          headerTintColor: '#FF512F',
          headerStyle: {backgroundColor: '#00d2ff'},
        }}
      />
    </Stack.Navigator>
  );
};

settingScreen.propTypes = {};

export default settingScreen;
