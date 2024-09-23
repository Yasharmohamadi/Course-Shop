import React, { useEffect, useReducer } from "react";
import "./Input.css";
import validator from "../../Validators/validator";

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

export default function Input(props) {

	const [mainInput, dispacth] = useReducer(inputReducer, {
		value: "",
		isValid: false,
	});
	// mainInput = {value: '', isValid: false}

	const { value, isValid } = mainInput
	const {id, onInputHandler} = props 

	useEffect(() => {
		onInputHandler(id, value, isValid)
	},[value])

	const inputOnChangeHandler = (event) => {
		dispacth({
			type: "CHANGE",
			value: event.target.value,
			validation: props.validation,
		});
	};

	const element =
		props.element === "input" ? (
			<input
				className={`${props.className} ${
					mainInput.isValid ? "isValid" : "isNotValid"
				}`}
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
				onChange={inputOnChangeHandler}
			/>
		);

	return <div>{element}</div>;
}
