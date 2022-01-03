import React from "react";
import { InputContextType } from "./types";

export const InputInitial: InputContextType = {
	state: {
		content: "",
		prevAction: { type: "INITIAL" },
	},
	dispatch: () => null,
};

const InputContext = React.createContext<InputContextType>(InputInitial);

export default InputContext;
