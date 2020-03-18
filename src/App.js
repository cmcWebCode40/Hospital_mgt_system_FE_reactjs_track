import React from 'react';
import Layouts from './layouts/Layouts';
import "./sass/main.scss";
import "./sass/signup_main.css";
import SignUp from './components/header/signUpComponents/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layouts/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
