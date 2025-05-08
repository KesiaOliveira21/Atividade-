import React from 'react';
import { FlatList, View } from 'react-native';
import { Text, Card } from 'react-native-paper';

const titulos = [
  {
    nome: "Premier League",
    anos: [1901, 1906, 1922, 1947, 1964, 1966, 1973, 1976, 1977, 1979, 1980, 1982, 1983, 1984, 1986, 1988, 1990, 2020, 2025]
  },
  {
    nome: "UEFA Champions League",
    anos: [1977, 1978, 1981, 1984, 2005, 2019]
  },
  {
    nome: "FA Cup",
    anos: [1965, 1974, 1986, 1989, 1992, 2001, 2006, 2022]
  },
  {
    nome: "EFL Cup",
    anos: [1981, 1982, 1983, 1984, 1995, 2001, 2003, 2012, 2022]
  }
];

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Title title={item.nome} />
          <Card.Content>
            <Text>Anos: {item.anos.join(', ')}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default TitulosScreen;