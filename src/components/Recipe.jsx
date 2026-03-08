import ReactMarkDown from "react-markdown";
export default function Recipe(props) {
	return (
		<section
			className="suggested-recipe-container mt-9 text-gray-700"
			aria-live="polite">
			<h2 className="text-2xl font-semibold mb-4"> Chef Claude Recommends:</h2>
			<ReactMarkDown>{props.recipe}</ReactMarkDown>
		</section>
	);
}
