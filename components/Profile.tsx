import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, FlatList} from 'react-native';
import Intro from './Intro';
import EducationList from './EducationList';
import ExperienceList from './ExperienceList';
import SkillsList from './SkillsList';
import {IUser} from './userInterface';

function Profile({navigation}: any) {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <View>
      <FlatList
        data={[{}]}
        contentContainerStyle={styles.container}
        renderItem={() => {
          return (
            <View style={styles.container}>
              <Intro user={user} setUser={setUser} />
              <SkillsList user={user} setUser={setUser} />
              <EducationList user={user} setUser={setUser} />
              <ExperienceList user={user} setUser={setUser} />
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          console.log('navigating to edit profile');
          navigation.navigate('Edit Profile');
        }}>
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',

    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    backgroundColor: '#088F8F',
    width: 50,
    height: 40,
    position: 'absolute',
    zIndex: 4,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    // borderRadius: 25,
    top: 150,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Profile;
