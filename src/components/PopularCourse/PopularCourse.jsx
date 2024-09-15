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
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص جنگو' img="images/courses/jango.png" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره آموزشی پایتون' img="images/courses/python.png" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره یوتیوبر تخصصی' img="images/courses/youtuber.png" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/php.webp" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/hacker.webp" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/dashboard.webp" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/exp.webp" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/algorithm.webp" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/docker.webp" />
					</div>
				</div>
			</div>
		</div>
	);
}
