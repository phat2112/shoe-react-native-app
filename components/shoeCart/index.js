import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, FlatList, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {globalStyles} from '../../styles/global';
import {CartSelectors} from '../../stores/cart/selectors';
import ShoeCartItems from '../../components/shoeCartItems';
import * as helper from '../../Utils/helper';
import {connect} from 'react-redux';

const ShoeCart = ({navigation, cartItems}) => {
  const dataShoe = [];
  return (
    <ScrollView>
      <Text style={styles.totalCartTitle}>Your Total</Text>
      {cartItems ? (
        <FlatList
          data={cartItems ? cartItems : dataShoe}
          renderItem={({item}) => (
            <ShoeCartItems
              idShoe={item.shoeData.id}
              quantity={item.quantity}
              name={item.shoeData.name}
              image={helper.handleUploadImage(item.shoeData.image[0].url)}
              price={item.shoeData.price}
            />
          )}
          keyExtractor={item => item.shoeData.id}
        />
      ) : (
        <>
          <Text style={styles.cartMessage}>Your Cart is Empty</Text>
        </>
      )}
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={globalStyles.buttonBack}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'white'}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  totalCartTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
    marginVertical: 15,
    color: '#2193b0',
  },
  cartMessage: {
    textAlign: 'center',
  },
});

ShoeCart.propTypes = {
  cartItems: PropTypes.array,
};

const mapStateToProps = state => ({
  cartItems: CartSelectors.getCart(state),
});
export default connect(mapStateToProps)(ShoeCart);
