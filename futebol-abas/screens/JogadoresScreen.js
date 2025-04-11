import React from 'react';
import { FlatList, Image, View, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const jogadores = [
    {
      nome: "Bruno Fernandes",
      numero: 8,
      imagem: "https://tse2.mm.bing.net/th?id=OIP.n7qTefeKZ_vPfnkQGw1Z2AHaEK&pid=Api&P=0&h=180"
    },
    {
      nome: "Marcus Rashford",
      numero: 10,
      imagem: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/26/10/marcus--rashford.jpg"
    },
    {
      nome: "Casemiro",
      numero: 18,
      imagem: "https://manutdnews.com/wp-content/uploads/2022/10/manchester-united-v-arsenal-fc-premier-league-2-1024x683.jpg"
    },
    {
      nome: "Raphaël Varane",
      numero: 19,
      imagem: "https://tse4.mm.bing.net/th?id=OIP.c-PtdyE0cCRCzOcNd9dRDwHaE8&pid=Api&P=0&h=180"
    },
    {
      nome: "André Onana",
      numero: 24,
      imagem: "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/215340.png"
    },
  ];
  

const JogadoresScreen = () => {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Item
          title={`${item.nome} - Camisa ${item.numero}`}
          left={() => <Image source={{ uri: item.imagem }} style={styles.avatar} />}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  avatar: { width: 50, height: 50, borderRadius: 25, margin: 10 },
  

});

export default JogadoresScreen;
