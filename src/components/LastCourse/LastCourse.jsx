import React from "react";
import "./LastCourse.css";
import SectinHeader from "../SectinHeader/SectinHeader";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourse() {
	return (
		<div className="last-course">
			<div className="container">
				<SectinHeader title="آخرین دوره ها" hasBtn={true}/>
				<div className="row courses-content">
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی جنگو' img="images/courses/fareelancer.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی پایتون' img="images/courses/nodejs.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی نود جی اس' img="images/courses/js_project.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
