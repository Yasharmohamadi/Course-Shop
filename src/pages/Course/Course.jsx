import React from "react";
import "./Course.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

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
								فرانت اند
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
						></video>
					</div>
				</div>
				{/* 
				<div className="row course_content">
					<div className="col-8 course_content-right">
						<div className="row">
							<div className="col-4"></div>
							<div className="col-4"></div>
							<div className="col-4"></div>
							<div className="col-4"></div>
							<div className="col-4"></div>
							<div className="col-4"></div>
						</div>
					</div>
					<div className="col-4 course_content-left"></div>
				</div> */}
			</div>

			<Footer />
		</div>
	);
}
