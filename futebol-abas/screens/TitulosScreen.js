import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';

const titulos = [
    { nome: "Premier League", anos: [1992, 1993, 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011, 2013] },
    { nome: "FA Cup", anos: [1909, 1948, 1963, 1977, 1983, 1985, 1990, 1994, 1996, 1999, 2004, 2016] },
    { nome: "UEFA Champions League", anos: [1968, 1999, 2008] },
    { nome: "FIFA Club World Cup", anos: [2008] },
  ];
  

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Accordion
          title={item.nome}
          left={(props) => <List.Icon {...props} icon="star" />}
        >
          <List.Item title={`Anos: ${item.anos.join(', ')}`} />
        </List.Accordion>
      )}
    />
  );
};

export default TitulosScreen;
