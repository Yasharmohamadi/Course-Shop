import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
	const [mobileNavIsShow, setMobileNavIsShow] = useState(false);

	const mobileNavHandler = () => {
		console.log("clicked");
		setMobileNavIsShow(!mobileNavIsShow);
		console.log(mobileNavIsShow);
	};

	return (
		<div className="navbar">
			<div className="container">
				<div className="nav-right">
					<h1 className="nav-logo">نوژه</h1>
					<ul
						className={mobileNavIsShow ? "nav-list nav-list--open" : "nav-list"}
					>
						<li className="nav-item nav-item--active">
							<a href="#">صفحه اصلی</a>
						</li>
						<li className="nav-item">
							<a href="#">فرانت اند</a>
						</li>
						<li className="nav-item">
							<a href="#">امنیت</a>
						</li>
						<li className="nav-item">
							<a href="#">مقالات</a>
						</li>
						<li className="nav-item">
							<a href="#">پایتون</a>
						</li>
					</ul>
				</div>
				<div className="nav-left">
					<div className="nav-serach" dir="ltr">
						<i className="nav-serch-icon fas fa-search"></i>
						{/* <input className="nav-serch-input" /> */}
					</div>
					<a className="nav-basket">
						<i className="fas fa-shopping-cart"></i>
                        <div className="basket-notif">
                            2
                        </div>
					</a>
					<a className="nav-user">
							<i class="fa-solid fa-user"></i>

					</a>

					<div
						onClick={mobileNavHandler}
						className={mobileNavIsShow ? "nav-btn nav-btn--open" : "nav-btn"}
					>
						<div className="nav-btn-line"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
