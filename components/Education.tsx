import {View, Text, StyleSheet} from 'react-native';

type education = {
  place: string;
  degree: string;
  timePeriod: string;
};

function Education(props: education) {
  return (
    <View style={styles.educationContainer}>
      <Text style={styles.degree}>{`\u2043 ${props.degree}`}</Text>
      <Text style={styles.place}>{props.place}</Text>
      <Text style={styles.timePeriod}>{props.timePeriod}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  degree: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Ubuntu-Regular',
  },
  educationContainer: {
    margin: 10,
  },
  place: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Ubuntu-Regular',
    paddingLeft: 10,
  },
  timePeriod: {
    fontSize: 12,
    fontFamily: 'Ubuntu-Regular',
    paddingLeft: 10,
  },
});

export default Education;
