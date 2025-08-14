import React from "react";
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");


  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

/*     function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    } */

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    console.log("Recipe from Mistral:", recipeMarkdown);
  }


  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && 
        <IngredientsList 
          ingredients={ingredients} 
          toggleRecipeShown={getRecipe}
        />}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
