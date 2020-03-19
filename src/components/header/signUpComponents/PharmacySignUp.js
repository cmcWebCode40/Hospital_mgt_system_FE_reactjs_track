import React, {Component} from 'react';
import pharmacy_image from '../../../images/pharmacy/pharmacy.png'


class PharmacySignUp extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className=''> 
                <div className=''>
                    <h2 className=''>Sign Up As A Pharmaceutical Center: Please complete the form below</h2>
                </div>
                <div className='houseImage'>
                    <img src={pharmacy_image}/>
                </div>
                <div className='formDiv'>
                    <form>

                    </form>
                </div>
            </div>
        )
    }
}

export default PharmacySignUp