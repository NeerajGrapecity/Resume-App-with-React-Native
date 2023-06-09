import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import EditIntro from './EditIntro';
import EditSkills from './EditSkills';
import EditEducation from './EditEducation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './userInterface';
import EditExperience from './EditExperience';

function EditProfile(props: any) {
  const [editUser, setEditUser] = useState<IUser | null>(null);

  const submitForm = async (navigation: any) => {
    await AsyncStorage.setItem('@user', JSON.stringify(editUser));
    navigation.reset({index: 0, routes: [{name: 'Profile'}]});
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Edit Form</Text>
        <EditIntro user={editUser} setUser={setEditUser} />
        <EditSkills user={editUser} setUser={setEditUser} />
        <EditEducation user={editUser} setUser={setEditUser} />
        <EditExperience user={editUser} setUser={setEditUser} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          submitForm(props.navigation);
        }}>
        <Text style={styles.submitButton}>Submit</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
  },

  heading: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
    color: 'black',
  },
  submitButton: {
    padding: 10,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Regular',
    width: '100%',
    fontSize: 18,
    backgroundColor: 'green',
    color: 'white',
  },
});

export default EditProfile;
