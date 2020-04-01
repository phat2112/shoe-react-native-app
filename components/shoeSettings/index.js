import React from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SecureStorage, {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE,
} from 'react-native-secure-storage';

const ShoeSettings = ({navigation}) => {
  const signOutHandler = async () => {
    // let removeToken = AsyncStorage.removeItem('authToken');
    const config = {
      accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: 'auth with yourself',
      service: 'example',
      authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
    };
    const key = 'authToken';
    await SecureStorage.removeItem(key, config);
    await navigation.navigate('Login');
    console.log(SecureStorage.removeItem(key, config))
  };

  return (
    <View>
      <Text>Hello world</Text>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => {
            signOutHandler();
          }}>
          <Text style={{color: 'white'}}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  signOutButton: {
    width: 410,
    height: 45,
    backgroundColor: '#FFB75E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
ShoeSettings.propTypes = {};

export default ShoeSettings;
