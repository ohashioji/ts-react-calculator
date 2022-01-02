import React from "react";
import Logo from "../../Logo/Logo";
import Input from "../Input/Input";
import "./Body.scss";

interface Props {
	children: React.ReactNode;
}

export default function Body({ children }: Props) {
	return (
		<div className="body">
			<Logo />
			<Input />
		</div>
	);
}
