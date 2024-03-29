export default function RemoteButton({ type, children }) {
	return (
		<button
			className={`mx-2 ${
				type === "outline"
					? "rounded-lg px-[0.9rem] py-1 ring-1 ring-slate-900"
					: ""
			}`}
		>
			{children}
		</button>
	);
}
