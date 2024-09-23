import React from "react";
import "./SectinHeader.css";
import { Link } from "react-router-dom";

export default function SectinHeader({ title, hasBtn }) {
	return (
		<div className="section-header">
				<h3 className="section-header_title">{title}</h3>
				{hasBtn ? (
					<Link className="section-header_more" to="/allcourses">
						نمایش همه
						<svg
							className="section-header_more-icon"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="arrow-left"
							role="img"
							viewBox="0 0 448 512"
							data-fa-i2svg=""
						>
							<path
								fill="#fff"
								d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
							></path>
						</svg>
					</Link>
				) : (
					false
				)}
		</div>
	);
}
