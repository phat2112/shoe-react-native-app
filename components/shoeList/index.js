import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {ShoeActions} from '../../stores/shoes/actions';
import {ShoeSelectors} from '../../stores/shoes/selectors';
import ShoeItem from '../shoeItem';


const ShoeList = ({navigation, getShoeList, listShoe}) => {
  const data = [
    {id: 1, shoeBrand: 'Nike'},
    {id: 2, shoeBrand: 'Adidas'},
    {id: 3, shoeBrand: 'Vans'},
    {id: 4, shoeBrand: 'Reebook'},
  ];

  useEffect(() => {
    getShoeList();
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={listShoe ? listShoe.toJS() : data}
      renderItem={({item}) => (
        <ShoeItem
          brand={listShoe ? item.brand : item.shoeBrand}
          onPress={() => navigation.navigate('Detail', {shoeId: item.id})}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};
const styles = StyleSheet.create({
});

ShoeList.propTypes = {
  getShoeList: PropTypes.func,
  listShoe: PropTypes.any,
};
const mapStateToProps = state => ({
  listShoe: ShoeSelectors.getListShoe(state),
});
const mapDispatchToProps = dispatch => ({
  getShoeList: () => dispatch(ShoeActions.getShoeList()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoeList);
