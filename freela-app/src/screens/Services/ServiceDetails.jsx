import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function ServiceDetails({ route, navigation }) {
  const { id } = route.params;

  // Aqui você faria uma chamada API para buscar detalhes pelo id

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Service Details (ID: {id})</Text>
      <Button onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
        Back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
