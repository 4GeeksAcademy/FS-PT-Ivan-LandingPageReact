import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Components exports
import {Navbar} from "./navBar.jsx";
import {FooterHeader} from "./footer.jsx";
import {Card} from "./card.jsx";
import {Copyright} from "./copyright.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="navBar"><Navbar /></div>
			<div className="container">
			<div className="firstHeader d-flex m-2">
				<FooterHeader />
			</div>
			<div className="d-flex justify-content-center" style={{ gap: '1rem', flexWrap: 'wrap', marginBottom: "2rem" }}>
      			<Card />
      			<Card />
      			<Card />
      			<Card />
    		</div>

			</div>
			<div className="copyright"><Copyright /></div>
			
		</div>
	);
};

export default Home;
