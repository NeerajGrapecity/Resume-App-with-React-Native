import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Profile from './Profile';
import EditProfile from './EditProfile';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default MyStack;
