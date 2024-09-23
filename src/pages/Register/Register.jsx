import React from "react";
import "./Register.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {
	requiredValidator,
	minValidator,
	maxValidator,
	emailValidator,
} from "../../Validators/rules";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function Register() {
	const [formState, onInputHandler] = useForm(
		{
			registerUsername: {
				value: "",
				isValid: false,
			},
			registerEmail: {
				value: "",
				isValid: false,
			},
			registerPassword: {
				value: "",
				isValid: false,
			},
		},
		false
	);
	// console.log("formState in register: ", formState);

	return (
		<div className="register">
			<Navbar />
			<div className="container">
				<div className="register_wrapper">
					<form className="register_from">
						<h2 className="form_title">ساخت حساب کاربری</h2>
						<div className="form_login_route">
							<span>قبلا ثبت نام کردی؟</span>
							<Link to="/login">ورود</Link>
						</div>
						<div className="input_wrapper">
							<Input
								className="form_input"
								id="registerUsername"
								maxLength="60"
								type="text"
								placeholder="نام کاربری"
								element="input"
								validation={[
									requiredValidator(),
									minValidator(4),
									maxValidator(16),
								]}
								onInputHandler={onInputHandler}
							></Input>
							<svg
								// id="input-svg"
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
								className="form_input"
								id="registerEmail"
								maxLength="60"
								type="email"
								placeholder="ایمیل"
								element="input"
								validation={[requiredValidator(), emailValidator()]}
								onInputHandler={onInputHandler}
							/>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="envelope"
								role="img"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
							>
								<path
									fill="#ffffff41"
									d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
								></path>
							</svg>{" "}
						</div>
						<div className="input_wrapper">
							<Input
								className="form_input"
								id="registerPassword"
								maxLength="60"
								type="password"
								placeholder="رمز عبور"
								element="input"
								validation={[
									requiredValidator(),
									minValidator(8),
									maxValidator(16),
								]}
								onInputHandler={onInputHandler}
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
						<Button className="form_btn" onClick={false} isDisabled={!formState.isFormValid}>
							ثبت نام
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="user-plus"
								role="img"
								viewBox="0 0 640 512"
								data-fa-i2svg=""
							>
								<path
									fill="currentColor"
									d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"
								></path>
							</svg>{" "}
						</Button>
					</form>
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
