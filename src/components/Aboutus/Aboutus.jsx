import React from "react";
import "./Aboutus.css";
import SectinHeader from "../SectinHeader/SectinHeader";
import AboutusBox from "../AboutusBox/AboutusBox";

export default function Aboutus() {
	return (
		<div className="aboutus">
			<div className="container">
				<SectinHeader title="چرا نوژه؟" hasBtn={false} />
				<div className="row aboutus-content">
					<div className="col-12 col-xl-6">
						<AboutusBox
							title="دوره های اختصاصی"
							description="با پشتیبانی و کیفیت بالا ارائه میده !"
							icon='/images/svgs/happy.svg'
						/>
					</div>
					<div className="col-12 col-xl-6">
						<AboutusBox
							title="دوره پولی و رایگان"
							description="با بهترین کیفیت دوره میسازه"
							icon='/images/svgs/gem.svg'
						/>
					</div>
					<div className="col-12 col-xl-6">
						<AboutusBox
							title="اهمیت به داشنجو"
							description="اولیت اول و آخر آکادمی نوژه داشنجو هاست ."
							icon='/images/svgs/royal.svg'
						/>
					</div>
					<div className="col-12 col-xl-6">
						<AboutusBox
							title="مدرسین مجرب"
							description="هرکسی رو برای تدریس انتخاب نمیکنه چون کیفیت براش مهمه"
							icon='/images/svgs/teacher.svg'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
