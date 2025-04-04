import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Provider } from "react-native-paper";
import Time from "./componentes/Time";

const times = [
  {
    nome: "Manchester United",
    anoFundacao: 1878,
    mascote: "Red Devil",
    imagem: "http://www.pixelstalk.net/wp-content/uploads/2016/06/Manchester-United-Logo-High-Def-Backgrounds.jpg",
    jogadores: [
      { nome: "Bruno Fernandes", numero: 8, imagem: "https://wallpaperaccess.com/full/2213634.jpg" },
      { nome: "Marcus Rashford", numero: 10, imagem: "https://static.independent.co.uk/2023/06/20/07/394fe05653ff40718376e15dfb40a721Y29udGVudHNlYXJjaGFwaSwxNjg3MzI3ODQz-2.71561089.jpg" },
      { nome: "Casemiro", numero: 18, imagem: "https://pbs.twimg.com/media/FlkyFgEXwAUDaIj.jpg" },
    ],
  },
  {
    nome: "Manchester City",
    anoFundacao: 1880,
    mascote: "Moonchester",
    imagem: "https://tse1.mm.bing.net/th?id=OIP.9jPPpXitGEr-Mzsye3TcogHaEK&pid=Api&P=0&h=180",
    jogadores: [
      { nome: "Erling Haaland", numero: 9, imagem: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.somosfanaticos.fans%2Fjpg%2Fao%2Ffull%2FSFAO_20250331_SFAO_14028_gettyimages-2207833754-594x594-1-e1743453993377.jpg&width=1200&height=740" },
      { nome: "Kevin De Bruyne", numero: 17, imagem: "https://tse4.mm.bing.net/th?id=OIP.2bESYEdS_kSRfpc79Wj_2gHaEK&pid=Api&P=0&h=180" },
      { nome: "Phil Foden", numero: 47, imagem: "https://e0.365dm.com/21/04/1920x1080/skysports-phil-foden-manchester-city_5343992.jpg?20210416100939" },
    ],
  },
  {
    nome: "PSG",
    anoFundacao: 1970,
    mascote: "Germinal",
    imagem: "https://cidadeolimpica.com.br/wp-content/uploads/2020/12/paris-pc12.jpg",
    jogadores: [
      { nome: "Kylian Mbappé", numero: 7, imagem: "https://sports.inquirer.net/files/2019/01/mbappe-league-one.jpeg" },
      { nome: "Marquinhos", numero: 5, imagem: "https://tse1.mm.bing.net/th?id=OIP.OrtKo_TRX4ikOOV2X98VNAHaE8&pid=Api&P=0&h=180" },
      { nome: "Gianluigi Donnarumma", numero: 99, imagem: "https://uploads.metropoles.com/wp-content/uploads/2021/08/23115910/GettyImages-1335345470.jpg" },
    ],
  },
  {
    nome: "Barcelona",
    anoFundacao: 1899,
    mascote: "Culés",
    imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png",
    jogadores: [
      { nome: "Robert Lewandowski", numero: 9, imagem: "https://tse1.mm.bing.net/th?id=OIF.tnVu4ErWN7606fpwD8QIbw&pid=Api&P=0&h=180" },
      { nome: "Pedri", numero: 8, imagem: "https://tse3.mm.bing.net/th?id=OIP.rSd-ksoiQj0v3T0a97GO-gHaEK&pid=Api&P=0&h=180" },
      { nome: "Marc-André ter Stegen", numero: 1, imagem: "https://tse3.mm.bing.net/th?id=OIP.fA_DIUc6v5EArbtOxdNg0wHaEK&pid=Api&P=0&h=180" },
    ],
  },
];

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <FlatList
          data={times}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => <Time time={item} />}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
});
