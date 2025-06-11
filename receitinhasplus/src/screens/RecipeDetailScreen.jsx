import React, { useEffect, useState } from 'react';
import { ScrollView, Image, StyleSheet, Alert } from 'react-native';
import { Title, Paragraph, Button, Divider } from 'react-native-paper';
import { getRecipeById } from '../services/storage';

export default function RecipeDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    loadRecipe();
  }, []);

  const loadRecipe = async () => {
    const r = await getRecipeById(id);
    if (!r) {
      Alert.alert('Erro', 'Receita não encontrada.');
      navigation.goBack();
      return;
    }
    setRecipe(r);
  };

  if (!recipe) return null;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Title>{recipe.title}</Title>
      {recipe.photoUri && <Image source={{ uri: recipe.photoUri }} style={styles.photo} />}
      <Paragraph><Title>Categoria:</Title> {recipe.category}</Paragraph>
      <Paragraph><Title>Tempo:</Title> {recipe.time} minutos</Paragraph>
      <Divider style={{ marginVertical: 10 }} />
      <Paragraph><Title>Ingredientes:</Title></Paragraph>
      <Paragraph>{recipe.ingredients}</Paragraph>
      <Divider style={{ marginVertical: 10 }} />
      <Paragraph><Title>Modo de preparo:</Title></Paragraph>
      <Paragraph>{recipe.steps}</Paragraph>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
});
