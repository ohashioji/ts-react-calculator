export type ActionType =
	| { type: "INPUT"; payload: string }
	| { type: "OPERATOR"; payload: string }
	| { type: "SUBMIT" }
	| { type: "CLEAR" }
	| { type: "INITIAL" };
export type InputType = {
	content: string;
	prevAction: ActionType;
};

export type InputContextType = {
	state: InputType;
	dispatch: React.Dispatch<ActionType>;
};
