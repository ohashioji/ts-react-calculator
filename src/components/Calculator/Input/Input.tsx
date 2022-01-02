import { useContext } from "react";
import InputContext from "../../../utils/input-context";
import "./Input.scss";
export default function Input() {
	const { state } = useContext(InputContext);
	console.log(state)
	return (
		<div className="input">
			<h1 className="input__text">{state.content}</h1>
		</div>
	);
}
