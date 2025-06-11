import React, { useEffect, useState } from 'react';
import { FlatList, View, Alert } from 'react-native';
import { List, FAB, Text } from 'react-native-paper';
import { getAllRecipes } from '../services/storage';

export default function RecipeListScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadRecipes();
    });
    return unsubscribe;
  }, [navigation]);

  const loadRecipes = async () => {
    const data = await getAllRecipes();
    setRecipes(data);
  };

  if (recipes.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nenhuma receita salva ainda.</Text>
        <FAB
          icon="plus"
          label="Nova Receita"
          onPress={() => navigation.navigate('Nova Receita')}
          style={{ position: 'absolute', right: 16, bottom: 16 }}
        />
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description={`Categoria: ${item.category}`}
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}
            left={props => <List.Icon {...props} icon="food" />}
          />
        )}
      />
      <FAB
        icon="plus"
        label="Nova Receita"
        onPress={() => navigation.navigate('Nova Receita')}
        style={{ position: 'absolute', right: 16, bottom: 16 }}
      />
    </>
  );
}
