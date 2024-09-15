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
						<CourseBox title='پروژه های فریلنسری' img="images/courses/fareelancer.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره API نویسی' img="images/courses/nodejs.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='پروژه های تخصصی با جاوا اسکریپت' img="images/courses/js_project.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره متخصص جنگو' img="images/courses/jango.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره آموزشی پایتون' img="images/courses/python.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره یوتیوبر تخصصی' img="images/courses/youtuber.png" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/nextjs.webp" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/python2.webp" />
					</div>
					<div className="col-12 col-lg-6 col-xxl-4">
						<CourseBox title='دوره متخصص نکست' img="images/courses/pythonmini.webp" />
					</div>
					
				</div>
			</div>
		</div>
	);
}
