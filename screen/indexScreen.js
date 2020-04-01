import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontiso from 'react-native-vector-icons/Fontisto';
import IconOcticons from 'react-native-vector-icons/Octicons';
import homeScreen from './homeScreen';
import cartScreen from './cartScreen';
import AsyncStorage from '@react-native-community/async-storage';
import settingScreen from './settingScreen';

const indexScreen = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  // let userLoginToken = AsyncStorage.getItem('authToken');
  const getTokenStorage = async () => {
    const config = {
      accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: 'auth with yourself',
      service: 'example',
      authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
    };
    const key = 'authToken';
    const got = await SecureStorage.getItem(key, config);
    return got;
  };
  // if (!userLoginToken) {
  //   navigation.navigate('Login');
  // }
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={homeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              focused={focused}
              style={{
                fontSize: 25,
                color: focused ? '#FF512F' : 'rgba(0,0,0,.1)',
              }}
              name="md-home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Carts"
        component={cartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconFontiso
              style={{
                fontSize: 25,
                color: focused ? '#FF512F' : 'rgba(0,0,0,.1)',
              }}
              name="opencart"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={settingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconOcticons
              style={{
                fontSize: 25,
                color: focused ? '#FF512F' : 'rgba(0,0,0,.1)',
              }}
              name="settings"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

indexScreen.propTypes = {};

export default indexScreen;
