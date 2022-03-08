import SelectSearch, { fuzzySearch } from "react-select-search";

export function renderProvider(props, option, snapshot, className) {
	const imgStyle = {
		verticalAlign: "middle",
		marginRight: 10,
	};

	return (
		<button {...props} className={className} type="button">
			<span>
				<img
					alt=""
					style={imgStyle}
					width="32"
					height="32"
					src={option.photo}
				/>
				<span>{option.name}</span>
			</span>
		</button>
	);
}
