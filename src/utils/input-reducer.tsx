export default function inputReducer(state: { content: string }, action: any) {
	switch (action.type) {
		case "update":
			state.content = action.payload.content;
			break;
		case "clear":
			state.content = "";
			break;
		default:
			return state;
	}
}
