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
			{props.ingredients.length > 2 && (
				<div className="generate-recipe-container flex justify-between items-center rounded-lg bg-[#F0EFEB] px-7 py-4 mt-9">
					<div>
						<h3 className="text-[1.125rem] font-medium leading-6 mb-2">Ready for a recipe?</h3>
						<p className="text-[#6B7280] text-[0.875rem] leading-5">Generate a recipe from your list of ingredients.</p>
					</div>
					<button
						onClick={props.toggleRecipeShown}
						className="border-none rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] ml-2 sm:ml-0 px-4 py-2.5 text-[0.875rem] cursor-pointer">
						Get a recipe
					</button>
				</div>
			)}
		</section>
	);
}
