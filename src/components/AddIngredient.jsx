import React from "react";
export default function AddIngredient() {
	const [ingredients, setIngredients] = React.useState([]);

	const populateIngredientsListItems = () => {
		return ingredients.map((ingredient) => <li className="mb-1">{ingredient}</li>);
	};

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
		event.currentTarget.reset();
	}

	return (
		<main className="px-8 pt-2.5 flex flex-col justify-start">
			<section id="add ingredients form">
				<form onSubmit={handleSubmit} className="add-ingredient-form">
					<input className="add-ingredient-form-input" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
					<button className="add-ingredient-form-button cursor-pointer">Add ingredient</button>
				</form>
			</section>
			{ingredients.length != 0 && (
				<section className="m-10">
					<h2 className="text-2xl sm:text-3xl font-semibold">Ingredients on hand:</h2>
					<ul className="text-gray-600 text-[1rem] list-disc ml-6 mt-2.5">{populateIngredientsListItems()}</ul>
				</section>
			)}
		</main>
	);
}
