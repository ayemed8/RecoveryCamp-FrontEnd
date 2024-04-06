import React from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import CommonSection from '../components/CommonSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Swiper from '../components/ScrollImages';

function Impact() {
    return (
        <div>
            <Topbar />
            < Navbar />
            <Swiper/>
            {/* card section mountian */}
            <div>
                <div className='container pages'>
                    <center> <h2 className='page-title'>Impact</h2></center>
                    <center>
                        <p className='pages-p'>
                            <p> We started with our first camp in 2013 and since then Recovery Camp and its programs have had an incredible impact on mental health, and mental health education.</p>
                            <p> This impact has been documented in over 30 peer-reviewed research articles, and recognised in the Australian Government Productivity Commission’s Mental Health Inquiry Report.</p>
                            <p>  Our camps and other programs have been attended by 900 people with lived experience, as well as provided transformative lived experience education to over 1500 health students.</p>
                            <br /><br />
                            <button type="button" className="btn learn-btn-header">Contact Us Today!</button>
                        </p>
                    </center>
                    <div className="row d-flex align-items-center round-page-section">
                        <div className="col-md-6">
                            <img className='round-image-page img-fluid' src="/images/impact-round.webp" width="600" height="550" alt="" loading="lazy" />
                        </div>

                        <div className="col-md-6">
                            <h2 className='page-title-l'>Our Awards</h2>
                            <p className='pages-p-l'>Recovery Camp has received a number of awards including:</p>
                            <div className="awards-list">
                                <div className="award">
                                    <div className="year">2023</div>
                                    <div className="content">
                                        <span>Highly Commended, </span><span>Service & Program</span>
                                        <div className="meta">The Mental Health Services (TheMHS) of Australia and New Zealand</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2022</div>
                                    <div className="content">
                                        <span>Certificate of High Commendation, Mental Health Matters Award</span>
                                        <div className="meta">WayAhead – Mental Health Association NSW</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2021</div>
                                    <div className="content">
                                        <span>Semi-Finalist for Awards Australia Connecting Communities Award</span>
                                        <div className="meta">Community Achievement Awards, Celebrating Reginal Communities</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2018</div>
                                    <div className="content">
                                        <span>Outstanding Contribution to Teaching and Learning Awards</span>
                                        <div className="meta">Vice Chancellor’s Awards, UOW</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2017</div>
                                    <div className="content">
                                        <span>Citation for Outstanding Contributions to Student Learning</span>
                                        <div className="meta">The Australian Government, Department of Education and Training, Australian Awards for University Teaching</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2016</div>
                                    <div className="content">
                                        <span>Mental Health Award for Education, Training or Workforce Development</span>
                                        <div className="meta">The Australian and New Zealand Mental Health Awards</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2016</div>
                                    <div className="content">
                                        <span>Excellence in Interdisciplinary Research</span>
                                        <div className="meta">Vice Chancellor’s Awards, UOW</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2016</div>
                                    <div className="content">
                                        <span>Community Engagement Award</span>
                                        <div className="meta">Vice Chancellor’s Awards, UOW</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2015</div>
                                    <div className="content">
                                        <span>Outstanding Achievement in Education</span>
                                        <div className="meta">Australian College of Educators Awards</div>
                                    </div>
                                </div>
                                <div className="award">
                                    <div className="year">2015</div>
                                    <div className="content">
                                        <span>Partnerships in Wellbeing Award in recognition of an innovative, partnership program</span>
                                        <div className="meta">The Australian College of Mental Health Nurses</div>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn learn-btn-header">Enquire Today</button>
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

export default Impact;
