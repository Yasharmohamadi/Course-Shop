import React, { useCallback, useEffect, useState } from "react";
import { routes } from "./Routes";
import { useRoutes } from "react-router-dom";
import AuthContext from "./Context/authContext";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState(null);
	const [userInfos, setUserInfos] = useState({});

	const login = useCallback((userInfos, token) => {
		setToken(token);
		localStorage.setItem("user", JSON.stringify({ token }));
		setIsLoggedIn(true);
		setUserInfos(userInfos);
	});
	const logout = useCallback(() => {
		setToken(null);
		setUserInfos({});
		localStorage.remove("user");
	});

	useEffect(() => {
		// let localStorageData = JSON.parse(localStorage.getItem("user"));
		// if (localStorageData) {
		// 	fetch("http://localhost:3000/v1/auth/me", {
		// 		headers: {
		// 			'Authorization': `Bearer ${localStorageData.token}`
		// 		},
		// 	}).then(response => response.json())
		// 	.then(userData => {
		// 		setIsLoggedIn(true)
		// 		setUserInfos(userData)
		// 	});
		// }
	}, [login]);

	let router = useRoutes(routes);
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn, // isLoggedIn: isLoggedIn,
				token, // token: token,
				userInfos, // userInfos: userInfos,
				login,
				logout,
			}}
		>
			{router}
		</AuthContext.Provider>
	);
}
