// componentes/Filme.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.imagem} />
      <Text style={styles.titulo}>{nome} ({ano})</Text>
      <Text style={styles.info}>Diretor: {diretor}</Text>
      <Text style={styles.info}>Gênero: {tipo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  info: {
    fontSize: 14,
    color: '#777',
  },
});

export default Filme;
