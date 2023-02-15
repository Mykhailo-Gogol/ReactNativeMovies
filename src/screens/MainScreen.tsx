import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

import {MainRoutes} from '../routes/main';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  const saved = useSelector((state: RootState) => state.saved);
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Movies">
        {MainRoutes.map(({component, name, bagde, icon}) => (
          <Tab.Screen
            key={name}
            navigationKey={name}
            name={name}
            component={component}
            options={{
              tabBarLabel: name,
              tabBarActiveTintColor: 'black',
              tabBarActiveBackgroundColor: '#eee',
              tabBarBadge: bagde && saved?.length ? saved.length : undefined,
              tabBarBadgeStyle: styles.badge,
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () =>
                icon && <FontAwesomeIcon icon={icon} size={24} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#58a6ff',
    color: 'white',
  },
});
