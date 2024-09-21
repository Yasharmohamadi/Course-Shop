import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button(props) {
	if (props.to) {
		return (
			<Link to={props.to} className={props.className}>
				{props.children}
			</Link>
		);
	} else if (props.href) {
		return (
			<a href={props.href} className={props.className}>
				{props.children}
			</a>
		);
	} else {
		return (
			<button onClick={props.event} className={props.className} disabled={props.isDisabled} type={props.type}>
				{props.children}
			</button>
		);

    }
}
