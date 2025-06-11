import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Title>Bem-vinda ao Freela App!</Title>
      <Paragraph>Organize seus serviços, clientes e categorias com facilidade.</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
});
