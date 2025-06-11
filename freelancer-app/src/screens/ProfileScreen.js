import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation, setUserToken }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
    navigation.replace('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Text variant="headlineMedium">Perfil do Usuário</Text>
      <Button mode="contained" onPress={handleLogout}>
        Sair
      </Button>
    </View>
  );
}
