import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Animated,
} from 'react-native';
import {ShoeActions} from '../../stores/shoes/actions';
import {ShoeSelectors} from '../../stores/shoes/selectors';
import {connect} from 'react-redux';
import * as helper from '../../Utils/helper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Easing} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ShoeDetail = ({route, navigation, getlistShoeData, listShoeIdData}) => {
  const idShoe = route.params.shoeId;
  const [activeOpacity, setActiveOpacity] = useState(1);
  const [fadeItem] = useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeItem, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start();
  });

  function Item({name, image, price, shoeId}) {
    return (
      <Animated.View style={[styles.shoeItemContainer, {opacity: fadeItem}]}>
        <Image
          style={styles.shoeImage}
          source={{uri: helper.handleUploadImage(image)}}
        />
        <Text style={styles.shoeName}>{name} </Text>
        <View style={styles.shoePrice}>
          <Text style={{fontSize: 18}}>{price}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ShoeInfo', {shoeInfoId: shoeId});
            }}>
            <Icon
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 20,
                color: '#fcb045',
              }}
              name="md-cart"
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
  const data = [
    {id: 1, name: 'shoes', image: [{url: ''}]},
    {id: 1, name: 'shoes', image: [{url: ''}]},
    {id: 1, name: 'shoes', image: [{url: ''}]},
  ];
  useEffect(() => {
    getlistShoeData(idShoe);
  }, []);
  return (
    <>
      <FlatList
        numColumns={2}
        data={listShoeIdData ? listShoeIdData.toJS().shoes : data}
        renderItem={({item}) => (
          <Item
            name={item.name}
            image={item.image[0].url}
            price={item.price}
            shoeId={item.id}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};
const styles = StyleSheet.create({
  shoeItemContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  shoeImage: {
    flex: 1,
    width: 180,
    height: 140,
    resizeMode: 'contain',
  },
  shoeName: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '700',
    color: '#fd1d1d',
  },
  shoePrice: {
    width: 180,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});
ShoeDetail.propTypes = {
  listShoeIdData: PropTypes.object,
};
const mapStateToProps = state => ({
  listShoeIdData: ShoeSelectors.getListShoeId(state),
});
const mapDispatchToProps = dispatch => ({
  getlistShoeData: idShoe => dispatch(ShoeActions.getShoeListId(idShoe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeDetail);
