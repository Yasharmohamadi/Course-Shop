
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Category from "./pages/Category/Category";
import AllCourses from "./pages/AllCourses/AllCourses";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";


export let routes = [
	{ path: "/", element: <Home /> },
	{ path: "/course/:coursename", element: <Course /> },
	{ path: "/category/:categoryname", element: <Category /> },
	{ path: "/allcourses/:page", element: <AllCourses /> },
	{ path: "/register", element: <Register /> },
	{ path: "/login", element: <Login /> },

];
