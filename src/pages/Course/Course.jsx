import React from "react";
import "./Course.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CourseDetailBox from "../../components/CourseDetailBox/CourseDetailBox";
import { NavLink } from "react-router-dom";

export default function Course() {
	return (
		<div className="course">
			<Navbar />

			<div className="container">
				<BreadCrumb
					links={[
						{ id: 1, title: "خانه", to: "" },
						{ id: 2, title: "فرانت اند", to: "category/front" },
						{ id: 3, title: "جاوا اسکریپت", to: "course/js" },
					]}
				/>
				<div className="course_header">
					<div className="course_header-content">
						<div className="course_header-title-wrapper">
							<h3 className="course_header-title">آموزش جاوا اسکریپت</h3>
							<div className="course_header-label">
								<NavLink to="/category/front" className="nav-item">
									فرانت اند
								</NavLink>
							</div>
						</div>
						<p className="course_header-description">
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
							استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
							در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
							نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
							کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
							جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
							طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
							فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
							موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
							نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
							دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
						</p>
					</div>
					<div className="course_header-cover">
						<video
							className="course_header-cover_video"
							src=""
							controls
							poster=""
						></video>
					</div>
				</div>

				<div className="row course_main">
					<div className="col-8 course_main-right">
						<div className="row course_info_wrapper">
							<div className="col-12 col-md-6">
								<CourseDetailBox
									title="روش پشتیبانی"
									caption="آنلاین"
									svg="/images/svgs/teacher.svg"
								/>
							</div>
							<div className="col-12 col-md-6">
								<CourseDetailBox
									title="آخرین بروزرسانی"
									caption="1401/03/02"
									svg="/images/svgs/gem.svg"
								/>
							</div>
							<div className="col-12 col-md-6">
								<CourseDetailBox
									title="نوع مشاهده"
									caption="ضبط شده / آفلاین"
									svg="/images/svgs/happy.svg"
								/>
							</div>
							<div className="col-12 col-md-6">
								<CourseDetailBox
									title=" مدت زمان دوره:"
									caption="19 ساعت"
									svg="/images/svgs/star_fill.svg"
								/>
							</div>
							<div className="col-12 col-md-6">
								<CourseDetailBox
									title="وضعیت دوره:"
									caption="به اتمام رسیده"
									svg="/images/svgs/star.svg"
								/>
							</div>
							<div className="col-12 col-md-6">
								<CourseDetailBox
									title="پیش نیاز:"
									caption="html css"
									svg="/images/svgs/royal.svg"
								/>
							</div>
						</div>
					</div>
					<div className="col-4 course_main-left"></div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
