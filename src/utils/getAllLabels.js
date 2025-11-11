export function getAllLabels(recipes) {
  const allLabels = recipes.flatMap(({ recipe }) => recipe.healthLabels || []);
  return [...new Set(allLabels)].sort();
}
