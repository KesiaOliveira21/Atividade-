import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(res => setProdutos(res.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Produto', { idProduto: item.id })}>
          <Card style={{ margin: 10, padding: 10 }}>
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Content>
              <Text>{item.title}</Text>
              <Text>Preço: ${item.price}</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}
