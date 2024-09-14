import React from "react";
import Header from "../../components/Header/Header";
import LastCourse from "../../components/LastCourse/LastCourse";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />

			<Header />
			<LastCourse />
		</div>
	);
}
