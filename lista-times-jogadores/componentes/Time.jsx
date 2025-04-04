import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function Time({ time }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.titulo}>{time.nome}</Text>
        <Text style={styles.subtitulo}>Ano de Fundação: {time.anoFundacao}</Text>
        <Text style={styles.descricao}>Mascote: {time.mascote}</Text>
      </Card.Content>

      {/* Imagem do Time */}
      <Image source={{ uri: time.imagem }} style={styles.imagem} />

      {/* Lista horizontal de jogadores */}
      <FlatList
        data={time.jogadores}
        horizontal
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.jogadorContainer}>
            <Image source={{ uri: item.imagem }} style={styles.jogadorImagem} />
            <Text style={styles.jogadorNome}>{item.nome} #{item.numero}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 5,
    paddingBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
  },
  descricao: {
    fontSize: 14,
    marginTop: 5,
  },
  imagem: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  jogadorContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  jogadorImagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  jogadorNome: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
});
