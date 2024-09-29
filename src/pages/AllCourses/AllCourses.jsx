import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseBox from "../../components/CourseBox/CourseBox";
import CoursePageHeader from "../../components/CoursePageHeader/CoursePageHeader";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Pagination from "../../components/Pagination/Pagination";

import { NavLink } from "react-router-dom";
import "./AllCourses.css";

export default function AllCourses() {
	const [showColumn, setShowColumn] = useState(false);
	const [showSelection, setShowSelection] = useState(false);
	const [courses, setCourses] = useState([
		{
			id: 1,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
		{
			id: 2,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
		{
			id: 3,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
		{
			id: 4,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
		{
			id: 5,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
		{
			id: 6,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
		{
			id: 7,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
		{
			id: 8,
			title: "پروژه های فریلنسری",
			img: "/images/courses/fareelancer.png1",
		},
	]);
	return (
		<div className="allcourses">
			<Navbar />
			<div className="container">
				<BreadCrumb
					links={[
						{ id: 1, title: "خانه", to: "" },
						{ id: 2, title: "تمامی دوره ها", to: "allcourses" },
					]}
				/>
				<CoursePageHeader
					showSelection={showSelection}
					showColumn={showColumn}
					setShowColumn={setShowColumn}
					setShowSelection={setShowSelection}
				/>
				<div
					class={`row ${showColumn ? `allcourses-column` : `allcourses-row`}`}
				>
					{courses.map((course) => (
						<div className="col-12 col-md-6 col-xl-4">
							<NavLink to="/course/freelancer">
								<CourseBox title={course.title} img={course.img} />
							</NavLink>
						</div>
					))}
					
					<Pagination />
				</div>
			</div>
			<Footer />
		</div>
	);
}
