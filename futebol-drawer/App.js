import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Escudo"
          screenOptions={{
            headerStyle: { backgroundColor: '#b30000' },
            headerTintColor: '#fff',
            drawerActiveTintColor: '#b30000',
            drawerLabelStyle: { fontSize: 16 }
          }}
        >
          <Drawer.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="shield-outline" color={color} size={size} />
              )
            }}
          />
          <Drawer.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="people-outline" color={color} size={size} />
              )
            }}
          />
          <Drawer.Screen
            name="Títulos"
            component={TitulosScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="trophy-outline" color={color} size={size} />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}