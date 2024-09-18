
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Category from "./pages/Category/Category";
import AllCourses from "./pages/AllCourses/AllCourses";


export let routes = [
	{ path: "/", element: <Home /> },
	{ path: "/course/:coursename", element: <Course /> },
	{ path: "/category/:categoryname", element: <Category /> },
	{ path: "/allcourses", element: <AllCourses /> },

];
