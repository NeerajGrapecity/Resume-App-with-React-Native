import {View, Text, StyleSheet} from 'react-native';

type experience = {
  company: string;
  designation: string;
  timePeriod: string;
};

function Experience(props: experience) {
  return (
    <View style={styles.experienceContainer}>
      <Text style={styles.designation}>{`\u2043 ${props.designation}`}</Text>
      <Text style={styles.companyName}>{props.company}</Text>
      <Text style={styles.timePeriod}>{props.timePeriod}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  designation: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Ubuntu-Regular',
  },
  experienceContainer: {
    margin: 10,
  },
  companyName: {
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

export default Experience;
