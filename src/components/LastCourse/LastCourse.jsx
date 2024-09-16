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
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='پروژه های فریلنسری' img="/images/courses/fareelancer.png1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره API نویسی' img="/images/courses/nodejs.png1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='پروژه های جاوا اسکریپت' img="/images/courses/js_project.png1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص جنگو' img="/images/courses/jango.png1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره آموزشی پایتون' img="/images/courses/python.png1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره یوتیوبر تخصصی' img="/images/courses/youtuber.png1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="/images/courses/nextjs.webp1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="/images/courses/python2.webp1" />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox title='دوره متخصص نکست' img="/images/courses/pythonmini.webp1" />
					</div>
					
				</div>
			</div>
		</div>
	);
}
