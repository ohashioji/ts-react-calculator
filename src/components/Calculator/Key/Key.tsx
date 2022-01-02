import React from "react";
import "./Key.scss";
interface Props {
	label: string | number;
}

export default function Key({ label }: Props) {
	return <button className="key">{label}</button>;
}
