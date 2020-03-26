import React, { useContext } from "react";
import NavItem from "../components/header/NavItem";
import { Context } from "../shared/ContexApi";

const Hamburger = () => {
	const [opened, setIsOpened] = useContext(Context);
	const close = () => setIsOpened(!opened);
	return (
		<div>
			<div className="menu">
				<div className={opened ? "" : "close"} onClick={close}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={opened ? "side-close" : "side-cover"}>
				<div className={opened ? "list" : "show"}>
					<NavItem link="www.test.com" content="How It Works" />
					<NavItem link="www.test.com" content="Need A Doctor" />
					<NavItem link="www.test.com" content="Contact Us" />
				</div>
			</div>
		</div>
	);
};

export default Hamburger;
