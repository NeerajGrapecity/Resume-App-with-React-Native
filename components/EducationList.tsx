import {View, Text, FlatList, StyleSheet} from 'react-native';
import Education from './Education';
import {IUser} from './userInterface';

type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function EducationList({user, setUser}: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>EDUCATION</Text>
      <FlatList
        style={styles.list}
        data={user?.educations}
        nestedScrollEnabled
        renderItem={({item}) => (
          <View>
            <Education
              degree={item.degree}
              place={item.place}
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
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
  },
  list: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 400,
  },
});

export default EducationList;
