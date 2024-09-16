import React from "react";
import "./PopularCourse.css";
import SectinHeader from "../SectinHeader/SectinHeader";
import CourseBox from "../CourseBox/CourseBox";
import { NavLink } from "react-router-dom";

export default function PopularCourse() {
	return (
		<div className="popular-course">
			<div className="container">
				<SectinHeader title="محبوب ترین دوره ها" hasBtn={true} />
				<div className="row courses-content">
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص جنگو"
								img="/images/courses/jango.png1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره آموزشی پایتون"
								img="/images/courses/python.png1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره یوتیوبر تخصصی"
								img="/images/courses/youtuber.png1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص نکست"
								img="/images/courses/php.webp1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص نکست"
								img="/images/courses/hacker.webp1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص نکست"
								img="/images/courses/dashboard.webp1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص نکست"
								img="/images/courses/exp.webp1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص نکست"
								img="/images/courses/algorithm.webp1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص نکست"
								img="/images/courses/docker.webp1"
							/>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
