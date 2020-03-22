import React from "react";
import hospital from "../../images/hospital.jpg";
import consultant from "../../images/consultant.jpg";
import pharmacy from "../../images/pharmacy.jpg";
import map from "../../images/map.jpg";

const Card = () => {
	return (
		<div className="section-a">
			<h2>
				What we Do <p></p>
			</h2>
			<div className="card-section">
				<div className="box">
					<div className="box__img">
						<img className="image" src={hospital} alt="hospital" />
					</div>
					<div className="title">
						<h4>Hospital</h4>
					</div>
					<div className="text">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eos
						officia mollitia magnam ducimus distinctio nesciunt error, repellat
						incidunt illum debitis. Doloremque quae adipisci assumenda.
					</div>
				</div>
				<div className="box">
					<div className="box__img">
						<img src={pharmacy} alt="hospital" />
					</div>
					<div className="title">
						<h4>Pharmacy</h4>
					</div>
					<div className="text">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eos
						officia mollitia magnam ducimus distinctio nesciunt error, repellat
						incidunt illum debitis. Doloremque quae adipisci assumenda.
					</div>
				</div>
				<div className="box">
					<div className="box__img">
						<img src={consultant} alt="hospital" />
					</div>
					<div className="title">
						<h4>Consultant</h4>
					</div>
					<div className="text">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eos
						officia mollitia magnam ducimus distinctio nesciunt error, repellat
						incidunt illum debitis. Doloremque quae adipisci assumenda.
					</div>
				</div>
			</div>

			<div className="map">
				<div className="map__location">
					<img src={map} alt="map"/>
				</div>
				<div className="map__find">
					<form >
						<h5>Find close by Hospitals</h5>
						<span>lorem | lorem</span>
						<div className="search-bar">
							<input type="text" placeholder="search by location"/><button>find</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	);
};

export default Card;
