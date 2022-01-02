import React, { useReducer } from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import "./Body.scss";
import NumberPad from "../NumberPad/NumberPad";
import Key from "../Key/Key";
import InputContext, { InputInitial } from "../../../utils/input-context";
import inputReducer from "../../../utils/input-reducer";

interface Props {
	children: React.ReactNode;
}

export default function Body({ children }: Props) {
	const { state: inputState } = InputInitial;

	const [state, dispatch] = useReducer(inputReducer, inputState);

	const buttonCount: (string | number)[] = [...Array(10).keys()].map(
		(num) => num + 1
	);
	buttonCount.push("enter");
	buttonCount.push("clear");

	return (
		<main className="body">
			<Logo />
			<InputContext.Provider value={{ state, dispatch }}>
				<Input />

				<NumberPad>
					{buttonCount.map((buttonKey) => (
						<Key label={buttonKey} />
					))}
				</NumberPad>
			</InputContext.Provider>
		</main>
	);
}
