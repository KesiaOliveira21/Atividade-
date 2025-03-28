// App.js
import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Filme from './componentes/Filmes';
import Serie from './componentes/Series';

// filmes
const listaFilmes = [
  {
    nome: "O Irlandês",
    ano: 2019,
    diretor: "Martin Scorsese",
    tipo: "Crime, Drama",
    capa: "https://upload.wikimedia.org/wikipedia/pt/d/da/The_Irishman_p%C3%B4ster.png"
  },
  {
    nome: "A Todos os Garotos que Já Amei",
    ano: 2018,
    diretor: "Susan Johnson",
    tipo: "Comédia Romântica",
    capa: "https://tse3.mm.bing.net/th?id=OIP.Lpyhaz28BZuzz_k7M9mCTAHaE1&pid=Api&P=0&h=180"
  },
  {
    nome: "Bird Box",
    ano: 2018,
    diretor: "Susanne Bier",
    tipo: "Suspense, Terror",
    capa: "https://tse4.mm.bing.net/th?id=OIP.NjTNMbK-z1ICvjMQZySUfwHaDt&pid=Api&P=0&h=180"
  },
  {
    nome: "Enola Holmes",
    ano: 2020,
    diretor: "Harry Bradbeer",
    tipo: "Aventura, Mistério",
    capa: "https://tse3.mm.bing.net/th?id=OIP.l_v8BjVei_N4mPj0vSwTVwHaJQ&pid=Api&P=0&h=180"
  }
];

// séries 
const listaSeries = [
  {
    nome: "Stranger Things",
    ano: 2016,
    diretor: "Matt Duffer, Ross Duffer",
    temporadas: 4,
    capa: "https://tse4.mm.bing.net/th?id=OIP.Zb8eGRw3g042YPgJoxBobwHaEK&pid=Api&P=0&h=180"
  },
  {
    nome: "The Crown",
    ano: 2016,
    diretor: "Peter Morgan",
    temporadas: 5,
    capa: "https://tse4.mm.bing.net/th?id=OIP.FP_brhmdhYQ2ILUYcOmjFAHaJQ&pid=Api&P=0&h=180"
  },
  {
    nome: "La Casa de Papel",
    ano: 2017,
    diretor: "Álex Pina",
    temporadas: 5,
    capa: "https://tse4.mm.bing.net/th?id=OIP.9_ph5smo_sJsc2P5CKEPlwHaHa&pid=Api&P=0&h=180"
  }
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.catalogContainer}>
        <Text style={styles.header}>Filmes</Text>
        <View style={styles.catalog}>
          {listaFilmes.map((filme, index) => (
            <Filme
              key={index}
              nome={filme.nome}
              ano={filme.ano}
              diretor={filme.diretor}
              tipo={filme.tipo}
              capa={filme.capa}
            />
          ))}
        </View>
      </View>

      <View style={styles.catalogContainer}>
        <Text style={styles.header}>Séries</Text>
        <View style={styles.catalog}>
          {listaSeries.map((serie, index) => (
            <Serie
              key={index}
              nome={serie.nome}
              ano={serie.ano}
              diretor={serie.diretor}
              temporadas={serie.temporadas}
              capa={serie.capa}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', 
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Arial',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 18,
  },
  catalogContainer: {
    marginBottom: 40,
  },
  catalog: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 10,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  }
});
