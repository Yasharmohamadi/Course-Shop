import React from "react";
import "./LastCourse.css";
import SectinHeader from "../SectinHeader/SectinHeader";
import CourseBox from "../CourseBox/CourseBox";

export default function LastCourse() {
	return (
		<div className="last-course">
			<div className="container">
				<SectinHeader title="آخرین دوره ها" />
				<div className="row courses-wrapper">
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی جنگو' img="images/courses/jango.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی پایتون' img="images/courses/python.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی نود جی اس' img="images/courses/nodejs.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی پایتون' img="images/courses/python.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی نود جی اس' img="images/courses/nodejs.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی جنگو' img="images/courses/jango.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
