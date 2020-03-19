import React from "react";
import Home from "./Home";
import "../sass/signup_main.css";
import SignUp from '../components/header/signUpComponents/SignUp'
import PharmacySignUp from '../components/header/signUpComponents/PharmacySignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// NB : All components are wrapped in the layout component

const Layouts = () => {
	return (

		<BrowserRouter>
			<div className="App">
				<Home />
				<Switch>
					<Route exact path="/"/>
					<Route path="/signup" component={SignUp} />
					<Route path="/signup-pharmacy" component={PharmacySignUp} />
				</Switch>
			</div>
		</BrowserRouter>





	);
};

export default Layouts;
