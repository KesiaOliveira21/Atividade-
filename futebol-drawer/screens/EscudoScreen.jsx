import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Title>Flamengo</Title>
      <Image
        source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
        style={styles.image}
      />
      <Paragraph>Fundado em 15 de novembro de 1895</Paragraph>
      <Paragraph>Estádio: Maracanã</Paragraph>
      <Paragraph>Mascote: Urubu</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 150, height: 150, marginVertical: 20 },
});
