import React, { useEffect, useState } from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!produto) return <Text>Carregando...</Text>;

  return (
    <ScrollView>
      <Card style={{ margin: 10, padding: 10 }}>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge">{produto.title}</Text>
          <Text>{produto.description}</Text>
          <Text>Preço: ${produto.price}</Text>
          <Text>Marca: {produto.brand}</Text>
          <Text>Categoria: {produto.category}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
