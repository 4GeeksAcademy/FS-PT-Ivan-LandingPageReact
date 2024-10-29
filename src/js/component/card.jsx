import React from "react";
import rigoBabyImage from "/workspaces/FS-PT-Ivan-LandingPageReact/src/img/rigo-baby.jpg"


export const Card = () => {
	return (
		<div class="card" style={{ width: "18rem" }}>
			<img src={rigoBabyImage} class="card-img-top" alt="..." style={{ width: 'auto', height: 'auto', margin: "0px" }} />
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</p>
				<a href="#" class="btn btn-primary">Find out more!</a>
			</div>
		</div>
		
	);
};