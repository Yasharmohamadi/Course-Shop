import React from "react";
import "./Pagination.css";

export default function Pagination() {
	return (
		<div className="pagination">
			<ul className="pagination_list">
				<li className="pagination_item">
					<svg
						class="svg-inline--fa fa-right-long courses__pagination-icon"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="right-long"
						role="img"
						viewBox="0 0 512 512"
						data-fa-i2svg=""
					>
						<path
							fill="#fff"
							d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"
						></path>
					</svg>
				</li>
				<li className="pagination_item pagination_item--active">1</li>
				<li className="pagination_item">2</li>
				<li className="pagination_item">3</li>
				<li className="pagination_item">
					<svg
						class="svg-inline--fa fa-left-long courses__pagination-icon"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="left-long"
						role="img"
						viewBox="0 0 512 512"
						data-fa-i2svg=""
					>
						<path
							fill="#fff"
							d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z"
						></path>
					</svg>{" "}
				</li>
			</ul>
		</div>
	);
}
