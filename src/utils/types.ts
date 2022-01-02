export type ActionType =
	| { type: "update"; payload: string }
	| { type: "clear" };
export type InputType = {
	content: string;
};

export type InputContextType = {
	state: InputType;
	dispatch: React.Dispatch<any>;
};
