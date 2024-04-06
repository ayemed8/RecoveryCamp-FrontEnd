import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import CommonSection from '../components/CommonSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Swiper from '../components/ScrollImages';

function Login() {
    return (
        <div className='startLogin' style={{ backgroundImage: `url(/images/top-background.webp)`, backgroundPosition: '50% 100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Topbar />
            < Navbar />
            {/* card section mountian */}
            <div className='container sigDivStart'>
                <div className='loginMain'>
                    <h4 className='loginTopText'>Login to Recovery Camp</h4>
                    <div className='loginGoogleBtnDiv'>
                        <div className='loginGoogleBtn'>
                            Login with Google <span className='googleLoginText'>G</span>
                        </div>
                    </div>
                    <h5 className='loginBottomTxt'><i>"Find strength in recovery, one login at a time"</i></h5>
                </div>
            </div>
            {/* <Footer />
            <FooterBottom /> */}
        </div>
    );
}

export default Login;
