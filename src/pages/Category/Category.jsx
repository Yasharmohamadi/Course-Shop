import React, { useState } from "react";
import "./Category.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseBox from "../../components/CourseBox/CourseBox";

export default function Category() {
	const [showColumn, setShowColumn] = useState(false);

	const [showSelection, setShowSelection] = useState(false);

	return (
		<div className="category">
			<Navbar />
			<div className="container">
				<div className="category-header">
					<div className="category-header_filterbox">
						<div
							className="category-header_row-btn"
							onClick={() => setShowColumn(!showColumn)}
						>
							<svg
								className={showColumn ? "" : "svgIsActive"}
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="border-all"
								role="img"
								viewBox="0 0 448 512"
								data-fa-i2svg=""
							>
								<path
									fill="#fff"
									d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 96H256V224H384V96zM384 288H256V416H384V288zM192 224V96H64V224H192zM64 416H192V288H64V416z"
								></path>
							</svg>
						</div>
						<div
							className="category-header_column-btn"
							onClick={() => setShowColumn(!showColumn)}
						>
							<svg
								className={showColumn ? "svgIsActive" : ""}
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="align-left"
								role="img"
								viewBox="0 0 448 512"
								data-fa-i2svg=""
							>
								<path
									fill="#fff"
									d="M256 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H256C273.7 32 288 46.33 288 64C288 81.67 273.7 96 256 96zM256 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H256C273.7 288 288 302.3 288 320C288 337.7 273.7 352 256 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z"
								></path>
							</svg>
						</div>
						<div className="category-header_selection">
							<span
								className="category-header_selection-text"
								onClick={() => setShowSelection(!showSelection)}
							>
								مرتب سازی پیش فرض
								<svg
									class="svg-inline--fa fa-angle-down courses-top-bar__selection-icon"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="angle-down"
									role="img"
									viewBox="0 0 384 512"
									data-fa-i2svg=""
								>
									<path
										fill="#fff"
										d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
									></path>
								</svg>
							</span>
							{showSelection ? (
								<ul className="category-header_selection-list">
									<li class="category-header_selection-item">
										مرتب سازی بر اساس محبوبیت
									</li>
									<li class="category-header_selection-item">
										مرتب سازی بر اساس امتیاز
									</li>
									<li class="category-header_selection-item">
										مرتب سازی بر اساس آخرین
									</li>
									<li class="category-header_selection-item">
										مرتب سازی بر اساس ارزان ترین
									</li>
									<li class="category-header_selection-item">
										مرتب سازی بر اساس گران ترین
									</li>
								</ul>
							) : (
								false
							)}
						</div>
					</div>
					<div className="category-header_searchbox">
						<form action="">
							<input
								className="category-header_searchbox-input"
								placeholder="جستجوی دوره ..."
							/>
							<div className="category-header_searchbox-icon">
								<svg
									class="svg-inline--fa fa-magnifying-glass"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="magnifying-glass"
									role="img"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="#fff"
										d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
									></path>
								</svg>
							</div>
						</form>
					</div>
				</div>
				<div
					class={`row ${
						showColumn ? `category-courses-column` : `category-courses-row`
					}`}
				>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox />
					</div>
					<div className="col-12 col-md-6 col-xl-4">
						<CourseBox />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
