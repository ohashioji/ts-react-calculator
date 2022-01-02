import React from "react";
import "./NumberPad.scss";

interface Props {
	children: React.ReactNode;
}

export default function NumberPad({ children }: Props) {
	return <div className="number-pad">{children}</div>;
}
