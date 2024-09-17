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
					<div className="col-12 col-lg-8 course_main-right">
						<div className="row course_info_wrapper">
							<div className="col-12 col-md-6 col-xxl-4">
								<CourseDetailBox
									title="روش پشتیبانی"
									caption="آنلاین"
									svg="/images/svgs/teacher.svg"
								/>
							</div>
							<div className="col-12 col-md-6 col-xxl-4">
								<CourseDetailBox
									title="آخرین بروزرسانی"
									caption="1401/03/02"
									svg="/images/svgs/gem.svg"
								/>
							</div>
							<div className="col-12 col-md-6 col-xxl-4">
								<CourseDetailBox
									title="نوع مشاهده"
									caption="ضبط شده / آفلاین"
									svg="/images/svgs/happy.svg"
								/>
							</div>
							<div className="col-12 col-md-6 col-xxl-4">
								<CourseDetailBox
									title=" مدت زمان دوره:"
									caption="19 ساعت"
									svg="/images/svgs/star_fill.svg"
								/>
							</div>
							<div className="col-12 col-md-6 col-xxl-4">
								<CourseDetailBox
									title="وضعیت دوره:"
									caption="به اتمام رسیده"
									svg="/images/svgs/star.svg"
								/>
							</div>
							<div className="col-12 col-md-6 col-xxl-4">
								<CourseDetailBox
									title="پیش نیاز:"
									caption="html css"
									svg="/images/svgs/royal.svg"
								/>
							</div>
						</div>
						<div className="course_progress">
							<div className="course_progress_header">
								<svg
									class="svg-inline--fa fa-chart-line course-progress__icon"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="chart-line"
									role="img"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="#fff"
										d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"
									></path>
								</svg>
								درصد پیشرفت شما: 70%
							</div>
							<div className="course_progress_bar">
								<div className="course_progress_line"></div>
							</div>
						</div>
						<div className="course_intro">
							<div className="course_intro_wrapper">
								<h3 className="course_intro_title">معرفی دوره</h3>
								<p className="course_intro_description">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
									مجله در ستون و سطرآنچنان که لازم است.
								</p>
								<p className="course_intro_description">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
									مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی
									با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
									سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی
									نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
									چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
									است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
									چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
									روزنامه و مجله در ستون و سطرآنچنان که لازم است.
								</p>
								<p className="course_intro_description">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
									مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی
									با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
									سطرآنچنان که لازم است.
								</p>
								<h3 className="course_intro_title">چرا باید JS یاد بگیرم؟</h3>
								<p className="course_intro_description">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
									مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی
									با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
									سطرآنچنان که لازم است.
								</p>
								<p className="course_intro_description">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
									مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی
									با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
									گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
									سطرآنچنان که لازم است.
								</p>
								<h3 className="course_intro_title">آیا این دوره کافی است؟</h3>
								<p className="course_intro_description">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است، از طراحان گرافیک است، چاپگرها
									و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
								</p>
								<p className="course_intro_description">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است،طراحان گرافیک است، چاپگرها و
									متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم
									ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
									استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه از
									طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
									و سطرآنچنان که لازم است.
								</p>
							</div>
							<div className="course_intro_btns">
								<a href="" className="course_intro_btn">دانلود همگانی ویدیو ها</a>
								<a href="" className="course_intro_btn">دانلود همگانی پیوست ها</a>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4 course_main-left"></div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
