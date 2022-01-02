import React from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import "./Body.scss";
import NumberPad from "../NumberPad/NumberPad";
import Key from "../Key/Key";

interface Props {
	children: React.ReactNode;
}

export default function Body({ children }: Props) {
	const buttonCount: (string|number)[] = [...Array(10).keys()].map((num) => num + 1);
    buttonCount.push("enter")
	return (
		<main className="body">
			<Logo />
			<Input />
			<NumberPad>
				{buttonCount.map((buttonKey) => (
					<Key label={buttonKey} />
				))}
			</NumberPad>
		</main>
	);
}
