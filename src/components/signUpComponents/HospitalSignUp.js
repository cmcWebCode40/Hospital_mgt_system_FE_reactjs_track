import React, {Component} from 'react';
import hospital_image from '../../images/hospital_images/hospital.jpg';


class HospitalSignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            center_name: '',
            address: '',
            phone_no: '',
            username: '',
            password: '',
            country: '',
            city: '',
            email: '',
            confirm_password: '',
            checked: false

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            //this.validateInput(id, value)
        })
    }
    handleChecked = (e) => {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleClick = (e) => {
        console.log(this.state);
    }

    render(){
        console.log(this.state.checked);
        return (
            <div className='hospital-container'> 
                <div className='signup-header'>SIGN UP AS A HOSPITAL: Please complete the form below</div>
                <div className='houseImage-div'>
                    <img src={hospital_image} width='499px' height='362px' title='Hospital Image' alt='Hospital Image'/>
                </div>
                <div className='formDiv'>
                    <input type='text' name='center_name' onChange={this.handleChange} placeholder='CENTRE NAME'/>
                    <div className='second-child'>
                        <div class='input-half'>
                            <input type='text' name='address' onChange={this.handleChange} placeholder='Enter Address'/>
                            <input type='number' name='phone_no' onChange={this.handleChange} placeholder='Enter Phone No'/>
                            <input type='text' name='username' onChange={this.handleChange} placeholder='Username'/>
                            <input type='password' name='password' onChange={this.handleChange} placeholder='Password'/>
                        </div>
                    </div>
                    <div className='third-child'>
                        <div class='input-half right-div'>
                            <input type='text' name='country' onChange={this.handleChange} placeholder='Country'/>
                            <input type='text' name='city' onChange={this.handleChange} placeholder='City'/>
                            <input type='email' name='email' onChange={this.handleChange} placeholder='email'/>
                            <input type='password' name='confirm_password' onChange={this.handleChange} placeholder='Confirm Password'/>
                        </div>
                    </div>
                    <div className='checkbox-div'>
                        <input type='checkbox' defaultChecked={this.state.checked} onChange={this.handleChecked} /> I agree with the Terms of Service
                    </div>
                    <div className='button-div'>
                        <button onClick={this.handleClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HospitalSignUp