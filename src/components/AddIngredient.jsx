//--------------------------------------------------- IMPORTS -----------------------------------------------------------------
import React from "react";

//-------------------------------------------------- COMPONENT ----------------------------------------------------------------

export default function AddIngredient() {
	const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
	const [recipeShown, setRecipeShown] = React.useState(false);

	// -------------------------------------------------- FUNCTIONS ----------------------------------------------------------------

	const populateIngredientsListItems = () => {
		return ingredients.map((ingredient) => <li className="mb-1">{ingredient}</li>);
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
				<form action={submitIngredient} className="add-ingredient-form">
					<input className="add-ingredient-form-input" title="Add at least 3 ingredients" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
					<button className="add-ingredient-form-button cursor-pointer">Add ingredient</button>
				</form>
			</section>

			{/* Section 2 - Ingredients and Get Recipe */}

			{ingredients.length > 0 && (
				<section>
					<div id="ingredient-list-container">
						<h2 className="text-2xl sm:text-3xl font-semibold">Ingredients on hand:</h2>
						<ul className="text-gray-600 text-[0.875rem] list-disc ml-6 mt-2.5">{populateIngredientsListItems()}</ul>
					</div>
					{ingredients.length > 2 && (
						<div className="generate-recipe-container flex justify-between items-center rounded-lg bg-[#F0EFEB] px-7 py-3 mt-9">
							<div>
								<h3 className="text-[1.125rem] font-medium leading-6 mb-2">Ready for a recipe?</h3>
								<p className="text-[#6B7280] text-[0.875rem] leading-5">Generate a recipe from your list of ingredients.</p>
							</div>
							<button onClick={() => setRecipeShown(true)} className="border-none rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] ml-2 sm:ml-0 px-4 py-2.5 text-[0.875rem] cursor-pointer">
								Get a recipe
							</button>
						</div>
					)}
				</section>
			)}

			{/* Section 3 - Chef Response */}
			{recipeShown && (
				<section>
					<h2>Chef Claude Recommends:</h2>
					<article className="suggested-recipe-container" aria-live="polite">
						<p>
							Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
						</p>
						<h3>Beef Bolognese Pasta</h3>
						<strong>Ingredients:</strong>
						<ul>
							<li>1 lb. ground beef</li>
							<li>1 onion, diced</li>
							<li>3 cloves garlic, minced</li>
							<li>2 tablespoons tomato paste</li>
							<li>1 (28 oz) can crushed tomatoes</li>
							<li>1 cup beef broth</li>
							<li>1 teaspoon dried oregano</li>
							<li>1 teaspoon dried basil</li>
							<li>Salt and pepper to taste</li>
							<li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
						</ul>
						<strong>Instructions:</strong>
						<ol>
							<li>Bring a large pot of salted water to a boil for the pasta.</li>
							<li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
							<li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
							<li>Stir in the tomato paste and cook for 1 minute.</li>
							<li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
							<li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
							<li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
							<li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
							<li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
						</ol>
					</article>
				</section>
			)}
		</main>
	);
}
