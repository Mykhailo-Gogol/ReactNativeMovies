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

  const barIconMovies = () =>
    Routes.movies.icon && (
      <FontAwesomeIcon icon={Routes.movies.icon} size={24} />
    );

  const barIconSaved = () =>
    Routes.saved.icon && <FontAwesomeIcon icon={Routes.saved.icon} size={24} />;

  const barIconVideo = () =>
    Routes.video.icon && <FontAwesomeIcon icon={Routes.video.icon} size={24} />;

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
          tabBarIcon: barIconMovies,
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
          tabBarIcon: barIconSaved,
        }}
      />
      <Tab.Screen
        key={Routes.video.name}
        navigationKey={Routes.video.name}
        name={Routes.video.name}
        component={Routes.video.component}
        options={{
          tabBarLabel: Routes.video.name,
          tabBarIcon: barIconVideo,
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
