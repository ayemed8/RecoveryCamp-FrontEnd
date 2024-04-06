import React from 'react';
import { NavLink } from 'react-router-dom';
import Topbar from '../components/Topbar';
import CommonSection from '../components/CommonSection';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { useState } from 'react';


function Home() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (

    <div>
      <Topbar />
     <div id='showHideBar'> < Navbar /></div>
      <div style={{ backgroundImage: `url(/images/top-background.webp)`, backgroundPosition: '50% 100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='mainHSection'>
        <div className='top-sticky'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container containerNavheader">
            <NavLink className="navbar-brand" to="/">
              <img src='/images/logo.jpg' alt='logo' width='100' height='100' />
            </NavLink>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link disabled" exact to="/s">
                    Recovery Camp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/socialPrograms">
                    Social Programs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/impact">
                    Impact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link disabled" to="/s">
                    Stories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/team">
                    Join Our Team
                  </NavLink>
                </li>
              </ul>

              <button type="button" onClick={() => setButtonPopup(true)} className="btn contact-btn-header">Contact us</button>
              &nbsp;&nbsp;<button type="button" className="btn learn-btn-header">Login</button>
            </div>
          </div>
        </nav>

            {/* popup start */}
            <Contact trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>Enquiry Form</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <br></br>
                    <input type="text" className="form-control formContact" placeholder="First name" />
                  </div>

                  <div className='col-md-6'>
                    <br></br>
                    <input type="text" className="form-control formContact" placeholder="Last name" />
                  </div>


                  <div className='col-md-6'>
                    <br></br>
                    <input type="email" className="form-control formContact" placeholder="Email Address" />
                  </div>

                  <div className='col-md-6'>
                    <br></br>
                    <input type="number" className="form-control formContact" placeholder="Phone Number" />
                  </div>


                  <div className='col-md-6'>
                    <br></br>
                    <div class="form-group">
                      <select class="form-control formContact" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <br></br>
                    <div class="form-group">
                      <select class="form-control formContact" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-md-12'>
                    <br></br>
                    <input type="text" className="form-control formContact" placeholder="How did you hear about us?" />
                  </div>
                  <br></br>

                  <div className='col-md-12'>
                    <br></br>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                  </div>

                  <div className='col-md-12'>
                    <br></br>
                    <button type="button" className="btn btn-outline-secondary formContactbtn">Submit</button>
                  </div>
                </div>
              </Contact>
              {/* popup end */}
      </div>
          {/* main section */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className='hMentalLeft'>
                  <h2 id='h-main-txt'>Mental Health. Empowerment. Education.</h2>
                  <p id='h-sub-txt'>Recovery Camp is an award-winning provider of life-changing mental health programs.</p>
                  <div className='row' >
                    <div className=''>
                      <button type="button" className="btn learn-btn-header">Learn More</button>
                      <button type="button" className="btn contact-btn-header">Contact us</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <iframe style={{ width: '100%' }} height="354" src="https://www.youtube.com/embed/BxRwUUNiVl4" title="Recovery Camp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* round card Section */}
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4" id='card-margin'>
          <div className="col">
            <div className="card round-card">
              <img className='h-round-img' src="/images/home1.jpg" alt="My Image" />
              <div className="card-body round-card-body">
                <h5 className="card-title round-card-title">Recovery Camp</h5>
                <p className="card-text round-card-text">Are you looking for an adventurous and supportive experience to assist with your mental health recovery?</p>
                <p className="card-text round-card-text">Recovery Camp is a fun, empowering, and life-changing program available to all – including those with NDIS</p>
              </div>
              <div><button type="button" className="btn learn-btn-header">Learn More</button></div>
            </div>
          </div>
          <div className="col">
            <div className="card round-card">
              <img className='h-round-img' src="/images/home2.webp" alt="My Image" />
              <div className="card-body round-card-body">
                <h5 className="card-title round-card-title">Social Programs</h5>
                <p className="card-text round-card-text">Recovery Camp has a range of programs available.</p>
                <p className="card-text round-card-text">Our programs focus on strengths, skill-building, and social connection. They can be allocated to Core or Capacity Building NDIS budgets</p>
              </div>
              <div><button type="button" className="btn learn-btn-header">Learn More</button></div>
            </div>
          </div>
          <div className="col">
            <div className="card round-card">
              <img className='h-round-img' src="/images/home3.webp" alt="My Image" />
              <div className="card-body round-card-body">
                <h5 className="card-title round-card-title">Our Impact</h5>
                <p className="card-text round-card-text">We know that Recovery Camp has a profound impact on all who attend!</p>
                <p className="card-text round-card-text">Recovery Camp is an award-winning, and evidence-based program. There are over 30 peer-reviewed journal articles detailing the impact of camp.</p>
              </div>
              <div><button type="button" className="btn learn-btn-header">Learn More</button></div>
            </div>
          </div>

        </div>
      </div>

      {/* Banner Section */}
      <div className='bannerImg' style={{ backgroundImage: `url(/images/homeBanner.webp)` }}>
        <div className='mainBanner'>
          <div className="container">
            <div className='row' >
              <div className='col-lg-6 col-md-6 mainBannerText'>
                <div><img src="/images/homeBannerLogo.png" width={100} alt="My Image" /></div>
                <div> <img src="/images/homeBannerImg2.webp" width={200} alt="My Image" /></div>
                <h2 id='bannerH2'>
                  Join us for a fun, empowering, and life-changing experience.
                </h2>
              </div>
              <div className='col-lg-6 col-md-6 mainBannerText' style={{ textAlign: 'right' }}>
                <p id='bannerLeft1'>We would love for you to join us!</p>
                <p id='bannerLeft2'>We are taking applications for:</p>
                <p style={{ textAlign: 'right', color: 'white' }}>
                  <br />April 8 – 12, 2024 (Mt Evelyn, VIC)
                  <br />May 13 – 17, 2024 (Yarramundi, NSW)
                  <br />June 17 – 21, 2024 (Yarramundi, NSW)
                  <br />July 22 – 26, 2024 (Grassy Head, NSW)
                  <br />August 12 &nbsp;– 16 , 2024&nbsp;(Yarramundi, NSW)
                  <br />September 16 &nbsp;– 20 , 2024&nbsp;(Warrawee, QLD)
                  <br />October 7 &nbsp;– 11 , 2024&nbsp;(Yarramundi, NSW)
                  <br />December 9 &nbsp;– 13 , 2024&nbsp;(Yarramundi, NSW)
                </p>
                <div><button type="button" className="btn learn-btn-header">Learn More</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card section mountian */}
      <div id='hMountainDiv' style={{ backgroundImage: `url(/images/mountain.png)` }}>
        <div className='container' id='hstories' >
          <h2 id='hstories-title'>Latest Stories</h2>
          <p id='hstories-p'>Hear from both Participants & Students about their experiences with our camp</p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card hStoriesCard">
                <img src="/images/stories1.webp" className="card-img-top" alt="..." />
                <div className="card-body hStoriesCardBody">
                  <h5 className="card-title hStoriesCardTitle">Shantelle Poynter</h5>
                  <p className="hStoriesCardTag">Student</p>
                  <p className="card-text">Being one of the Nursing students selected from Central Queensland University to participate in Re…</p>
                  <div><button type="button" className="btn contact-btn-header">Contact us</button></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hStoriesCard">
                <img src="/images/stores2.webp" className="card-img-top" alt="..." />
                <div className="card-body hStoriesCardBody">
                  <h5 className="card-title hStoriesCardTitle">Jade Lehmann</h5>
                  <p className="hStoriesCardTag">Student</p>
                  <p className="card-text">I came to Recovery Camp as a student nurse needing to complete my placement for mental health. I c…</p>
                  <div><button type="button" className="btn contact-btn-header">Contact us</button></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card hStoriesCard">
                <img src="/images/stories3.webp" className="card-img-top" alt="..." />
                <div className="card-body hStoriesCardBody">
                  <h5 className="card-title hStoriesCardTitle">Alison Thomas</h5>
                  <p className="hStoriesCardTag">Recovery Camp Nursing Scholarship 2023</p>
                  <p className="card-text">New Nursing Scholarship Recipient Alison Thomas Drivento Make a Positive Impact in Mental Health C…</p>
                  <div><button type="button" className="btn contact-btn-header">Contact us</button></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <CommonSection />
      <Footer />
      <FooterBottom />
    </div >
  );
}

export default Home;
