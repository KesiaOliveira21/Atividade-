import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(res => setCategorias(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Produtos', { categoria: item })}>
          <Card style={{ margin: 10, padding: 10 }}>
            <Text>{item}</Text>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}
