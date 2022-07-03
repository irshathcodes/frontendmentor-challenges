export default function RemoteButton({ type, children }) {
	return (
		<button
			className={`${
				type === "outline"
					? "ring-1 ring-slate-900 rounded-lg px-[0.9rem] py-1"
					: ""
			}`}
		>
			{children}
		</button>
	);
}
