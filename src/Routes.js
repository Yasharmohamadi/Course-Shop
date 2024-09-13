
import Index from "./pages/Index/Index";
import Course from "./pages/Course/Course";
import Category from "./pages/Category/Category";
import Article from "./pages/Article/Article";


export let routes = [
	{ path: "/", element: <Index /> },
	{ path: "/course/:coursename", element: <Course /> },
	{ path: "/category/:categoryname", element: <Category /> },
	{ path: "/article/:articlename", element: <Article /> },

];
