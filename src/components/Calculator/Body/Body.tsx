import { useReducer } from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import "./Body.scss";
import NumberPad from "../NumberPad/NumberPad";
import Key from "../Key/Key";
import InputContext, { InputInitial } from "../../../utils/input-context";
import inputReducer from "../../../utils/input-reducer";
import keyJson from "../../../mapping/button-mapping.json";

type KeyType = {
	label: string;
	type: "INPUT" | "SUBMIT";
};

export default function Body() {
	const { state: inputState } = InputInitial;

	const [state, dispatch] = useReducer(inputReducer, inputState);

	const buttonMappings = keyJson as KeyType[];
	return (
		<main className="body">
			<Logo />
			<InputContext.Provider value={{ state, dispatch }}>
				<Input />
				<NumberPad>
					{buttonMappings.map((data) => (
						<Key key={data.label} {...data} />
					))}
				</NumberPad>
			</InputContext.Provider>
		</main>
	);
}
