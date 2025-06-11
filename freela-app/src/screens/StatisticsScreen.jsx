import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

export default function StatisticsScreen() {
  return (
    <View style={styles.container}>
      <Title>Estatísticas</Title>
      <Paragraph>Em breve, gráficos e análises para turbinar seu negócio.</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
});
