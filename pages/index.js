import Tile from "../ui/Tile";

const tiles = [
	{
		id: 1,
		name: "NFT Preview Card",
		link: "/nft-card",
	},
];

export default function Home() {
	return (
		<main className="body">
			{tiles.map((tile) => {
				return (
					<Tile key={tile.id} href={tile.link}>
						{tile.name}
					</Tile>
				);
			})}
			<h1 className="">Hello</h1>
		</main>
	);
}
