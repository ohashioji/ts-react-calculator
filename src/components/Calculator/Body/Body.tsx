import React from "react";
import "./Body.scss";

interface Props {
	children: React.ReactNode;
}

export default function Body({ children }: Props) {
	return <div className="body">{children}</div>;
}
