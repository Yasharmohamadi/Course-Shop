import React, { useState } from "react";
import "./LastCourse.css";
import SectinHeader from "../SectinHeader/SectinHeader";
import CourseBox from "../CourseBox/CourseBox";
import { Link } from "react-router-dom";
import { coursesArray } from "../../Data";

export default function LastCourse() {
	const [courses, setCourses] = useState(coursesArray);
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
