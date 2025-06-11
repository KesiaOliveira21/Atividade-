import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FreelancersScreen from '../screens/FreelancersScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MaterialIcons } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

function MainTabs({ setUserToken }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile">
        {props => <ProfileScreen {...props} setUserToken={setUserToken} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
<Tab.Screen name="Serviços" component={ServicesScreen} />
export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen 
        name="Freelancers" 
        component={FreelancersScreen} 
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="people" size={size} color={color} /> }}
      />
      <Tab.Screen 
        name="Services" 
        component={ServicesScreen} 
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="work" size={size} color={color} /> }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}
