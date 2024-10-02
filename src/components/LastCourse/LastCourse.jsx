import React, { useState } from "react";
import "./LastCourse.css";
import SectinHeader from "../SectinHeader/SectinHeader";
import CourseBox from "../CourseBox/CourseBox";
import { Link } from "react-router-dom";

export default function LastCourse() {
	const [courses, setCourses] = useState([
		{
			id: 1,
			title: "دوره شماره یک",
			img: "/images/courses/course-cover.png",
		},
		{
			id: 2,
			title: "دوره شماره دو",
			img: "/images/courses/course-cover.png",
		},
		{
			id: 3,
			title: "دوره شماره سه",
			img: "/images/courses/course-cover.png",
		},
		{
			id: 4,
			title: "دوره شماره چهار",
			img: "/images/courses/course-cover.png",
		},
		{
			id: 5,
			title: "دوره شماره پنج",
			img: "/images/courses/course-cover.png",
		},
		{
			id: 6,
			title: "دوره شماره شش",
			img: "/images/courses/course-cover.png",
		},
		{
			id: 7,
			title: "دوره شماره هفت",
			img: "/images/courses/course-cover.png",
		},
		{
			id: 8,
			title: "دوره شماره هشت",
			img: "/images/courses/course-cover.png",
		},
	]);
	return (
		<div className="last-course">
			<div className="container">
				<SectinHeader title="آخرین دوره ها" hasBtn={true} />
				<div className="row courses-content">
					{courses.slice(0, 3).map((course) => (
						<div className="col-12 col-md-6 col-xl-4">
							<Link to="/course/freelancer">
								<CourseBox
									title={course.title}
									img={course.img}
									isSlide={true}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
