import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, StyleSheet} from 'react-native';
import * as helper from '../../Utils/helper';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {CartSelectors} from '../../stores/cart/selectors';
import {CartActions} from '../../stores/cart/actions';
import {ShoeActions} from '../../stores/shoes/actions';
import {ShoeSelectors} from '../../stores/shoes/selectors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ShoeCartItems = ({
  idShoe,
  quantity,
  name,
  image,
  price,
  removeCart,
}) => {
  const getTotal = (quantity, price) => {
    let newPrice = parseInt(price.split('$'));
    let total = quantity * newPrice;
    return total + '$';
  };
  return (
    <View style={styles.listCartContainer}>
      {image ? (
        <Image
          style={[styles.listCartImage]}
          source={{
            uri: image,
          }}
        />
      ) : (
        'none'
      )}
      <View style={styles.listCartContent}>
        <Text style={{fontSize: 16}}>{name}</Text>
        <Text style={{fontSize: 16}}>{quantity}</Text>
        <Text style={{fontSize: 16}}>{getTotal(quantity, price)}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          removeCart(idShoe);
        }}>
        <Icon name="md-trash" style={{fontSize: 25}} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  listCartContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  listCartImage: {
    flex: 1,
    height: 200,
    marginRight: 10,
    resizeMode: 'contain'
  },
  listCartContent: {
    flex: 1,
  },
});

ShoeCartItems.propTypes = {
  idShoe: PropTypes.number,
  quantity: PropTypes.number,
  getShoeInformation: PropTypes.func,
  removeCart: PropTypes.func,
};

const mapStateToProps = state => ({
  cartItems: CartSelectors.getCart(state),
  shoeInformation: ShoeSelectors.getIdShoeData(state),
});

const mapDispatchToProps = dispatch => ({
  getShoeInformation: idShoe => dispatch(ShoeActions.getShoeid(idShoe)),
  removeCart: idShoe => dispatch(CartActions.removeCart(idShoe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeCartItems);
