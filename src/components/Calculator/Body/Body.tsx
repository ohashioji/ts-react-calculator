import React from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import "./Body.scss";
import NumberPad from "../NumberPad/NumberPad";

interface Props {
	children: React.ReactNode;
}

export default function Body({ children }: Props) {
	return (
		<main className="body">
			<Logo />
			<Input />
			<NumberPad>
				<h1></h1>
			</NumberPad>
		</main>
	);
}
