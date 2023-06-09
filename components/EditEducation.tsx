import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';
import {IUser} from './userInterface';

type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function EditEducation({user, setUser}: props) {
  const handleChangeName = (value: string, index: number) => {
    setUser(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedEducations = [...prevUser.educations];
      updatedEducations[index].place = value;
      return {...prevUser, educations: updatedEducations};
    });
  };
  const handleChangeDegree = (value: string, index: number) => {
    setUser(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedEducations = [...prevUser.educations];
      updatedEducations[index].degree = value;
      return {...prevUser, educations: updatedEducations};
    });
  };
  const handleChangeTime = (value: string, index: number) => {
    setUser(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedEducations = [...prevUser.educations];
      updatedEducations[index].timePeriod = value;
      return {...prevUser, educations: updatedEducations};
    });
  };

  useEffect(() => console.log('edit education is rendered'), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Education</Text>

      {user?.educations.map((education, index) => (
        <View key={index}>
          <Text style={styles.labels}>School/ college Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => {
              handleChangeName(value, index);
            }}
            value={education.place}
          />
          <Text style={styles.labels}>Degree Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => handleChangeDegree(value, index)}
            value={education.degree}
          />
          <Text style={styles.labels}>Time Period</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => {
              handleChangeTime(value, index);
            }}
            value={education.timePeriod}
          />
        </View>
      ))}
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
  title: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },

  labels: {
    marginBottom: 8,
    color: 'black',
    fontFamily: 'Ubuntu-Regular',
  },
});

export default EditEducation;
