import React from "react";

const NavItem = ({ link, content }) => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<a href={link}>{content}</a>
				</li>
			</ul>
		</div>
	);
};

export default NavItem;
