import cn from "./Card.module.css";
import Head from "next/head";
import Image from "next/image";
import image from "../../public/assets/image-equilibrium.jpg";
import avatar from "../../public/assets/image-avatar.png";

function Card() {
	return (
		<>
			<main className={cn.container}>
				<section className={cn.card}>
					<Image
						src={image}
						width={300}
						height={250}
						alt="equilibrium"
						className={cn.image}
					/>
					<h3>Equilibrium #3429</h3>
					<p>Our Equilibrium collection promotes balance and calm.</p>
					<div className={cn.details_wrapper}>
						{/* Ethereum svg */}
						<div className={cn.ethereum}>
							<svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
									fill="#00FFF8"
								/>
							</svg>
							0.041 ETH
						</div>
						<div className={cn.days}>
							{/* clock svg */}
							<svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
									fill="#8BACD9"
								/>
							</svg>
							3 days left
						</div>
					</div>
					<hr className={cn.line} />
					<div className={cn.creator_wrapper}>
						<Image
							src={avatar}
							alt="avatar"
							width={30}
							height={30}
							className={cn.avatar}
						/>
						<p>
							Creation of <span>Jules Wyvern</span>
						</p>
					</div>
				</section>
			</main>
		</>
	);
}

export default Card;
