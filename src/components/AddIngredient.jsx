import React from "react";
export default function AddIngredient() {
	const [ingredients, setIngredients] = React.useState([]);

	const populateIngredientsListItems = () => {
		return ingredients.map((ingredient) => <li className="mb-1">{ingredient}</li>);
	};

	function submitIngredient(formData) {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}

	return (
		<main className="px-8 pt-2.5 flex flex-col justify-start">
			<section id="add ingredients form">
				<form action={submitIngredient} className="add-ingredient-form">
					<input className="add-ingredient-form-input" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
					<button className="add-ingredient-form-button cursor-pointer">Add ingredient</button>
				</form>
			</section>
			{ingredients.length > 0 && (
				<section className="m-10">
					<div id="ingredient-list-container">
						<h2 className="text-2xl sm:text-3xl font-semibold">Ingredients on hand:</h2>
						<ul className="text-gray-600 text-[0.875rem] list-disc ml-6 mt-2.5">{populateIngredientsListItems()}</ul>
					</div>
					<div className="generate-recipe-container flex justify-between items-center rounded-lg bg-[#F0EFEB] px-7 py-3 mt-9">
						<div>
							<h3 className="text-[1.125rem] font-medium leading-6 mb-2">Ready for a recipe?</h3>
							<p className="text-[#6B7280] text-[0.875rem] leading-5">Generate a recipe from your list of ingredients.</p>
						</div>
						<button className="border-none rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] ml-2 sm:ml-0 px-4 py-2.5 text-[0.875rem] cursor-pointer">Get a recipe</button>
					</div>
				</section>
			)}
		</main>
	);
}
