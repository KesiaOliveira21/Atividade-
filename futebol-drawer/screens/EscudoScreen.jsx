import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const EscudoScreen = () => {
  const time = {
    nome: "Liverpool F.C.",
    escudo: "https://static.vecteezy.com/ti/vetor-gratis/p1/26135429-liverpool-clube-simbolo-logotipo-premier-liga-futebol-abstrato-projeto-ilustracao-gratis-vetor.jpg",
    fundacao: "3 de junho de 1892",
    estadio: "Anfield",
    mascote: "Mighty Red (Liverbird)",
    cores: ["Vermelho", "Branco"]
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>{time.nome}</Text>
          <Image source={{ uri: time.escudo }} style={styles.escudo} resizeMode="contain" />
          <Text variant="bodyMedium">Fundado em: {time.fundacao}</Text>
          <Text variant="bodyMedium">Estádio: {time.estadio}</Text>
          <Text variant="bodyMedium">Mascote: {time.mascote}</Text>
          <Text variant="bodyMedium">Cores: {time.cores.join(", ")}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  card: {
    padding: 16,
  },
  escudo: {
    width: '100%',
    height: 150,
    marginVertical: 16,
  },
  title: {
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default EscudoScreen;