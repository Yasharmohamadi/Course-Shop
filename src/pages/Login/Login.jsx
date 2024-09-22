import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {
	requiredValidator,
	minValidator,
	maxValidator,
} from "../../Validators/rules";

export default function Login() {


	return (
		<div className="login">
			<Navbar />
			<div className="container">
				<div className="register_wrapper">
					<form className="register_from">
						<h2 className="form_title">ورود به حساب کاربری</h2>
						<div className="form_login_route">
							<span>کاربر جدید هستی؟</span>
							<Link to="/register">ثبت نام</Link>
						</div>
						<div className="input_wrapper">
							<Input
								id="loginUsername"
								className="form_input"
								maxLength="60"
								type="text"
								placeholder="نام کاربری یا ایمیل"
								element="input"
								validation={[
									requiredValidator(),
									minValidator(4),
									maxValidator(16),
								]}
							/>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="user"
								role="img"
								viewBox="0 0 448 512"
								data-fa-i2svg=""
							>
								<path
									fill="#ffffff41"
									d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
								></path>
							</svg>{" "}
						</div>

						<div className="input_wrapper">
							<Input
								id="loginPassword"
								className="form_input"
								maxLength="60"
								type="password"
								placeholder="رمز عبور"
								element="input"
								validation={[
									requiredValidator(),
									minValidator(8),
									maxValidator(16),
								]}
							/>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="lock-open"
								role="img"
								viewBox="0 0 576 512"
								data-fa-i2svg=""
							>
								<path
									fill="#ffffff41"
									d="M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"
								></path>
							</svg>{" "}
						</div>
						<Button className="form_btn" onClick={false} >
							وارد شو
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="right-from-bracket"
								role="img"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
							>
								<path
									fill="#fff"
									d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"
								></path>
							</svg>
						</Button>
					</form>
					<div className="sublink_wrapper">
						<div className="checkbox_wrapper">
							<label className="checkbox_lebel" htmlFor="checkbox">
								مرا به خاطر بسپار!
							</label>
							<input type="checkbox" className="checkbox_input" id="checkbox" />
						</div>
						<Link to="/recovery">رمز عبورت رو فراموش کردی؟</Link>
					</div>
					<div className="register_rule">
						<span className="form_rule_title">سلام کاربر محترم:</span>
						<ul className="form_rule_list">
							<li className="form_rule_list_item">
								لطفا از مرورگر های بروز و مطمئن استفاده کنید.
							</li>
							<li className="form_rule_list_item">
								ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
							</li>
							<li className="form_rule_list_item">
								لطفا رمز عبور خود را در فواصل زمانی کوتاه تفییر دهید.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
