import React, { useEffect, useState } from "react";

export default function LandingCounter({ count }) {
	const [counter, setCouter] = useState(0);

	useEffect(() => {

		let interval = setInterval(() => {
			setCouter((prevCounter) => prevCounter + 1);
		}, 1);

		if (counter == count) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);

	}, [counter]);
	return <span class="landing-status__count">{counter}</span>;
}
