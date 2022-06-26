const fs = require("fs");
import Tile from "../ui/Tile";

let challengeNames = ["Remote Landing Page", "NFT Preview Card"];

export default function Home({ challenges }) {
	return (
		<main className="flex justify-center gap-4">
			{challenges.map((challenge) => {
				return (
					<Tile key={challenge.id} href={challenge.link}>
						{challenge.name}
					</Tile>
				);
			})}
		</main>
	);
}

export async function getStaticProps() {
	// getting all the files inside pages folder.
	const fileNames = fs.readdirSync(process.cwd() + "/pages");

	const unwantedFileNames = ["_app.js", "_document.js", "api", "index.js"];

	// Removing files which we don't want as link.
	let requiredFileNames = fileNames.filter((item) => {
		return !unwantedFileNames.includes(item);
	});

	let links = [];

	const challenges = challengeNames.map((name, i) => {
		let fileNames = requiredFileNames.sort();

		//removing .js file extension.
		fileNames[i] = fileNames[i].replace(/\.[^/.]+$/, "");

		fileNames[i] = "/" + fileNames[i];
		links.push(fileNames[i]);

		const sortedChallengeNames = challengeNames.sort()[i];
		return { id: i, name: sortedChallengeNames, link: links[i] };
	});

	return {
		props: {
			challenges,
		},
	};
}
