import {View, Text, StyleSheet, FlatList} from 'react-native';
import Skills from './Skills';
import {IUser} from './userInterface';

type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function SkillsList({user, setUser}: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SKILLS</Text>
      <FlatList
        data={user?.skills}
        renderItem={({item}) => (
          <Skills name={item.name} url={item.url} id={item.id} />
        )}
        numColumns={3}
        nestedScrollEnabled
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
    // alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
});

export default SkillsList;
