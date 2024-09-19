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
			<textarea
				className={props.className}
				type={props.type}
				placeholder={props.placeholder}
				rows={props.rows}
			/>
		);

	return <div>{element}</div>;
}
