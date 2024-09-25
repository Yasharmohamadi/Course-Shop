import React, { useState } from "react";
import { routes } from "./Routes";
import { useRoutes } from "react-router-dom";
import AuthContext from "./Context/authContext";

export default function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [token, setToken] = useState(null)
	const [userInfos, setUserInfos] = useState({})

	const login = (token) => {
		setToken(token)
		localStorage.setItem('user', JSON.stringify({token}))
		
	}
	const logout = () => {
		setToken(null)
		setUserInfos({})
		localStorage.remove('user')
	}	

	let router = useRoutes(routes);
	return (
			<AuthContext.Provider value={{
				isLoggedIn, // isLoggedIn: isLoggedIn,
				token, // token: token,
				userInfos, // userInfos: userInfos,
				login,
				logout: () => {},
			}}>
				{router}
			</AuthContext.Provider>

	);
}
