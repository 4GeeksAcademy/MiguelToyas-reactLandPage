import React from "react";

export default function Jumbotron () {
    const usableItems = {
        loremIpsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo pretium urna id laoreet. Nam a finibus nisl, eu tincidunt enim. In tincidunt porttitor venenatis. Morbi turpis sapien, pellentesque at magna euismod, congue aliquet dolor."
    }
    
	return (
		<div class="container-fluid m-5 bg-light rounded text-start pb-3">
			<h1 class="display-4">A warm welcome.</h1>
			<p class="lead">{usableItems.loremIpsum}</p>
			<a class="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Call to action!</a>
		</div>
	)
}