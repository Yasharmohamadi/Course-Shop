import React, { useState } from "react";
import "./CourseBox.css";
import Loader from "../../components/Loader/Loader";

export default function CourseBox({ title, img }) {
	const [showImg, setShowImg] = useState(false);

	return (
		<div className="coursebox">
			<div className="coursebox_img_wrapper">
				<img
					className="coursebox_img"
					alt=""
					src="/images/courses/algorithm.webp"
					onLoad={() => setShowImg(true)}
				/>
				{!showImg && <Loader />}
			</div>

			<div className="coursebox_details">
				<h3 className="coursebox_title">{title}</h3>
				<div className="coursebox_info-wrapper">
					<span className="coursebox_teacher">
						<svg
							class="svg-inline--fa fa-chalkboard-user"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="chalkboard-user"
							role="img"
							viewBox="0 0 640 512"
							data-fa-i2svg=""
						>
							<path
								fill="#fff"
								d="M592 0h-384C181.5 0 160 22.25 160 49.63V96c23.42 0 45.1 6.781 63.1 17.81V64h352v288h-64V304c0-8.838-7.164-16-16-16h-96c-8.836 0-16 7.162-16 16V352H287.3c22.07 16.48 39.54 38.5 50.76 64h253.9C618.5 416 640 393.8 640 366.4V49.63C640 22.25 618.5 0 592 0zM160 320c53.02 0 96-42.98 96-96c0-53.02-42.98-96-96-96C106.1 128 64 170.1 64 224C64 277 106.1 320 160 320zM192 352H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32C320 409.3 262.7 352 192 352z"
							></path>
						</svg>{" "}
						یاشار محمدی
					</span>
					<div className="coursebox_rate">
						<img src="/images/svgs/star.svg" className="" />
						<img src="/images/svgs/star_fill.svg" className="" />
						<img src="/images/svgs/star_fill.svg" className="" />
						<img src="/images/svgs/star_fill.svg" className="" />
						<img src="/images/svgs/star_fill.svg" className="" />
					</div>
				</div>
				<div className="coursebox_info-wrapper">
					<span className="coursebox_studends">
						<svg
							class="svg-inline--fa fa-users"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="users"
							role="img"
							viewBox="0 0 640 512"
							data-fa-i2svg=""
						>
							<path
								fill="#fff"
								d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
							></path>
						</svg>
						36
					</span>
					<span className="coursebox_price">1,000,000</span>
				</div>
			</div>
			<a className="coursebox_btn" href="">
				مشاهده اطلاعات
				<svg
					class="svg-inline--fa fa-arrow-left"
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="arrow-left"
					role="img"
					viewBox="0 0 448 512"
					data-fa-i2svg=""
				>
					<path
						fill="#fff"
						d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
					></path>
				</svg>
			</a>
		</div>
	);
}
