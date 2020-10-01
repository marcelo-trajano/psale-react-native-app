import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SighUp from '../screens/SighUp';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SighUp" component={SighUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
