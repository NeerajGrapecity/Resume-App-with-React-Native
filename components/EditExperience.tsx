import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {IUser} from './userInterface';

type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function EditExperience({user, setUser}: props) {
  const handleChangeCompany = (value: string, index: number) => {
    setUser(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedExperiences = [...prevUser.experiences];
      updatedExperiences[index].company = value;
      return {...prevUser, experiences: updatedExperiences};
    });
  };

  const handleChangeDesignation = (value: string, index: number) => {
    setUser(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedExperiences = [...prevUser.experiences];
      updatedExperiences[index].designation = value;
      return {...prevUser, experiences: updatedExperiences};
    });
  };

  const handleChangeTimePeriod = (value: string, index: number) => {
    setUser(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedExperiences = [...prevUser.experiences];
      updatedExperiences[index].timePeriod = value;
      return {...prevUser, experiences: updatedExperiences};
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Experience</Text>
      {user?.experiences.map((experience, index) => (
        <View key={index}>
          <Text style={styles.labels}>Company-Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => {
              handleChangeCompany(value, index);
            }}
            value={experience.company}
          />
          <Text style={styles.labels}>Position</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => {
              handleChangeDesignation(value, index);
            }}
            value={experience.designation}
          />
          <Text style={styles.labels}>Time Period</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => {
              handleChangeTimePeriod(value, index);
            }}
            value={experience.timePeriod}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    color: 'black',
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

export default EditExperience;
