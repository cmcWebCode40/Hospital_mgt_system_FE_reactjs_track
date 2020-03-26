import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/">
			<div className="header__logo">
				<span>MED</span>
				<span>PADI</span>
			</div>
		</Link>
	);
};

export default Logo;
