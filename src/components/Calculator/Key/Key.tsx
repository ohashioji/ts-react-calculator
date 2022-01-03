import { useContext } from "react";
import InputContext from "../../../utils/input-context";
import "./Key.scss";
interface Props {
	label: string;
	type: "INPUT" | "SUBMIT" | "OPERATOR" | "CLEAR";
}

export default function Key({ label, type }: Props) {
	const { dispatch } = useContext(InputContext);

	function handleClick() {
		switch (type) {
			case "INPUT":
				dispatch({
					type: type,
					payload: label,
				});
				break;

			case "OPERATOR":
				dispatch({
					type: type,
					payload: label,
				});
				break;

			case "SUBMIT":
			case "CLEAR":
				dispatch({
					type: type,
				});
				break;
			default:
				return null;
		}
	}

	return (
		<button onClick={handleClick} className="key">
			{label}
		</button>
	);
}
