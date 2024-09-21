import React, { useReducer } from "react";
import "./Input.css";

export default function Input(props) {
	// const[inputValue, setInputValue] =useState('')
	const inputReducer = (state, action) => {
		switch (action.type) {
			case "CHANGE": {
				return {
					value: action.value,
					isValid: action.isValid,
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
		console.log(event.target.value.length);
		dispath({
			type: "CHANGE",
			value: event.target.value,
			isValid: event.target.value.length > 7,
		});

		let inputIcon = document.getElementById("input-svg");
		mainInput.isValid
			? inputIcon.classList.add("input_svg_is_valid")
			: inputIcon.classList.remove("input_svg_is_valid");
	};
	const element =
		props.element === "input" ? (
			<input
				className={props.className}
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
