import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import CommonSection from '../components/CommonSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Swiper from '../components/ScrollImages';

function SocialProgram() {
    return (
        <div>
            <Topbar />
            < Navbar />
            <Swiper/>
            

            {/* card section mountian */}
            <div>
                <div className='container pages'>
                    <center> <h2 className='page-title'>Social Programs</h2></center>
                    <center>
                        <p className='pages-p'>
                            <p>  At Recovery Camp, we believe that mental health recovery is a journey, and we are here to support you every step of the way.</p>
                            <p> Whether you are looking for mental health support, skill-building opportunities, or social connection, we have a program for you.</p>
                            <p>  Check us out today and see how we can help you on your journey to mental health recovery</p>
                        </p>
                    </center>
                    <div className="row d-flex align-items-center round-page-section">
                        <div className="col-md-6">
                            <center>
                                <img className='round-image-page img-fluid' src="/images/storiesindecates.webp" width="500" height="500" alt="" loading="lazy" />
                            </center>
                        </div>

                        <div className="col-md-6">
                            <h2 className='page-title-l'>Our Programs</h2>
                            <p className='pages-p-l'>We offer a wide range of programs that focus on building strengths, skills, and connections. Our programs can be allocated to Core or Capacity Building NDIS budgets, and they are designed to help you live your best life.</p>
                            <img src="/images/pages-min-logo.webp" alt="line" />
                            <br /><br />
                            <button type="button" className="btn learn-btn-header">Enquire Today</button>
                        </div>
                    </div>
                    {/* card sectiions */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card hStoriesCard">
                                <img src="/images/sc1.webp" className="card-img-top" alt="..." />
                                <div className="card-body hStoriesCardBody">
                                    <h5 className="card-title hStoriesCardTitle">Horse Riding at Otford Farm</h5>
                                    <p className="card-text">Immerse yourself in nature as you’re led through an enchanting horse-riding experience in Otford’s rainforest. Experience creek crossings and explore the native bush!
                                        <br></br><br></br>
                                        <strong>
                                            Tuesday, March 5th<br></br>
                                            11am – 12:30pm
                                        </strong>
                                    </p>
                                    <br></br>
                                    <div><button type="button" className="btn learn-btn-header">Enquire Today</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card hStoriesCard">
                                <img src="/images/sc2.webp" className="card-img-top" alt="..." />
                                <div className="card-body hStoriesCardBody">
                                    <h5 className="card-title hStoriesCardTitle">Horse Riding at Otford Farm</h5>
                                    <p className="card-text">Immerse yourself in nature as you’re led through an enchanting horse-riding experience in Otford’s rainforest. Experience creek crossings and explore the native bush!
                                        <br></br><br></br>
                                        <strong>
                                            Tuesday, March 5th<br></br>
                                            11am – 12:30pm
                                        </strong>
                                    </p>
                                    <br></br>
                                    <div><button type="button" className="btn learn-btn-header">Enquire Today</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card hStoriesCard">
                                <img src="/images/sc3.webp" className="card-img-top" alt="..." />
                                <div className="card-body hStoriesCardBody">
                                    <h5 className="card-title hStoriesCardTitle">Horse Riding at Otford Farm</h5>
                                    <p className="card-text">Immerse yourself in nature as you’re led through an enchanting horse-riding experience in Otford’s rainforest. Experience creek crossings and explore the native bush!
                                        <br></br><br></br>
                                        <strong>
                                            Tuesday, March 5th<br></br>
                                            11am – 12:30pm
                                        </strong>
                                    </p>
                                    <br></br>
                                    <div><button type="button" className="btn learn-btn-header">Enquire Today</button></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* collaborataion section */}
                    <div className="row pages-collaboration" >
                        <div className="col-md-12">
                            <img src='/images/collaboration.webp' className='img-fluid' alt='collaboration' />

                            <p className='pages-collaboration-text'>Our NSW camps are held at the Y Camp Yarramundi facility which is located in the beautiful Hawkesbury Valley, the Y brings expertise in outdoor education and programming to the Recovery Camp experience. Tailored and personalised experiences are provided and there is a strong focus on welcoming everybody through a culture that truly embraces diversity and inclusion.</p>
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

export default SocialProgram;
