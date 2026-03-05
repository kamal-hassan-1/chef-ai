export default function ingredientList(props) {
	console.log(props);
	return (
		<div id="ingredient-list-container">
			<h2 className="text-2xl sm:text-3xl font-semibold">Ingredients on hand:</h2>
			<ul className="text-gray-600 text-[0.875rem] list-disc ml-6 mt-2.5">{props.populateIngredientsListItems()}</ul>
		</div>
	);
}
