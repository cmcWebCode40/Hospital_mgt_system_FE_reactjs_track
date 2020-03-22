import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Header = () => {
	return (
		<div className="header">
			<div>
				<Logo />
			</div>
			<div>
                <div>
                <NavItems />
                <a  href="www.test.com" className="button">LOGIN</a>
                </div>
				
			</div>
		</div>
	);
};

export default Header;
