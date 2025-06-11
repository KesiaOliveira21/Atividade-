import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Title, Button, Text } from 'react-native-paper';
import { removeUserFromStorage } from '../storage/auth';

export default function ProfileScreen({ user, setUser }) {
  async function handleLogout() {
    await removeUserFromStorage();
    setUser(null);
  }

  return (
    <View style={styles.container}>
      <Title>Perfil</Title>
      <Text>Nome: {user?.name || 'Usuário'}</Text>
      <Text>Email: {user?.email || 'Email'}</Text>
      <Button mode="contained" onPress={handleLogout} style={{ marginTop: 20 }}>
        Sair
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
});
