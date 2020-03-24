import React, {Component} from 'react';
import doctor_image from '../../images/doctor_images/doctor.jpg';


class DoctorSignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            first_name: '',
            last_name: '',
            company: '',
            address_home: '',
            address_work: '',
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
        return (
            <div className='doctor-container'> 
                <div className='signup-header'>SIGN UP AS A DOCTOR: Please complete the form below</div>
                <div className='houseImage-div'>
                    <img src={doctor_image} width='492px' height='706px' title='Hospital Image' alt='Doctor Image'/>
                </div>
                <div className='formDiv'>
                    <input type='text' name='title' onChange={this.handleChange} placeholder='SElect Title'/>
                    <div className='second-child'>
                        <div class='input-half'>
                            <input type='text' name='first_name' onChange={this.handleChange} placeholder='Enter First Name'/>
                            <input type='text' name='company' onChange={this.handleChange} placeholder='Enter Company Name'/>
                            <input type='text' name='country' onChange={this.handleChange} placeholder='Country'/>
                            <input type='number' name='phone_no' onChange={this.handleChange} placeholder='Enter Phone No'/>
                            <input type='text' name='username' onChange={this.handleChange} placeholder='Username'/>
                            <input type='password' name='password' onChange={this.handleChange} placeholder='Password'/>
                        </div>
                    </div>
                    <div className='third-child'>
                        <div class='input-half right-div'>
                            <input type='text' name='last_name' onChange={this.handleChange} placeholder='Enter Last Name'/>
                            <input type='text' name='address_work' onChange={this.handleChange} placeholder='Address of work'/>
                            <input type='text' name='city' onChange={this.handleChange} placeholder='City'/>
                            <input type='text' name='address_home' onChange={this.handleChange} placeholder='Home Address'/>
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

export default DoctorSignUp