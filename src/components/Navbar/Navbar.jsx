import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	const [userRegister, setUserRegister] = useState(true);
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
					<NavLink to="/">
						<h1 className="nav-logo">نوژه</h1>
					</NavLink>
					<ul
						className={mobileNavIsShow ? "nav-list nav-list--open" : "nav-list"}
					>
						<NavLink
							to="/"
							className={`${(link) => (link.isActive ? "active " : "")}`}
						>
							<li className="nav-item">صفحه اصلی</li>
						</NavLink>
						<NavLink to="/category/front" className="nav-item">
							<li className="nav-item">فرانت اند</li>
						</NavLink>
						<NavLink to="/category/security" className="nav-item">
							<li className="nav-item">امنیت</li>
						</NavLink>
						<NavLink to="/category/python" className="nav-item">
							<li className="nav-item">پایتون</li>
						</NavLink>
					</ul>
				</div>
				<div className="nav-left">
					<div className="nav-serach" dir="ltr">
						<svg
							class="svg-inline--fa fa-magnifying-glass nav-serch-icon"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="magnifying-glass"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							data-fa-i2svg=""
						>
							<path
								fill="#fff"
								d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
							></path>
						</svg>
						{/* <input className="nav-serch-input" /> */}
					</div>
					<a className="nav-basket">
						<svg
							class="svg-inline--fa fa-cart-shopping"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="cart-shopping"
							role="img"
							viewBox="0 0 576 512"
							data-fa-i2svg=""
						>
							<path
								fill="#fff"
								d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"
							></path>
						</svg>
						<div className="basket-notif">2</div>
					</a>
					<a className="nav-user">
						<Link to="/register">ثبت نام / ورود</Link>
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
