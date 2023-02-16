import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Routes} from './routes';

const Tab = createBottomTabNavigator();

export default function DetailsNavigatior() {
  const saved = useSelector((state: RootState) => state.saved);

  const barIconDetails = () =>
    Routes.details.icon && (
      <FontAwesomeIcon icon={Routes.details.icon} size={24} />
    );

  const barIconSaved = () =>
    Routes.saved.icon && <FontAwesomeIcon icon={Routes.saved.icon} size={24} />;

  return (
    <Tab.Navigator
      initialRouteName={Routes.details.name}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#eee',
        tabBarBadgeStyle: styles.badge,
      }}>
      <Tab.Screen
        key={Routes.details.name}
        navigationKey={Routes.details.name}
        name={Routes.details.name}
        component={Routes.details.component}
        options={{
          tabBarLabel: Routes.details.name,
          tabBarIcon: barIconDetails,
          headerShown: false,
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
          headerShown: false,
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
