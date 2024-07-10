import React from "react";


export default function Navbar () {

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