import React from "react";

type InputType = {
	content: string;
};

type InputContextType = {
	state: InputType;
	dispatch: React.Dispatch<any>;
};

export const InputInitial = {
	state: {
		content: "",
	},
	dispatch: () => null,
};

const InputContext = React.createContext<InputContextType>(InputInitial);

export default InputContext;
