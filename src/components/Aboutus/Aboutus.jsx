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
							icon="fa-regular fa-face-grin-stars"
						/>
					</div>
					<div className="col-12 col-xl-6">
						<AboutusBox
							title="دوره پولی و رایگان"
							description="با بهترین کیفیت دوره میسازه"
                            icon="fa-regular fa-gem"
                            />
					</div>
					<div className="col-12 col-xl-6">
						<AboutusBox
							title="اهمیت به داشنجو"
							description="اولیت اول و آخر آکادمی نوژه داشنجو هاست ."
							icon="fa-solid fa-crown"
						/>
					</div>
					<div className="col-12 col-xl-6">
						<AboutusBox
							title="مدرسین مجرب"
							description="هرکسی رو برای تدریس انتخاب نمیکنه چون کیفیت براش مهمه"
							icon="fa-solid fa-chalkboard-user"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
