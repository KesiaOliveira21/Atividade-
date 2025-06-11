import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headlineMedium">Bem-vindo ao Freelancer App!</Text>
    </View>
  );
}
