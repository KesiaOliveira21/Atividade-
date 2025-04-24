import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Title, Paragraph, Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      <Image source={{ uri: receita.imagem }} style={{ height: 200, borderRadius: 8 }} />
      <Title style={{ marginTop: 10 }}>{receita.nome}</Title>
      <Paragraph>⏱ Tempo: {receita.tempoPreparo}</Paragraph>
      <Paragraph>🍽 Porções: {receita.porcoes}</Paragraph>

      <Title style={{ marginTop: 10 }}>Ingredientes</Title>
      {receita.ingredientes.map((item, index) => (
        <Paragraph key={index}>• {item}</Paragraph>
      ))}

      <Title style={{ marginTop: 10 }}>Modo de Preparo</Title>
      {receita.modoPreparo.map((item, index) => (
        <Paragraph key={index}>{item}</Paragraph>
      ))}

      <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
        Voltar
      </Button>
    </ScrollView>
  );
}
