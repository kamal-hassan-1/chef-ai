//--------------------------------------------------- IMPORTS -----------------------------------------------------------------
import React from "react";
import Recipe from "./Recipe";
import IngredientList from "./IngredientList";

//-------------------------------------------------- COMPONENT ----------------------------------------------------------------

export default function AddIngredient() {
	const [ingredients, setIngredients] = React.useState([]);
	const [recipeShown, setRecipeShown] = React.useState(false);

	// -------------------------------------------------- FUNCTIONS ----------------------------------------------------------------

	const submitIngredient = (formData) => {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	};

	const toggleRecipeShown = () => setRecipeShown(true);

	//----------------------------------------------------- RENDER -----------------------------------------------------------------

	return (
		<main className="px-8 pt-2.5 flex flex-col justify-start m-10">
			{/* Section 1 - Submit Ingredients Form */}
			<section id="add ingredients form">
				<form
					action={submitIngredient}
					className="add-ingredient-form">
					<input
						className="add-ingredient-form-input"
						title="Add at least 3 ingredients"
						type="text"
						placeholder="e.g. oregano"
						aria-label="Add ingredient"
						name="ingredient"
					/>
					<button className="add-ingredient-form-button cursor-pointer">Add ingredient</button>
				</form>
			</section>

			{/* Section 2 - Ingredients and Get Recipe */}

			{ingredients.length > 0 && (
				<IngredientList
					ingredients={ingredients}
					toggleRecipeShown={toggleRecipeShown}
				/>
			)}

			{/* Section 3 - Chef Response */}
			{recipeShown && <Recipe />}
		</main>
	);
}
