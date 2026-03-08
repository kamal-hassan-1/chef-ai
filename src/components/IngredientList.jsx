export default function ingredientList(props) {
	const populateIngredientsListItems = () => {
		return props.ingredients.map((ingredient) => (
			<li
				key={ingredient}
				className="mb-1">
				{ingredient}
			</li>
		));
	};
	return (
		<section>
			<div id="ingredient-list-container">
				<h2 className="text-2xl sm:text-3xl font-semibold mt-6">Ingredients on hand:</h2>
				<ul className="text-gray-600 text-[0.875rem] list-disc ml-6 mt-2.5">{populateIngredientsListItems()}</ul>
			</div>
		</section>
	);
}
