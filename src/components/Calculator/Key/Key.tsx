import { useContext } from "react";
import InputContext from "../../../utils/input-context";
import "./Key.scss";
interface Props<T extends string | number> {
	label: T;
}

export default function Key<T extends string | number>({ label }: Props<T>) {
	const { dispatch } = useContext(InputContext);

	function handleClick() {
		switch (label) {
			case "clear":
				dispatch({
					type: "clear",
				});
				break;
			default:
				dispatch({
					type: "update",
					payload: String(label),
				});
		}
	}

	return (
		<button onClick={handleClick} className="key">
			{label}
		</button>
	);
}
