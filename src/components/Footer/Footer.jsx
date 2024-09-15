import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-6 col-xl-4 footer_section">
						<span className="footer_title">درباره ما</span>
						<div className="footer_items">
							<span className="footer_item footer_item_about">
								وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که
								در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل
								قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و
								فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم!
								و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی
								خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس
								در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه!
								این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با
								دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با
								کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای
								پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد
								هستند که هوای کاربر های عزیز رو داشته باشند !
							</span>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xl-4 footer_section">
						<span className="footer_title">آخرین دوره ها</span>
						<div className="footer_items">
							<a href="" className="footer_item">
								دوره متخصص جنگو
							</a>
							<a href="" className="footer_item">
								دوره آموزشی پایتون
							</a>
							<a href="" className="footer_item">
								دوره یوتیوبر تخصصی
							</a>
							<a href="" className="footer_item">
								دوره API نویسی
							</a>
							<a href="" className="footer_item">
								پروژه های تخصصی با جاوا اسکریپت
							</a>
							<a href="" className="footer_item">
								پروژه های فریلنسری
							</a>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xl-4 footer_section">
						<span className="footer_title">دسترسی سریع</span>
						<div className="footer_items">
							<a href="" className="footer_item">
								پایتون
							</a>
							<a href="" className="footer_item">
								امنیت
							</a>
							<a href="" className="footer_item">
								فرانت اند
							</a>
							<a href="" className="footer_item">
								جاوا اسکریپت
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
