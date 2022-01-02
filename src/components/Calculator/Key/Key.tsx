import { useContext } from "react";
import InputContext from "../../../utils/input-context";
import "./Key.scss";
interface Props {
	label: string | number;
}

export default function Key({ label }: Props) {
	const { dispatch } = useContext(InputContext);

	function handleClick() {
		dispatch({
			type: "update",
			payload: label,
		});
	}

	return (
		<button onClick={handleClick} className="key">
			{label}
		</button>
	);
}
