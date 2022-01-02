import { ActionType, InputType } from "./types";

export default function inputReducer(state: InputType, action: ActionType) {
	switch (action.type) {
		case "update":
			return { content: state.content + action.payload };
		case "clear":
			return { content: "" };
		default:
			return state;
	}
}
