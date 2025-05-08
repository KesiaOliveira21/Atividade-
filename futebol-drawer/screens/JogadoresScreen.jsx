import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Text, Card } from 'react-native-paper';

const jogadores = [
  {
    nome: "Mohamed Salah",
    numero: 11,
    posicao: "Atacante",
    idade: 32,
    imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/02/salah_liverpool_d80a81-e1740599288104.jpg"
  },
  {
    nome: "Virgil van Dijk",
    numero: 4,
    posicao: "Zagueiro",
    idade: 33,
    imagem: "https://ichef.bbci.co.uk/ace/standard/1600/cpsprodpb/3a76/live/5a0cd8c0-8fa2-11ef-a4b3-0d6ca230504f.jpg"
  },
  {
    nome: "Alisson Becker",
    numero: 1,
    posicao: "Goleiro",
    idade: 32,
    imagem: "https://assets.goal.com/images/v3/blt601c65deb548f958/cc6120ba95f9991333868e85fdad3c489d3eecfb.jpg?auto=webp&format=pjpg&width=3840&quality=60"
  },
  {
    nome: "Trent Alexander-Arnold",
    numero: 66,
    posicao: "Lateral-direito",
    idade: 26,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5Nak_RZfMfjSf7splxEZy3-rSEPo3QvOKA&s"
  },
  {
    nome: "Mac Allister",
    numero: 10,
    posicao: "Meio Campista",
    idade: 26,
    imagem: "https://tmssl.akamaized.net/images/foto/galerie/alexis-mac-allister-fc-liverpool-2023-1693910962-115929.jpg"
  }
];

const JogadoresScreen = () => {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Title title={item.nome} subtitle={`${item.posicao} - Nº ${item.numero}`} />
          <Card.Content>
            <Text>Idade: {item.idade}</Text>
            <Image source={{ uri: item.imagem }} style={{ height: 150, marginTop: 10 }} resizeMode="cover" />
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default JogadoresScreen;