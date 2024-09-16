import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

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
					<NavLink to="/">
						<h1 className="nav-logo">نوژه</h1>
					</NavLink>
					<ul
						className={mobileNavIsShow ? "nav-list nav-list--open" : "nav-list"}
					>
						<NavLink
							to="/"
							className={`${(link) =>
								link.isActive ? "active " : ""}`}
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
						<i className="nav-serch-icon fas fa-search"></i>
						{/* <input className="nav-serch-input" /> */}
					</div>
					<a className="nav-basket">
						<i className="fas fa-shopping-cart"></i>
						<div className="basket-notif">2</div>
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
