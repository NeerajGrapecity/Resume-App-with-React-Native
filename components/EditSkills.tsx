import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import {IUser} from './userInterface';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function EditSkills({user, setUser}: props) {
  const pickImageFromGallery = index => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(response => {
      setUser(prevUser => {
        if (!prevUser) {
          return prevUser;
        }
        const updatedSkills = [...prevUser.skills];
        try {
          updatedSkills[index].url = response.path;
        } catch (error) {
          console.log(error);
        }
        return {...prevUser, skills: updatedSkills};
      });
    });
  };

  const handleChangeName = (value: string, index: number) => {
    setUser(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedSkills = [...prevUser.skills];
      updatedSkills[index].name = value;
      return {...prevUser, skills: updatedSkills};
    });
  };

  useEffect(() => {
    console.log('user data in edit skills: ' + user);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Skills</Text>

      {user?.skills.map((skill, index) => (
        <View key={index} style={styles.skillContainer}>
          <View style={styles.leftContainer}>
            <ImageBackground
              source={{uri: skill.url}}
              resizeMode="cover"
              style={styles.image}
              imageStyle={{opacity: 0.7, backgroundColor: 'black'}}>
              <FontAwesome5
                name={'pencil-alt'}
                style={styles.icon}
                onPress={() => pickImageFromGallery(index)}
              />
            </ImageBackground>
          </View>
          <View style={styles.rightContainer}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Ubuntu-Regular',
                marginBottom: 5,
              }}>
              Skill:
            </Text>
            <TextInput
              style={styles.input}
              value={skill.name}
              onChangeText={value => {
                handleChangeName(value, index);
              }}
            />
            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                pickImageFromGallery(index);
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  padding: 5,
                  textAlign: 'center',
                  fontFamily: 'Ubuntu-Regular',
                }}>
                Pick Image
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 16,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#02A6FD',
    width: '100%',
    borderRadius: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  icon: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  rightContainer: {
    width: '50%',
    justifyContent: 'center',
  },
  leftContainer: {
    width: '50%',
    alignItems: 'center',
  },

  skillContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    margin: 5,
  },
});

export default EditSkills;
