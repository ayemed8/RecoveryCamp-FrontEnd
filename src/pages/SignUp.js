import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import CommonSection from '../components/CommonSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Swiper from '../components/ScrollImages';

function Signup() {
    return (
        <div className='startSignUp' style={{ backgroundImage: `url(/images/top-background.webp)`, backgroundPosition: '50% 100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Topbar />
            < Navbar />
            {/* card section mountian */}
            <div className='container sigDivStart'>
                <div className='signUpMain'>
                    <div className='signUpTitle'>
                        <h2>Sign Up</h2>
                        <h5><i>Enter your detail to continue</i></h5>
                    </div>
                    <div className='signUpForm'>
                        <div className='formFields'>
                            <div className='form-group'>
                                <label for='name'>First Name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label for='name'>Last Name</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='formFields'>
                            <div className='form-group'>
                                <label for='name'>Phone#</label>
                                <input type='number' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label for='name'>Email Address</label>
                                <input type='email' className='form-control' />
                            </div>
                        </div>
                        <div className='formFields'>
                            <div className='form-group'>
                                <label for='name'>Address Line 2</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='formFields'>
                            <div className='form-group'>
                                <label for='name'>Address Line 2</label>
                                <input type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='formFields'>
                            <div className='form-group'>
                                <label for='name'>City</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label for='name'>PostCode</label>
                                <input type='number' className='form-control' />
                            </div>
                        </div>
                        <br></br>
                        <input type="checkbox" id="subscribeCheckbox" />
                        <label for="subscribeCheckbox"> <h6><i>Subscribe to Email? (Optional)</i></h6></label>

                        {/* add confirm button here with gree color */}
                        <div className='signUpBtnDiv'>
                            <button className='signUpBtn'>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer />
            <FooterBottom /> */}
        </div>
    );
}

export default Signup;
