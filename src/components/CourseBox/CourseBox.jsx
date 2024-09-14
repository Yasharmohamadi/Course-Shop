import React from "react";
import "./CourseBox.css";

export default function CourseBox({title, img}) {
	return (
		<div className="coursebox">
			<img className="coursebox_img" src={img} alt="" />
			<div className="coursebox_details">
				<h3 className="coursebox_title">{title}</h3>
				<div className="coursebox_info-wrapper">
					<span className="coursebox_teacher">
						<i class="fas fa-chalkboard-teacher"></i>
						یاشار محمدی
					</span>
					<div className="coursebox_rate">
						<img src="images/svgs/star.svg" className="" />
						<img src="images/svgs/star_fill.svg" className="" />
						<img src="images/svgs/star_fill.svg" className="" />
						<img src="images/svgs/star_fill.svg" className="" />
						<img src="images/svgs/star_fill.svg" className="" />
					</div>
				</div>
				<div className="coursebox_info-wrapper">
					<span className="coursebox_studends">
						<i class="fas fa-users"></i>
						36
					</span>
					<span className="coursebox_price">1,000,000</span>
				</div>
			</div>
			<a className="coursebox_btn" href="">
				مشاهده اطلاعات
				<i class="fas fa-arrow-left"></i>
			</a>
		</div>
	);
}
