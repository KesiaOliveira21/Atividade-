export function validateRecipe(recipe) {
  const errors = {};

  if (!recipe.title || recipe.title.trim() === '') errors.title = 'Título é obrigatório';
  if (!recipe.ingredients || recipe.ingredients.trim() === '') errors.ingredients = 'Ingredientes são obrigatórios';
  if (!recipe.steps || recipe.steps.trim() === '') errors.steps = 'Modo de preparo é obrigatório';
  if (!recipe.category || recipe.category.trim() === '') errors.category = 'Categoria é obrigatória';
  if (!recipe.time || isNaN(Number(recipe.time)) || Number(recipe.time) <= 0) errors.time = 'Tempo deve ser um número positivo';

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
