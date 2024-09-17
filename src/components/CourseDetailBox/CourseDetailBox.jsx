import React from "react";
import "./CourseDetailBox.css";

export default function CourseDetailBox({ title, svg, caption }) {
	return (
		<div className="coursedetailbox">
            <img src={svg} className="coursedetailbox_svg" />
			<div className="coursedetailbox_texts">
				<sapn className="coursedetailbox_title">{title}</sapn>
				<sapn className="coursedetailbox_caption">{caption}</sapn>
			</div>
		</div>
	);
}
