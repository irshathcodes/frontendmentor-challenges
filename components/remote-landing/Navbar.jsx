import { useState } from "react";
import styles from "./remote-landing.module.css";
import classnames from "classnames/bind";
import Logo from "../../public/assets/remote-landing/logo.svg";
import UpArrow from "../../public/assets/remote-landing/icon-arrow-up.svg";
import DownArrow from "../../public/assets/remote-landing/icon-arrow-down.svg";
import RemoteButton from "./RemoteButton";

const navItems = [
	{ id: 1, name: "features" },
	{ id: 2, name: "company" },
	{ id: 3, name: "careers" },
	{ id: 4, name: "about" },
];

export function Navbar() {
	const cn = classnames.bind(styles);

	return (
		<nav className={cn("nav flex justify-around pt-4")}>
			<div>
				<Logo className={""} />
			</div>

			<ul className="flex gap-4">
				{navItems.map((item) => (
					<NavItem key={item.id}>{item.name}</NavItem>
				))}
			</ul>

			<div className="flex gap-2">
				<RemoteButton>Login</RemoteButton>
				<RemoteButton type="outline">Register</RemoteButton>
			</div>
		</nav>
	);
}

function NavItem(props) {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<li className="flex items-center font-medium  gap-1">
			{props.children}
			<span>{showDropdown ? <UpArrow /> : <DownArrow />}</span>
		</li>
	);
}
