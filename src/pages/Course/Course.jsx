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
								<a href="" className="course_intro_btn">
									دانلود همگانی ویدیو ها
								</a>
								<a href="" className="course_intro_btn">
									دانلود همگانی پیوست ها
								</a>
							</div>
						</div>
						<div className="course_teacher">
							<div className="teacher_header">
								<div className="techaer_profile">
									<img
										src="/images/info/teacher.jfif"
										className="teacher_img"
									/>
									<div className="teacher_details">
										<span className="teacher_name">یاشار محمدی</span>
										<span className="teacher_task">Front End Developer</span>
									</div>
								</div>
								<div className="teacher_position">
									مدرس
									<img src="/images/svgs/teacher.svg" />
								</div>
							</div>
							<p className="teacher_caption">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
								استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
								در ستون و سطرآنچنان که لازم است.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-4 course_main-left">
						<div className="course_register">
							<div className="course_register_content">
								<svg
									class=""
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="graduation-cap"
									role="img"
									viewBox="0 0 640 512"
									data-fa-i2svg=""
								>
									<path
										fill="#FFF"
										d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"
									></path>
								</svg>
								شما دانشجوی دوره هستید
							</div>
						</div>
						<div className="course_students">
							<div className="course_students_content">
								<svg
									class=""
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="user-graduate"
									role="img"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="#fff"
										d="M45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63l.001 60.37c0 70.75 57.25 128 128 128s127.1-57.25 127.1-128L384 99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46c-13-3-26.62-3-39.63 0l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75zM359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.3-120.8 87.2-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8z"
									></path>
								</svg>
								تعداد داشنجو: 45
							</div>
						</div>

						<div className=""></div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
