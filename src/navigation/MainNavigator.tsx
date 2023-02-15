import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Routes} from './routes';

const Tab = createBottomTabNavigator();

export default function MainNavigatior() {
  const saved = useSelector((state: RootState) => state.saved);
  return (
    <Tab.Navigator
      initialRouteName={Routes.movies.name}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#eee',
        tabBarBadgeStyle: styles.badge,
      }}>
      <Tab.Screen
        key={Routes.movies.name}
        navigationKey={Routes.movies.name}
        name={Routes.movies.name}
        component={Routes.movies.component}
        options={{
          tabBarLabel: Routes.movies.name,
          tabBarBadge:
            Routes.movies.bagde && saved?.length ? saved.length : undefined,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () =>
            Routes.movies.icon && (
              <FontAwesomeIcon icon={Routes.movies.icon} size={24} />
            ),
        }}
      />
      <Tab.Screen
        key={Routes.saved.name}
        navigationKey={Routes.saved.name}
        name={Routes.saved.name}
        component={Routes.saved.component}
        options={{
          tabBarLabel: Routes.saved.name,
          tabBarBadge:
            Routes.saved.bagde && saved?.length ? saved.length : undefined,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () =>
            Routes.saved.icon && (
              <FontAwesomeIcon icon={Routes.saved.icon} size={24} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#58a6ff',
    color: 'white',
  },
});
