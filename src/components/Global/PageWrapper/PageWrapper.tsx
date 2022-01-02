import React from "react";
import "./PageWrapper.scss";
interface Props {
	children: React.ReactNode;
}

export default function PageWrapper({ children }: Props) {
	return <div className="page-wrapper">{children}</div>;
}
