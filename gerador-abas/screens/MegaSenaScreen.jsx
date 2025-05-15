// screens/MegaSenaScreen.jsx
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarDezenas = () => {
    const dezenas = [];
    while (dezenas.length < 6) {
      const num = Math.floor(Math.random() * 60) + 1;
      if (!dezenas.includes(num)) dezenas.push(num);
    }
    dezenas.sort((a, b) => a - b);
    setJogosMegaSena([dezenas, ...jogosMegaSena]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={gerarDezenas}>Gerar Jogo</Button>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 8 }}>
            <Card.Content>
              <Text>Jogo: {item.join(' - ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
