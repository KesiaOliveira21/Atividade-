import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import ServiceList from '../screens/Services/ServiceList';
import ClientList from '../screens/Clients/ClientList';
import CategoryList from '../screens/Categories/CategoryList';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabs({ user, setUser }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Services':
              iconName = 'build';
              break;
            case 'Clients':
              iconName = 'people';
              break;
            case 'Categories':
              iconName = 'category';
              break;
            case 'Statistics':
              iconName = 'bar-chart';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'circle';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServiceList} />
      <Tab.Screen name="Clients" component={ClientList} />
      <Tab.Screen name="Categories" component={CategoryList} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} user={user} setUser={setUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
