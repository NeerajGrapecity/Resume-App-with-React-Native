import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {IUser} from './userInterface';
import TrackPlayer from 'react-native-track-player';
import {TouchableOpacity} from 'react-native-gesture-handler';

// interface IUser {
//   name: string;
//   role: string;
//   location: string;
// }
type props = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

function Intro({user, setUser}: props) {
  // const [user, setUser] = useState<IUser | null>(null);
  // useEffect(() => {
  //   console.log('Intro');
  //   getData();
  // }, []);

  //
  const [isSetup, setIsSetup] = useState(false);
  const setup = async () => {
    // Set up the player
    // console.log('here');
    if (!isSetup) {
      try {
        // Set up the player
        await TrackPlayer.setupPlayer();
        setIsSetup(true);
      } catch (error) {
        console.log(error);
      }
    }
    // else {
    // //   // await TrackPlayer.reset();
    // // }

    await TrackPlayer.add({
      id: 'trackId',
      url: require('../components/track.mp3'), // Use require() to provide the correct file path
      title: 'Track Title',
      artist: 'Track Artist',
    });

    TrackPlayer.setVolume(0.5);

    // await TrackPlayer.setupPlayer();

    // // Add a track to the queue
    // await TrackPlayer.add({
    //   id: 'trackId',
    //   url: '../components/track.mp3',
    //   title: 'Track Title',
    //   artist: 'Track Artist',
    //   // artwork: require('track.png'),
    // });

    // // console.log('here');
    // // Start playing it
    // try {
    //   await TrackPlayer.play();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const getData = async () => {
    try {
      const user = await AsyncStorage.getItem('@user');
      if (user != null) {
        console.log('storage has a user ' + user);
        setUser(JSON.parse(user));
      } else {
        console.log('Async storage is empty');
        const defaultUser = {
          name: 'Name',
          role: 'Role',
          location: 'Location',
          image:
            'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          educations: [
            {
              place: 'College Name',
              degree: 'Degree',
              timePeriod: 'year of passing',
            },
            {
              place: 'College Name',
              degree: 'Degree 2',
              timePeriod: 'year of passing',
            },
            {
              place: 'College Name',
              degree: 'Degree 3',
              timePeriod: 'year of passing',
            },
          ],
          experiences: [
            {
              designation: 'Role',
              company: 'Company Name',
              timePeriod: 'timePeriod',
            },

            {
              designation: 'Role',
              company: 'Company Name',
              timePeriod: 'timePeriod',
            },
          ],
          skills: [
            {
              id: 1,
              name: 'React-native',
              url: 'https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/12/React_Native_Logo.png?resize=1024%2C538&ssl=1',
            },
            {
              id: 2,
              name: 'JavaScript',
              url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
            },
            {
              id: 3,
              name: 'MSSql',
              url: 'https://allvectorlogo.com/img/2017/02/microsoft-sql-server-logo.png',
            },
            {
              id: 4,
              name: 'React JS',
              url: 'https://th.bing.com/th/id/OIP.VsvOr2Q2d_Ixr1aUDFGmIQHaHC?w=183&h=180&c=7&r=0&o=5&pid=1.7',
            },
            {
              id: 5,
              name: 'HTML',
              url: 'https://th.bing.com/th/id/OIP.4dQkxLm-cAndV-9OfVjjQwAAAA?pid=ImgDet&rs=1',
            },
            {
              id: 6,
              name: 'CSS',
              url: 'https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7',
            },
            {
              id: 7,
              name: 'C#',
              url: 'https://th.bing.com/th/id/OIP.ROs29yyFLoO5_RsI10ezAQHaJ4?w=156&h=208&c=7&r=0&o=5&pid=1.7',
            },
            {
              id: 8,
              name: 'Cypress',
              url: 'https://www.opencodez.com/wp-content/uploads/2019/12/cypress-logo.png',
            },
            {
              id: 9,
              name: 'J-meter',
              url: 'https://www.influxdata.com/wp-content/uploads/Apache-JMeter.jpg',
            },
            {
              id: 10,
              name: 'Postman',
              url: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_alt_macos_bigsur_icon_189814.png',
            },
          ],
        };
        setUser(defaultUser);
        await AsyncStorage.setItem('@user', JSON.stringify(defaultUser));
        const response = await AsyncStorage.getItem('@user');
        // console.log('default data in async Storage' + response);
      }
    } catch (e) {
      console.warn('error');
    }
  };

  const deleteUser = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      console.log('deleted user');
      const response = await AsyncStorage.getItem('@user');
      console.log(response);
    } catch (e) {
      // remove error
    }
  };

  useEffect(() => {
    console.log('Intro is rendered');
    getData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
        {user && user.image && (
          <Image
            style={styles.image}
            source={{
              uri: user?.image,
            }}
          />
        )}
      </View> */}
        <Svg width="100" height="100">
          {/* <Image href="https://pixy.org/src/487/4870083.jpg" /> */}
          <Circle
            cx="50"
            cy="50"
            r="46"
            // stroke="#0074cc"
            stroke="#088F8F"
            strokeWidth="4"
            fill="white"
          />
          {user && user.image && (
            <Image
              style={styles.image}
              source={{
                uri: user?.image,
              }}
            />
          )}
        </Svg>
        <View style={styles.details}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.designation}>{user?.role}</Text>
          <Text style={styles.location}>
            <FontAwesome5 name={'map-marker-alt'} />
            {` ${user?.location}`}
          </Text>
          {/* <Button title="Delete async storage" onPress={() => deleteUser()} /> */}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={async () => {
            // await setup();
            await TrackPlayer.pause();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Ubuntu-Regular',
            }}>
            <FontAwesome5 name={'pause'} style={{fontSize: 20}} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={async () => {
            await setup();
            await TrackPlayer.play();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Ubuntu-Regular',
            }}>
            <FontAwesome5 name={'play'} style={{fontSize: 20}} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={async () => {
            await setup();
            await TrackPlayer.stop();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'Ubuntu-Regular',
            }}>
            <FontAwesome5 name={'stop'} style={{fontSize: 20}} />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 50,
  },
  image: {
    margin: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttons: {
    // backgroundColor: '#916ec9',
    backgroundColor: '#088F8F',
    // backgroundColor: 'black',
    padding: 15,
    height: 50,
    width: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 50,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 84,
    height: 84,
    borderRadius: 41,
  },
  name: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Ubuntu-Medium',
  },
  details: {
    marginLeft: 30,
  },
  designation: {
    color: '#2e3033',
    fontSize: 20,
    fontFamily: 'Ubuntu-Regular',
  },
  location: {
    fontSize: 15,
    color: '#848586',
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Intro;
