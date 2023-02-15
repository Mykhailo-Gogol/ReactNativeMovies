import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import {TRootStackParamList} from '../types';

const Stack = createStackNavigator<TRootStackParamList>();

export default () => {
  return (
    <Stack.Navigator initialRouteName={Routes.main.name}>
      <Stack.Screen
        component={Routes.main.component}
        name={Routes.main.name}
        options={{headerShown: false, headerTitle: Routes.main.title}}
      />
      <Stack.Screen
        component={Routes.details.component}
        name={Routes.details.name}
      />
    </Stack.Navigator>
  );
};
