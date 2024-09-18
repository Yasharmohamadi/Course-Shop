import React, { useState } from "react";
import "./Category.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseBox from "../../components/CourseBox/CourseBox";
import Pagination from "../../components/Pagination/Pagination";
import CoursePageHeader from "../../components/CoursePageHeader/CoursePageHeader";
import { NavLink } from "react-router-dom";

export default function Category() {
	const [showColumn, setShowColumn] = useState(false);
	const [showSelection, setShowSelection] = useState(false);

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
					class={`row ${
						showColumn ? `category-courses-column` : `category-courses-row`
					}`}
				>
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
								title="دوره متخصص جنگو"
								img="/images/courses/jango.png1"
							/>
						</NavLink>
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<NavLink to="/course/js">
							<CourseBox
								title="دوره متخصص جنگو"
								img="/images/courses/jango.png1"
							/>
						</NavLink>
					</div>
				</div>
				<Pagination />
			</div>
			<Footer />
		</div>
	);
}
