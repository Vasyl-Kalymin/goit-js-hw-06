const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listWithIngredients = document.getElementById('ingredients')

const addIngredients = ingredients.map((ingredient) => {
  const createIngredients = document.createElement("li");
  createIngredients.textContent = ingredient;
  createIngredients.classList.add("item");
  return createIngredients;
})

listWithIngredients.append(...addIngredients)