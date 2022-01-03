import { ActionType, InputType } from "./types";

export default function inputReducer(
	state: InputType,
	action: ActionType
): InputType {
	switch (action.type) {
		case "INPUT":
			return {
				content: state.content + action.payload,
				prevAction: { type: action.type, payload: action.payload },
			};
		//Operators should not be repeated -> we dont want ++++. or +x/ to be a legal sequence of characters
		case "OPERATOR":
			if (state.prevAction.type === "OPERATOR") {
				return state;
			} else {
				return {
					content: state.content + action.payload,
					prevAction: { type: action.type, payload: action.payload },
				};
			}

		case "SUBMIT":
			const data = state.content.split("+");
			console.log(data);
			return { content: state.content, prevAction: { type: "INITIAL" } };
		case "CLEAR":
			return { content: "", prevAction: { type: "INITIAL" } };

		default:
			return state;
	}
}
