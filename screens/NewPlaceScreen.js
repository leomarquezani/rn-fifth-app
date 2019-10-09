import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/places-action';

const NewPlaceScreen = props => {

  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState('');

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const savePlacehandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput 
          style={styles.textInput} 
          onChangeText={titleChangeHandler}
          title={titleValue}
        />
        <Button 
          title="Save Place" 
          color={Colors.primary} 
          onPress={savePlacehandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 2,
    paddingVertical: 4
  }
});

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place'
};

export default NewPlaceScreen;