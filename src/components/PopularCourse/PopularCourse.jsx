import React from "react";
import "./PopularCourse.css";
import SectinHeader from "../SectinHeader/SectinHeader";
import CourseBox from "../CourseBox/CourseBox";

export default function PopularCourse() {
	return (
		<div className="popular-course">
			<div className="container">
				<SectinHeader title="محبوب ترین دوره ها" hasBtn={true}/>
				<div className="row courses-content">
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی جنگو' img="images/courses/jango.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی پایتون' img="images/courses/python.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی نود جی اس' img="images/courses/youtuber.png" />
					</div>
				</div>
			</div>
		</div>
	);
}
