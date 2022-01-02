import React from "react";
import { InputContextType } from "./types";

export const InputInitial = {
	state: {
		content: "",
	},
	dispatch: () => null,
};

const InputContext = React.createContext<InputContextType>(InputInitial);

export default InputContext;
