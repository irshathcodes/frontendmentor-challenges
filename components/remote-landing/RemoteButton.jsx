export default function RemoteButton({ type, children }) {
	return (
		<button
			className={`text-sm  ${
				type === "outline"
					? "border-black border-2 border-radius rounded-lg px-3 py-1"
					: ""
			}`}
		>
			{children}
		</button>
	);
}
