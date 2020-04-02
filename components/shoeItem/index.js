import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

const ShoeItem = ({brand, onPress}) => {
  const windowWidth = Dimensions.get('window').width; 
  const [fadeOut] = useState(new Animated.Value(0));
  const IMAGE_CONFIG = [
    {brand: 'Adidas', url: require('../../assets/images/Adidas.png')},
    {brand: 'Nike', url: require('../../assets/images/Nike.png')},
    {brand: 'Vans', url: require('../../assets/images/Vans.png')},
  ];
  const handleFilterImage = brandName => {
    let imageBrand = IMAGE_CONFIG;
    let result = imageBrand.find(item => item.brand === brandName);
    if (result) {
      return result.url;
    }
  };
  useEffect(() => {
    Animated.timing(fadeOut, {
      toValue: 1,
      duration: 700,
      easing: Easing.ease,
    }).start();
  }, []);
 
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Animated.View style={[styles.listContainer, {opacity: fadeOut}, {width: ( windowWidth / 2 ) - 20}]}>
        <Text style={styles.brandName}>{brand}</Text>
        <Image
          style={{width: 100, height: 100}}
          source={handleFilterImage(brand)}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    height: 180,
    marginTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,.2)',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  brandName: {
    fontSize: 20,
    color: '#3a7bd5',
  },
});
ShoeItem.propTypes = {};

export default ShoeItem;
