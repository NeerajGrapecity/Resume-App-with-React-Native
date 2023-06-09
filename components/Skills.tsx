import {View, Text, StyleSheet, Image} from 'react-native';

type skill = {
  id: number;
  name: string;
  url: string;
};

function Skills(props: skill) {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: props.url,
        }}
      />
      <Text style={styles.skillName}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
  },
  image: {width: 50, height: 50},

  imageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  skillName: {
    paddingTop: 10,
    fontSize: 15,
    color: 'black',
    fontFamily: 'Ubuntu-Light',
  },
});

export default Skills;
