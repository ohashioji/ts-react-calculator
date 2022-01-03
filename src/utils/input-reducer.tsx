import { ActionType, InputType } from "./types";

export default function inputReducer(
	state: InputType,
	action: ActionType
): InputType {
	switch (action.type) {
		case "INPUT":
			if (state.prevAction.type === "SUBMIT") {
				return {
					content: action.payload,
					prevAction: { type: action.type, payload: action.payload },
				};
			} else {
				return {
					content: state.content + action.payload,
					prevAction: { type: action.type, payload: action.payload },
				};
			}

		//Operators should not be repeated -> we dont want ++++. or +x/ to be a legal sequence of characters
		case "OPERATOR":
			if (state.prevAction.type === "INITIAL") {
				return state;
			}
			if (state.prevAction.type === "OPERATOR") {
				return state;
			} else {
				return {
					content: state.content + action.payload,
					prevAction: { type: action.type, payload: action.payload },
				};
			}

		case "SUBMIT":
			const split = splitSequence(state.content);
			const output = calculate(split);
			return { content: output, prevAction: { type: "SUBMIT" } };
		case "CLEAR":
			return { content: "", prevAction: { type: "INITIAL" } };

		default:
			return state;
	}
}

function splitSequence(sequence: string): string[] {
	const pattern: RegExp = /([+x/-])/g;
	const data = sequence.split(pattern);
	return data;
}

function calculate(sequence: string[]): string {
	const temp: (string | number)[] = [];
	sequence.forEach((item) => {
		switch (item) {
			case "x":
				temp.push("*");
				break;
			case "/":
			case "+":
			case "-":
				temp.push(item);
				break;
			default:
				temp.push(parseInt(item));
		}
	});

	return eval(temp.join(""));
}
