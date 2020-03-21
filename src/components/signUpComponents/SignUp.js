import React, {Component} from 'react';


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
                            <li><div className='rectangle-list'>Patient</div></li>
                            <li><div className='rectangle-list'>Hospital</div></li>
                            <li><div className='rectangle-list'>Doctor</div></li>
                            <li><div className='rectangle-list'>Pharmacy</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp