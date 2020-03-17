import React from 'react';
import logoImage from '../../images/undraw_exams_g4ow.svg';

const Logo = () => {
    return (
        <div className="header__logo">
          <img src={logoImage} alt="App logo" height="50" width="50"/> 
        </div>
    )
}

export default Logo
