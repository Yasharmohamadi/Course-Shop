import React from "react";
import "./Course.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import CourseDetailBox from "../../components/CourseDetailBox/CourseDetailBox";
import Accordion from 'react-bootstrap/Accordion';
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
						<div className="course_acoordion">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0" className="accordion_item">
									<Accordion.Header>Accordion Item #1</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Accordion Item #2</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="course_comments">
							<h4 className="comments_title">دیدگاهتان را بنویسید</h4>
							<textarea
								className="comments_textarea"
								type="text"
								placeholder="لطفا دیدگاه خود را به اشتراک بگذارید ..."
								rows={5}
							/>
							<button className="comments_btn">ثبت دیدگاه</button>
						</div>
					</div>
					<div className="col-12 col-lg-4 course_main-left">
						<div className="course_main-left-wrapper">
							<div className="course_teacher">
								<div className="teacher_header">
									<div className="techaer_profile">
										<img
											src="/images/info/teacher.jpg"
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
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
									با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه .
								</p>
							</div>
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
								<div className="course_students_wrapper">
									<div className="course_students_header">
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
									<div className="course_students_content">
										<div className="course_students_view">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="far"
												data-icon="eye"
												role="img"
												viewBox="0 0 576 512"
												data-fa-i2svg=""
											>
												<path
													fill="#fff"
													d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
												></path>
											</svg>
											263 بازدید
										</div>
										<div className="course_students_conmments">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="far"
												data-icon="comments"
												role="img"
												viewBox="0 0 640 512"
												data-fa-i2svg=""
											>
												<path
													fill="#fff"
													d="M208 0C322.9 0 416 78.8 416 176C416 273.2 322.9 352 208 352C189.3 352 171.2 349.7 153.9 345.8C123.3 364.8 79.13 384 24.95 384C14.97 384 5.93 378.1 2.018 368.9C-1.896 359.7-.0074 349.1 6.739 341.9C7.26 341.5 29.38 317.4 45.73 285.9C17.18 255.8 0 217.6 0 176C0 78.8 93.13 0 208 0zM164.6 298.1C179.2 302.3 193.8 304 208 304C296.2 304 368 246.6 368 176C368 105.4 296.2 48 208 48C119.8 48 48 105.4 48 176C48 211.2 65.71 237.2 80.57 252.9L104.1 277.8L88.31 308.1C84.74 314.1 80.73 321.9 76.55 328.5C94.26 323.4 111.7 315.5 128.7 304.1L145.4 294.6L164.6 298.1zM441.6 128.2C552 132.4 640 209.5 640 304C640 345.6 622.8 383.8 594.3 413.9C610.6 445.4 632.7 469.5 633.3 469.9C640 477.1 641.9 487.7 637.1 496.9C634.1 506.1 625 512 615 512C560.9 512 516.7 492.8 486.1 473.8C468.8 477.7 450.7 480 432 480C350 480 279.1 439.8 245.2 381.5C262.5 379.2 279.1 375.3 294.9 369.9C322.9 407.1 373.9 432 432 432C446.2 432 460.8 430.3 475.4 426.1L494.6 422.6L511.3 432.1C528.3 443.5 545.7 451.4 563.5 456.5C559.3 449.9 555.3 442.1 551.7 436.1L535.9 405.8L559.4 380.9C574.3 365.3 592 339.2 592 304C592 237.7 528.7 183.1 447.1 176.6L448 176C448 159.5 445.8 143.5 441.6 128.2H441.6z"
												></path>
											</svg>
											12 دیدگاه
										</div>
									</div>
								</div>
							</div>
							<div class="course_pagelink">
								<div class="course_pagelink_wrapper">
									<div className="course_pagelink_title">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="link"
											role="img"
											viewBox="0 0 640 512"
											data-fa-i2svg=""
										>
											<path
												fill="#fff"
												d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
											></path>
										</svg>
										<span class="course_pagelink_text">لینک کوتاه</span>
									</div>
									<span className="course_pagelink_url">
										http://localhost:3000
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
