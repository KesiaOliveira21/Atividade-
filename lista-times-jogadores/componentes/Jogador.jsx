import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function Jogador({ jogador }) {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: jogador.imagem }} style={styles.image} />
        <View>
          <Title>{jogador.nome}</Title>
          <Paragraph>Número: {jogador.numero}</Paragraph>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    padding: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
