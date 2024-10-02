import React, { useEffect, useState } from "react";
import "./Category.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseBox from "../../components/CourseBox/CourseBox";
import Pagination from "../../components/Pagination/Pagination";
import CoursePageHeader from "../../components/CoursePageHeader/CoursePageHeader";
import { NavLink,useParams } from "react-router-dom";
import { coursesArray } from "../../Data";


export default function Category() {
	const [showColumn, setShowColumn] = useState(false);
	const [showSelection, setShowSelection] = useState(false);
	const [courses, setCourses] = useState(coursesArray);

	const [showCourses, setShowCourses] = useState([]);
	const {categoryname} = useParams()

	return (
		<div className="category">
			<Navbar />
			<div className="container">
				<CoursePageHeader
					showSelection={showSelection}
					showColumn={showColumn}
					setShowColumn={setShowColumn}
					setShowSelection={setShowSelection}
				/>
				<div
					className={`row ${
						showColumn ? `category-courses-column` : `category-courses-row`
					}`}
				>
					{showCourses.map((course) => (
						<div key={course.id} className="col-12 col-md-6 col-xl-4">
							<NavLink to="/course/freelancer">
								<CourseBox title={course.title} img={course.img} />
							</NavLink>
						</div>
					))}
				</div>
				<Pagination  items={courses} itemsCount={2} pathname={`/category/${categoryname}`} setShowCourses={setShowCourses}/>
			</div>
			<Footer />
		</div>
	);
}
