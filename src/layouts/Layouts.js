import React from "react";
import Home from "./Home";
import "../sass/signup_main.css";
import SignUp from '../components/signUpComponents/SignUp'
import PharmacySignUp from '../components/signUpComponents/PharmacySignUp';
import Header from '../components/header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// NB : All components are wrapped in the layout component

const Layouts = () => {
	return (

		<BrowserRouter>
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/signup" component={SignUp} />
					<Route path="/signup-pharmacy" component={PharmacySignUp} />
				</Switch>
			</div>
		</BrowserRouter>





	);
};

export default Layouts;
