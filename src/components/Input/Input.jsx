import React, { useReducer } from "react";
import "./Input.css";
import validator from "../../Validators/validator";

export default function Input(props) {

	console.log(props.validation);

	const inputReducer = (state, action) => {
		switch (action.type) {
			case "CHANGE": {
				return {
					value: action.value,
					isValid: validator(action.value, action.validation),
				};
			}
			default: {
				return state;
			}
		}
	};

	const [mainInput, dispath] = useReducer(inputReducer, {
		value: "",
		isValid: false,
	});

	const inputOnChangeHandler = (event) => {
		dispath({
			type: "CHANGE",
			value: event.target.value,
			validation: props.validation,
			isValid: event.target.value.length > props.validation,
		});
	};
	const element =
		props.element === "input" ? (
			<input
				className={`${props.className} ${mainInput.isValid ? 'isValid' : 'isNotValid'}`}
				maxLength={props.maxLength}
				type={props.type}
				placeholder={props.placeholder}
				onChange={inputOnChangeHandler}
				value={mainInput.value}
			/>
		) : (
			<textarea
				className={props.className}
				type={props.type}
				placeholder={props.placeholder}
				rows={props.rows}
			/>
		);

	return <div>{element}</div>;
}
