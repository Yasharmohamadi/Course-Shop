import React, { useState } from "react";

export default function Input(props) {
	const[inputValue, setInputValue] =useState('')
	const inputOnChangeHandler =  (event) => {
		setInputValue(event.target.value)
	}
	const element =
		props.element === "input" ? (
			<input
				className={props.className}
				maxLength={props.maxLength}
				type={props.type}
				placeholder={props.placeholder}
				onChange={inputOnChangeHandler}
				value={inputValue}
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
