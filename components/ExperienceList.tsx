import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Experience from './Experience';
import {IUser} from './userInterface';

// const data = [
//   {
//     id: 1,
//     companyName: 'Grapecity India Pvt. ltd',
//     designation: 'Trainee',
//     timePeriod: 'February, 2023-Present',
//   },
//   {
//     id: 2,
//     companyName: 'Nagaroo',
//     designation: 'Summer Intern',
//     timePeriod: 'June, 2022- July, 2022',
//   },
// ];

type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function ExperienceList({user, setUser}: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>EXPERIENCE</Text>
      <FlatList
        style={styles.list}
        data={user?.experiences}
        nestedScrollEnabled
        renderItem={({item}) => (
          <View>
            <Experience
              company={item.company}
              designation={item.designation}
              timePeriod={item.timePeriod}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: '#151516',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Ubuntu-Medium',
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    marginBottom: 50,
  },
  list: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 400,
  },
});

export default ExperienceList;
