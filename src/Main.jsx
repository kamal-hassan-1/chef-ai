//--------------------------------------------------- IMPORTS -----------------------------------------------------------------
import React from "react";
import Recipe from "./components/Recipe";
import IngredientList from "./components/IngredientList";
import chefAI from "../ai";

//-------------------------------------------------- COMPONENT ----------------------------------------------------------------

export default function AddIngredient() {
	const [ingredients, setIngredients] = React.useState([]);
	const [recipe, setRecipe] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	// -------------------------------------------------- FUNCTIONS ----------------------------------------------------------------

	const submitIngredient = (formData) => {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	};

	const fetchRecipe = async () => {
		setLoading(true);
		setRecipe(await chefAI(ingredients));
		setLoading(false);
	};

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
			{ingredients.length > 0 && <IngredientList ingredients={ingredients} />}

			{ingredients.length > 2 && (
				<div className="generate-recipe-container flex justify-between items-center rounded-lg bg-[#F0EFEB] px-7 py-4 mt-9">
					<div>
						<h3 className="text-[1.125rem] font-medium leading-6 mb-2">Ready for a recipe?</h3>
						<p className="text-[#6B7280] text-[0.875rem] leading-5">Generate a recipe from your list of ingredients.</p>
					</div>
					<button
						onClick={fetchRecipe}
						className="border-none rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] ml-2 sm:ml-0 px-4 py-2.5 text-[0.875rem] cursor-pointer">
						Get a recipe
					</button>
				</div>
			)}

			{/* Section 3 - Chef Response */}
			{loading && (
				<div className="flex items-center gap-3 mt-9 text-gray-500">
					<svg
						className="animate-spin h-6 w-6 text-[#D17557]"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
						/>
					</svg>
					<span className="text-sm">Chef AI is cooking up your recipe…</span>
				</div>
			)}
			{recipe && <Recipe recipe={recipe} />}
		</main>
	);
}
