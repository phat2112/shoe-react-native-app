import React from 'react';
import PropTypes from 'prop-types';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ShoeList from '../components/shoeList';
import ShoeDetail from '../components/shoeDetail';
import ShoeInformation from '../components/shoeInformation';
import {connect} from 'react-redux';
import {ShoeSelectors} from '../stores/shoes/selectors';

const homeScreen = ({listShoeIdData, shoeInformation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ShoeList}
        options={{
          title: 'Home',
          headerTintColor: '#FF512F',
          headerStyle: {backgroundColor: '#00d2ff'},
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ShoeDetail}
        options={{
          title: listShoeIdData ? listShoeIdData.toJS().brand : 'Detail',
          headerTintColor: '#FF512F',
          headerStyle: {backgroundColor: '#00d2ff'},
        }}
      />
      <Stack.Screen
        name="ShoeInfo"
        component={ShoeInformation}
        options={{
          title: shoeInformation ? shoeInformation.toJS().name : 'ShoeInfo',
          headerTintColor: '#FF512F',
          headerStyle: {backgroundColor: '#00d2ff'},
        }}
      />
    </Stack.Navigator>
  );
};

homeScreen.propTypes = {
  listShoeIdData: PropTypes.any,
  shoeInformation: PropTypes.any,
};
const mapStateToProps = state => ({
  listShoeIdData: ShoeSelectors.getListShoeId(state),
  shoeInformation: ShoeSelectors.getIdShoeData(state),
});

export default connect(mapStateToProps)(homeScreen);
