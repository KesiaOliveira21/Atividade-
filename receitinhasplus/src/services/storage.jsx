import AsyncStorage from '@react-native-async-storage/async-storage';

const RECIPES_KEY = '@receitinhasplus_recipes';

export async function saveRecipe(recipe) {
  try {
    const stored = await AsyncStorage.getItem(RECIPES_KEY);
    const recipes = stored ? JSON.parse(stored) : [];
    recipes.push({ id: Date.now().toString(), ...recipe });
    await AsyncStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
  } catch (e) {
    throw new Error('Erro ao salvar receita: ' + e.message);
  }
}

export async function getAllRecipes() {
  try {
    const stored = await AsyncStorage.getItem(RECIPES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

export async function getRecipeById(id) {
  try {
    const recipes = await getAllRecipes();
    return recipes.find(r => r.id === id);
  } catch (e) {
    return null;
  }
}
