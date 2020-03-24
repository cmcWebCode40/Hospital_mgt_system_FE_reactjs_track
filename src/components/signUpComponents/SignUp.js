import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SignUp extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className='signUpBody'> 
                <div className='signupText'>
                    <h2 className='signUp'>Sign Up As A:</h2>
                    <div>
                        <ul>
                            <Link to='/signup-patient'><li><div className='rectangle-list'>Patient</div></li></Link>
                            <Link to='/signup-hospital'><li><div className='rectangle-list'>Hospital</div></li></Link>
                            <Link to='/signup-doctor'><li><div className='rectangle-list'>Doctor</div></li></Link>
                            <Link to='/signup-pharmacy'><li><div className='rectangle-list'>Pharmacy</div></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp