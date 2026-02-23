import src from "../assets/chef-ai.png";
export default function Header() {
	return (
		<>
			<header className="p-6 flex gap-2 font-normal items-center-safe justify-center header-shadow mb-4">
				<figure>
					<img src={src} alt="chef ai logo" className="w-12 h-auto" />
					<figcaption className="hidden">chef ai logo</figcaption>
				</figure>
				<h1 className="text-3xl">Chef Ai</h1>
			</header>
		</>
	);
}
