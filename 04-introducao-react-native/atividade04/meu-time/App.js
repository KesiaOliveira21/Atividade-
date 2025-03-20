import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View, ScrollView, Alert } from "react-native";

export default function App() {
  const alerta = () => {
    Alert.alert("GOL DO MANCHESTER UNITED!!!!!");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Manchester United Football Club</Text>
      <Text style={styles.info}>Idade: 147</Text>
      <Text style={styles.info}>País: Inglaterra</Text>
      <Text style={styles.info}>Cidade: Reino Unido</Text>
      <Text style={styles.info}>Apelido: Red Devils</Text>
      <Text style={styles.info}>VAIIIII DEVILS !!!</Text>

      <Button title="Atualização" onPress={alerta} />

      <Image
        style={styles.image}
        source={{ uri: "https://tse3.mm.bing.net/th?id=OIP.g6Ryq4T1NwBFtnPiPRVc3gHaEE&pid=Api&P=0&h=180" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://tse2.mm.bing.net/th?id=OIP.NIaJEUQt6274qipGEjfWOQHaEd&pid=Api&P=0&h=180" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://tse3.mm.bing.net/th?id=OIP.zak3GY0GesF7A_Br5pfMmgHaEK&pid=Api&P=0&h=180" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://tse2.mm.bing.net/th?id=OIP.S0A58K46z5PH1cyjPerpzAHaEo&pid=Api&P=0&h=180" }}
      />
      <Image
        style={styles.image}
        source={{ uri: "https://assets.manutd.com/AssetPicker/images/0/0/17/190/1162889/GettyImages_14134934231667915774709_large.jpg" }}
      />

      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ec4401",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
});