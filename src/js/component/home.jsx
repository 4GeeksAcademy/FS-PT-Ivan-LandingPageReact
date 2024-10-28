import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Components exports
import {Navbar} from "./navBar.jsx";
import {FooterHeader} from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="navBar"><Navbar /></div>
			<div className="firstHeader d-flex m-2">
				<FooterHeader />
				<FooterHeader />
				<FooterHeader />
				<FooterHeader />
			
			</div>
			
		</div>
	);
};

export default Home;
