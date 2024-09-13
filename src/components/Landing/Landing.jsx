import React from "react";
import "./Landing.css";
import Typewriter from "typewriter-effect";

export default function Landing() {
	return (
		<div className="landing">
			<div className="container landing-wrapper">
				<h2 className="landing-title">
					نوژه
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(" ، نوظهور در آموزش")
								.pauseFor(2500)
								.deleteAll()

								.typeString("، سکوی پرتاب به بازار کار")
								.pauseFor(2500)
								.deleteAll()

								.typeString("، قدم به قدم تا متخصص شدن")
								.pauseFor(2500)
								.deleteAll()

								.start();
						}}
						options={{ loop: true }}
					/>
				</h2>
				<p className="landing-description">
					پلتفرمی آزاد برای آموزش برنامه نویسی
				</p>
			</div>
		</div>
	);
}
