import React from "react";
import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<div class="container">
				<div className="nav-right">
					<h1 className="nav-logo">یاشا لرن</h1>
					<ul className="nav-list">
						<li className="nav-item">
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
					</a>
					<a className="nav-user">یاشار محمدی</a>
				</div>
			</div>
		</div>
	);
}
