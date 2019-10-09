import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const PlacesListScreen = props => {

  return (
    <View>
      <Text>Places List Screen</Text>
    </View>
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