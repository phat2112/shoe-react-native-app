import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as helper from '../../Utils/helper';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {ShoeActions} from '../../stores/shoes/actions';
import {ShoeSelectors} from '../../stores/shoes/selectors';
import {CartActions} from '../../stores/cart/actions';
import {CartSelectors} from '../../stores/cart/selectors';

const ShoeInformation = ({
  route,
  navigation,
  shoeInformation,
  getShoeInformation,
  addtoCart,
}) => {
  const shoeInfoId = route.params.shoeInfoId;
  const [count, setCount] = useState(1);
  const cartHandler = (shoeData, quantity) => {
    if (shoeData) {
      let valueShoe = {
        shoeData: shoeData,
        quantity: quantity,
      };
      addtoCart(valueShoe);
      navigation.navigate('Carts');
    }
  };
  useEffect(() => {
    getShoeInformation(shoeInfoId);
  }, []);
  return (
    <View style={{flex: 1, padding: 10}}>
      {shoeInformation ? (
        <Image
          style={[styles.shoeInfoImage]}
          source={{
            uri: helper.handleUploadImage(shoeInformation.toJS().image[0].url),
          }}
        />
      ) : (
        <Text>None</Text>
      )}
      <View style={styles.shoeInfoContainer}>
        <View>
          <Text style={styles.infoShoe}>
            Brand:{' '}
            {shoeInformation
              ? shoeInformation.getIn(['shoeList', 'brand'])
              : 'none'}
          </Text>
          <Text style={styles.infoShoe}>
            Price: {shoeInformation ? shoeInformation.get('price') : 'none'}
          </Text>
        </View>
        <View style={styles.quantityButton}>
          <TouchableOpacity
            onPress={() => {
              setCount(count - 1);
              if (count <= 1) {
                setCount(1);
              }
            }}>
            <Icon style={{fontSize: 20}} name="minus" />
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}>
            <Icon style={{fontSize: 20}} name="plus" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.buttonAddToCart}
          onPress={() => cartHandler(shoeInformation.toJS(), count)}>
          <Text style={{fontSize: 18}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shoeInfoImage: {
    height: 250,
  },
  infoShoe: {
    fontSize: 20,
    marginVertical: 10,
  },
  quantityButton: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6DD5FA',
    alignItems: 'center',
    height: 45,
    borderRadius: 20,
  },
  shoeInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonAddToCart: {
    width: 150,
    height: 45,
    marginVertical: 20,
    backgroundColor: '#00F260',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

ShoeInformation.propTypes = {
  shoeInformation: PropTypes.any,
  getShoeInformation: PropTypes.func,
};
const mapStateToProps = state => ({
  shoeInformation: ShoeSelectors.getIdShoeData(state),
});
const mapDispatchToProps = dispatch => ({
  getShoeInformation: idShoe => dispatch(ShoeActions.getShoeid(idShoe)),
  addtoCart: valueItem => dispatch(CartActions.addToCart(valueItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeInformation);
