import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import LastCourse from "../../components/LastCourse/LastCourse";
import Aboutus from "../../components/Aboutus/Aboutus";
import PopularCourse from "../../components/PopularCourse/PopularCourse";
import Footer from "../../components/Footer/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<LastCourse />
			<Aboutus />
			<PopularCourse />
			<Footer />
		</div>
	);
}
