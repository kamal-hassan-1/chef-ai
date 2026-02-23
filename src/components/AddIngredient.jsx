import React from "react";
export default function AddIngredient() {
	//ingredient state
	const [ingredients, setIngredients] = React.useState([]);

	const ingredientsListItems = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newIngredient = formData.get("ingredient");
		//updating the react state
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
		//clearing the form input after submission
		event.currentTarget.reset();
	}

	return (
		<main className="px-8 pt-2.5">
			<form onSubmit={handleSubmit} className="add-ingredient-form">
				<input className="add-ingredient-form-input" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
				<button className="add-ingredient-form-button cursor-pointer">Add ingredient</button>
			</form>
			<ul>{ingredientsListItems}</ul>
		</main>
	);
}
