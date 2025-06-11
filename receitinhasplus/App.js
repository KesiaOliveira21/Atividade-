import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StackNavigator from './src/screens/StackNavigator';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import useAuth from './src/hooks/useAuth';

const Tab = createBottomTabNavigator();

export default function App() {
  const { user } = useAuth();

  if (!user) {
    return (
      <PaperProvider>
        <LoginScreen />
      </PaperProvider>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Início"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Receitas"
            component={StackNavigator}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chef-hat" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
