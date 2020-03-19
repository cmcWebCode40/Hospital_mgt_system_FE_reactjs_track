import React from "react";
import Home from "./Home";
import Header from '../components/header/Header'
import "../sass/signup_main.css";
import SignUp from '../components/header/signUpComponents/SignUp'
import PharmacySignUp from '../components/header/signUpComponents/PharmacySignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// NB : All components are wrapped in the layout component

const Layouts = () => {
	return (

		<BrowserRouter>
			<div className="App">
			<Header/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/signup" exact component={SignUp} />
					<Route path="/signup-pharmacy" exact component={PharmacySignUp} />
				</Switch>
			</div>
		</BrowserRouter>





	);
};

export default Layouts;
