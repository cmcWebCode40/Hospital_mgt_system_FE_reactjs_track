import React,{useContext} from "react";
import Home from "./Home";
import SideMenu from "../shared/Hamburger";
import "../sass/signup_main.css";
import {Context} from '../shared/ContexApi';
import SignUp from '../components/signUpComponents/SignUp'
import PharmacySignUp from '../components/signUpComponents/PharmacySignUp';
import HospitalSignUp from '../components/signUpComponents/HospitalSignUp';
import DoctorSignUp from '../components/signUpComponents/DoctorSignUp';
import PatientSignUp from '../components/signUpComponents/PatientSignUp';
import Header from "../components/header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// NB : All components are wrapped in the layout component

const Layouts = () => {
	const [opened, setIsOpened] = useContext(Context);
	const collapseAll = () => (
		opened ? null:
	  setIsOpened(!opened)
	);
	return (
		<BrowserRouter>
			<div className="App" onClick={collapseAll}>
				<SideMenu />
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/signup" component={SignUp} />
					<Route path="/signup-pharmacy" component={PharmacySignUp} />
					<Route path="/signup-hospital" component={HospitalSignUp} />
					<Route path="/signup-doctor" component={DoctorSignUp} />
					<Route path="/signup-patient" component={PatientSignUp} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default Layouts;
