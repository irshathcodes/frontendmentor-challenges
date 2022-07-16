import { useState } from "react";
import styles from "./remote-landing.module.css";
import Logo from "../../public/assets/remote-landing/logo.svg";
import DownArrow from "../../public/assets/remote-landing/icon-arrow-down.svg";
import RemoteButton from "./RemoteButton";

const navItems = [
	{ id: 1, name: "features" },
	{ id: 2, name: "company" },
	{ id: 3, name: "careers" },
	{ id: 4, name: "about" },
];

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<Logo />
				<ul className={styles.nav_links}>
					{navItems.map((navItem) => (
						<NavItem key={navItem.id} {...navItem} />
					))}
				</ul>
				<div className={styles.btn_container}>
					<RemoteButton>Login</RemoteButton>
					<RemoteButton type="outline">Register</RemoteButton>
				</div>
			</div>
		</nav>
	);
}

function NavItem({ name }) {
	const [showDropdown, setShowDropDown] = useState(false);

	return (
		<li
			className={styles.nav_item}
			onClick={() => setShowDropDown(!showDropdown)}
		>
			{name}{" "}
			<span>
				<DownArrow
					className={`${styles.arrow} ${
						showDropdown ? styles.up_arrow : styles.down_arrow
					}`}
				/>
			</span>
		</li>
	);
}
