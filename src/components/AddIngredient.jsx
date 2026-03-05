//--------------------------------------------------- IMPORTS -----------------------------------------------------------------
import React from "react";
import Recipe from "./Recipe";
import IngredientList from "./IngredientList";

//-------------------------------------------------- COMPONENT ----------------------------------------------------------------

export default function AddIngredient() {
	const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
	const [recipeShown, setRecipeShown] = React.useState(false);

	// -------------------------------------------------- FUNCTIONS ----------------------------------------------------------------

	const populateIngredientsListItems = () => {
		return ingredients.map((ingredient) => (
			<li
				className="mb-1"
				key={ingredient}>
				{ingredient}
			</li>
		));
	};

	function submitIngredient(formData) {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}

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
				<section>
					<IngredientList populateIngredientsListItems={populateIngredientsListItems} />
					{ingredients.length > 2 && (
						<div className="generate-recipe-container flex justify-between items-center rounded-lg bg-[#F0EFEB] px-7 py-4 mt-9">
							<div>
								<h3 className="text-[1.125rem] font-medium leading-6 mb-2">Ready for a recipe?</h3>
								<p className="text-[#6B7280] text-[0.875rem] leading-5">Generate a recipe from your list of ingredients.</p>
							</div>
							<button
								onClick={() => setRecipeShown(true)}
								className="border-none rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] ml-2 sm:ml-0 px-4 py-2.5 text-[0.875rem] cursor-pointer">
								Get a recipe
							</button>
						</div>
					)}
				</section>
			)}

			{/* Section 3 - Chef Response */}
			{recipeShown && <Recipe />}
		</main>
	);
}
