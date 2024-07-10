import React from "react";
import Navbar from "./Nabar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component

const Home = () => {
	return (
		<div className="container-fluid p-0" id="home">
			<Navbar />
			<div className="d-flex justify-content-center">
				<Jumbotron />
			</div>
			<div className="row my-2 mx-3">
				<div className="col-md-6 col-lg-3 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-md-6 col-lg-3 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-md-6 col-lg-3 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-md-6 col-lg-3 d-flex justify-content-center">
					<Card />
				</div>
			</div>
			<br />
			<div className="container-fluid p-0 mx-0" id="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
