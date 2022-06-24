import styles from "./ui.module.css";
import Link from "next/link";

export default function Tile({ children, href }) {
	return (
		<Link href={href}>
			<button className={styles.tile_btn}>
				<a>{children}</a>
			</button>
		</Link>
	);
}
