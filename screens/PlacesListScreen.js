import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/places-action';

const PlacesListScreen = props => {

  const places = useSelector(state => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch])


  return (
    <FlatList 
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => <PlaceItem 
        image={itemData.item.imageUri}
        title={itemData.item.title}
        address={itemData.item.address}
        onSelect={() => {
          props.navigation.navigate('PlaceDetail', {
            placeTitle: itemData.item.title,
            placeId: itemData.item.id
          })
        }}
      />}
    />
  );
};

const styles = StyleSheet.create({

});

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Add Place" iconName="ios-add" onPress={() => {
        navData.navigation.navigate('NewPlace');
      }}/>
    </HeaderButtons>
  };
};

export default PlacesListScreen;