import React from "react";
import homeImg from "../../images/landingimage.jpg";

const Content = () => {
	return (
		<div className="content-page">
			<div className="home__content">
				<div className="home__content-info">
					<h1>
						Locate The Nearest <br/> <span>Hospital</span> Around You
					</h1>
					<p>
						We make healthcare possible in the world most impossible places <br/> and help you locate nearest hospitals and pharmacies near you with <br/> online consultations.
					</p>
					<button>GET STARTED</button>
				</div>
				<div className="home__content-img">
					<img src={homeImg} alt="emergency" />
				</div>
			</div>
			<div className="selection-box">
				<span>
					<input type="radio" name="pharmacy" />
					Pharmacy
					<input type="radio" name="hospital" />
					Hospital
				</span>
			
				<span>
					<input
						type="text"
						name="searchItem"
						placeholder="search for the nearest hospital on map"
					/>
				</span>
			</div>
		</div>
	);
};

export default Content;
