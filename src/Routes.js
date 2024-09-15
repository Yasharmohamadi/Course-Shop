
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Category from "./pages/Category/Category";


export let routes = [
	{ path: "/", element: <Home /> },
	{ path: "/course/:coursename", element: <Course /> },
	{ path: "/category/:categoryname", element: <Category /> },

];
