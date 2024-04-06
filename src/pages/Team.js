import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import CommonSection from '../components/CommonSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Swiper from '../components/ScrollImages';

function Team() {
    return (
        <div>
            <Topbar />
            < Navbar />
            <Swiper/>
            {/* card section mountian */}
            <div>
                <div className='container pages'>
                    <center> <h2 className='page-title'>Join Our Team</h2></center>
                    <center>
                        <p className='pages-p'>
                            <p>  For over a decade, Recovery Camp has been a leader in providing transformative mental health experiences and education.</p>
                            <p> Join us in our mission to expand our reach to more students and individuals who have lived experiences with mental illness through our camp and programs.</p>
                            <p>  With camps and programs in NSW, Victoria, and QLD, we’ve created a supportive community that empowers. </p>
                            <p><strong>Together, let’s make a difference.</strong></p>
                        </p>
                    </center>
                    <br></br>
                    <center> <h2 className='page-title'>Current Job Opportunities</h2></center>
                    <br></br><br></br>

                    {/* team 1 section */}
                    <div className="row d-flex align-items-center round-page-section">
                        <div className="col-md-6">
                            <center><img className='round-image-page img-fluid' src="/images/t1.webp" width="500" height="500" alt="" loading="lazy" />
                            </center>
                        </div>

                        <div className="col-md-6">
                            <h2 className='page-title-l'>Become a Recovery Camp Facilitator</h2>
                            <p className='pages-p-l'>As a Recovery Camp Facilitator, you will work with a dedicated multidisciplinary team to guide health students during their transformative clinical placement experience. Your expertise in mental health will be invaluable to empower the expertise of lived experience.</p>
                            <p className='pages-p-l'><strong>Required qualifications include current registration as a Registered Nurse (RN) with experience in mental health.</strong></p>
                            <button type="button" className="btn learn-btn-header">Enquire Today</button>
                        </div>
                    </div>
                    {/* team 2 section */}
                    <div className="row d-flex align-items-center round-page-section">
                        <div className="col-md-6">
                            <h2 className='page-title-l'>Become an NDIS Support Facilitator</h2>
                            <p className='pages-p-l'>Over the past decade, Recovery Camp has been delivering transformative mental health programs that empower and educate. As an NDIS Support Facilitator, your role ensures safe and impactful engagement for participants, including organising group activities for enhanced connection and well-being. Upholding Recovery Camp’s core values of connection, respect, and empowerment, you’ll make a significant impact on mental health.</p>
                            <p className='pages-p-l'><strong>This role is an occasional commitment, and we do not have a consistent schedule. We maintain a database of interested individuals and their details. When opportunities arise or when we plan new programs, we’ll reach out to discuss your availability and interest in joining us. Thank you for considering this opportunity with Recovery Camp.</strong></p>
                            <button type="button" className="btn learn-btn-header">Find Out More</button>
                        </div>
                        <div className="col-md-6">
                            <center> <img className='round-image-page img-fluid' src="/images/t2.webp" width="500" height="500" alt="" loading="lazy" /></center>
                        </div>
                    </div>
                    {/* team 3 section */}
                    <div className="row d-flex align-items-center round-page-section">
                        <div className="col-md-6">
                            <center> <img className='round-image-page img-fluid' src="/images/t3.webp" width="500" height="500" alt="" loading="lazy" />
                            </center>
                        </div>

                        <div className="col-md-6">
                            <h2 className='page-title-l'>Recovery Camp Membership Program</h2>
                            <p className='pages-p-l'>The Recovery Camp Membership Program is tailored for health professionals and students who have previously attended Recovery Camp, offering a chance to further their transformative educational journey. Join our dynamic community of like-minded health professionals and enjoy exclusive access to expert-led clinical supervision sessions and educational inservices.</p>
                            <p className='pages-p-l'><strong>Continue your professional growth and connection. Begin your membership today!</strong></p>
                            <button type="button" className="btn learn-btn-header">Join Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <CommonSection />
            <Footer />
            <FooterBottom />
        </div>
    );
}

export default Team;
