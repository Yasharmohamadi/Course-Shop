import React from "react";
import "./SectinHeader.css";

export default function SectinHeader({ title, hasBtn }) {
	return (
		<div className="section-header">
			<h3 className="section-header_title">{title}</h3>
			{hasBtn ? (
				<div className="section-header_more">
					نمایش همه
					<i class="fas fa-arrow-left"></i>
				</div>
			) : false}
		</div>
	);
}
