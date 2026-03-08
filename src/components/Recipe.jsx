import ReactMarkDown from "react-markdown";
export default function Recipe(props) {
	return (
		<section
			className="suggested-recipe-container mt-9 text-gray-700 w-full min-w-0 wrap-break-word"
			aria-live="polite">
			<h2 className="text-2xl font-semibold mb-4"> Chef Claude Recommends:</h2>
			<div className="overflow-x-auto">
				<ReactMarkDown>{props.recipe}</ReactMarkDown>
			</div>
		</section>
	);
}
