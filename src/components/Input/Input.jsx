import React from "react";

export default function Input(props) {
	const element =
		props.element === "input" ? (
			<input
				className={props.className}
				maxLength={props.maxLength}
				type={props.type}
				placeholder={props.placeholder}
			/>
		) : (
			<textarea />
		);

	return <div>{element}</div>;
}
