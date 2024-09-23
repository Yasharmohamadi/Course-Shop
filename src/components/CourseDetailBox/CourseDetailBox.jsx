import React from "react";
import "./CourseDetailBox.css";

export default function CourseDetailBox({ title, svg, caption }) {
	return (
		<div className="coursedetailbox">
            <img src={svg} className="coursedetailbox_svg" />
			<div className="coursedetailbox_texts">
				<span className="coursedetailbox_title">{title}</span>
				<span className="coursedetailbox_caption">{caption}</span>
			</div>
		</div>
	);
}
