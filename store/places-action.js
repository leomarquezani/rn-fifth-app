import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, image) => {

  return async dispatch => {

    //gets the image name
    //since this is a uri like file/chace/xxx/image.jpg - return image.jpg
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      });
    } catch (error) {
      console.log(error);
      throw error;
    }

    dispatch({
      type: ADD_PLACE,
      placeData: {
        title: title,
        image: newPath
      }
    })
  }; 
};