import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const usableItems = {
	loremIpsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo pretium urna id laoreet. Nam a finibus nisl, eu tincidunt enim. In tincidunt porttitor venenatis. Morbi turpis sapien, pellentesque at magna euismod, congue aliquet dolor."
}



const Navbar = () => {

	return (
		<>
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg py-1" id="navbarPrincipal" data-bs-theme="dark">
				<div className="container-fluid d-flex justify-content-between">
					<button
						className="navbar-toggler text-body-white"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
						id="togglerButtonNavbar"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse text-white">
						<span>Start Bootstrap</span>
					</div>
					<div className="collapse navbar-collapse text-lg-center ms-2 mt-2 p-0 row" id="navbarNav">
						<ul className="navbar-nav d-flex justify-content-end">
							<li className="nav-item mx-3">
								<a href="/Home" className="nav-link active">Home</a>
							</li>
							<li className="nav-item mx-3">
							<a href="/Home" className="nav-link">About Us</a>
							</li>
							<li className="nav-item mx-3">
							<a href="/Services" className="nav-link">Services</a>
							</li>
							<li className="nav-item mx-3">
							<a href="/Contact" className="nav-link">Contact</a>			
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

const Jumbotron = () => {
	return (
		<div class="container-fluid m-5 bg-light rounded text-start pb-3">
			<h1 class="display-4">A warm welcome.</h1>
			<p class="lead">{usableItems.loremIpsum}</p>
			<a class="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Call to action!</a>
		</div>
	)
}

const Card = () => {
	return (
		<div className="card my-3" style={{ width: '18rem' }}>
			<img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top" alt="Aquí debe aparecer una imagen" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
			<div className="card-footer text-center my-1">
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	)
}

const Footer = () => {
	return (
		<footer class="text-center bg-dark mt-5">
			<div className="text-center py-2 text-white">
				© 2021 Copyright:
				<a className="text-reset fw-bold ms-2" href="https://mdbootstrap.com/">MDBootstrap.com</a>
			</div>
		</footer>
	)
}

const Home = () => {
	return (
		<div className="container-fluid p-0" id="home">
			<Navbar />
			<div className="d-flex justify-content-center">
				<Jumbotron />
			</div>
			<div className="row my-4 mx-3">
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
			<div className="container-fluid p-0 mx-0" id="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
