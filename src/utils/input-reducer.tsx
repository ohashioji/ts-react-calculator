type ActionType = "update" | "clear";

export default function inputReducer(state: any, action: any) {
	switch (action.type) {
		case "update":
			return { content: state.content + String(action.payload) };
		case "clear":
			return { content: "" };
		default:
			return state;
	}
}
