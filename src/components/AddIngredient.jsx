import React from "react";
export default function AddIngredient() {
	const [ingredients, setIngredients] = React.useState([]);

	const populateIngredientsListItems = () => {
		return ingredients.map((ingredient) => <li>{ingredient}</li>);
	};

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
		event.currentTarget.reset();
	}

	return (
		<main className="px-8 pt-2.5">
			<form onSubmit={handleSubmit} className="add-ingredient-form">
				<input className="add-ingredient-form-input" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
				<button className="add-ingredient-form-button cursor-pointer">Add ingredient</button>
			</form>
			<ul>{populateIngredientsListItems()}</ul>
		</main>
	);
}
