import React from "react";

export default function Card () {
	return (
		<div className="card my-5" style={{ width: '18rem' }}>
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
