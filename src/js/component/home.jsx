import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const usableItems = {
	loremIpsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo pretium urna id laoreet. Nam a finibus nisl, eu tincidunt enim. In tincidunt porttitor venenatis. Morbi turpis sapien, pellentesque at magna euismod, congue aliquet dolor."
}



const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark p-0">
				<div className="container-fluid d-flex justify-content-between">
					<div className="container d-flex justify-content-start">
						<a className="navbar-brand text-white" href="#">Navbar</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div className="container collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav" >
							<a className="nav-link text-white" aria-current="page" href="#">Home</a>
							<a className="nav-link text-secondary" href="#">About</a>
							<a className="nav-link text-secondary" href="#">Services</a>
							<a className="nav-link text-secondary" href="#">Contact</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
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
		<div className="card" style={{ width: '18rem' }}>
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
			<footer class="text-center bg-dark">
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
			<div className="row my-5 mx-3">
				<div className="col-md-3 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-md-3 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-md-3 d-flex justify-content-center">
					<Card />
				</div>
				<div className="col-md-3 d-flex justify-content-center">
					<Card />
				</div>
			</div>
			<div className="container-fluid p-0" id="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
