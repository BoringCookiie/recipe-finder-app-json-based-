const recipesContainer = document.getElementById("recipesContainer");
const searchBar = document.getElementById("searchBar");

async function loadRecipes() {
  const response = await fetch("recipes.json");
  const recipes = await response.json();
  displayRecipes(recipes);

  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query) || 
      recipe.cuisine.toLowerCase().includes(query)
    );
    displayRecipes(filteredRecipes);
  });
}

function displayRecipes(recipes) {
  recipesContainer.innerHTML = recipes.map(recipe => `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
    </div>
  `).join('');
}

loadRecipes();
