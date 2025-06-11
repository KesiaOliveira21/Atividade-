import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeListScreen from './RecipeListScreen';
import AddRecipeScreen from './AddRecipeScreen';
import RecipeDetailScreen from './RecipeDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Receitas Salvas" component={RecipeListScreen} />
      <Stack.Screen name="Nova Receita" component={AddRecipeScreen} />
      <Stack.Screen name="Detalhes" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}
