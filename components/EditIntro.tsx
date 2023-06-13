import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {IUser} from './userInterface';
// import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function EditIntro({user, setUser}: props) {
  const updateName = (value: string) => {
    setUser(prevUser => ({...prevUser, name: value} as IUser));
  };

  const updateRole = (value: string) => {
    setUser(prevUser => ({...prevUser, role: value} as IUser));
  };

  const updateLocation = (value: string) => {
    setUser(prevUser => ({...prevUser, location: value} as IUser));
  };

  const getData = async () => {
    const response = await AsyncStorage.getItem('@user');
    console.log('response in editIntro: ' + response);
    setUser(JSON.parse(response));
  };

  const pickImageFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(response => {
      try {
        setUser({...user, image: response.path});
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {user && user.image && (
          <ImageBackground
            source={{uri: user.image}}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{opacity: 0.7, backgroundColor: 'black'}}>
            <FontAwesome5
              name={'pencil-alt'}
              style={styles.icon}
              onPress={() => pickImageFromGallery()}
            />
          </ImageBackground>
        )}
      </View>
      <Text style={styles.labels}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateName}
        value={user?.name}
      />
      <Text style={styles.labels}>Job Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateRole}
        value={user?.role}
      />
      <Text style={styles.labels}>Location:</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateLocation}
        value={user?.location}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '80%',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 28,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 100,
    width: 100,
  },
  icon: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  button: {
    height: 32,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#02A6FD',
    width: 100,
    borderRadius: 5,
  },
  labels: {
    marginBottom: 8,
    color: 'black',
    fontFamily: 'Ubuntu-Regular',
  },
  imageContainer: {
    alignItems: 'center',
  },
});

export default EditIntro;
