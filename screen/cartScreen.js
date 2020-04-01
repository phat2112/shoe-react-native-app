import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {createStackNavigator} from '@react-navigation/stack';
import ShoeCart from '../components/shoeCart';

const cartScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={ShoeCart}
        options={{title: 'Cart', headerTintColor: '#FF512F', headerStyle:{backgroundColor: '#00d2ff'}}}
      />
    </Stack.Navigator>
  );
};

cartScreen.propTypes = {};

export default cartScreen;
