import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import { useState } from 'react';



function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div className='top-sticky1'>
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
                <li className="nav-item ">
                  <NavLink className="nav-link disabled" activeClassName="active" exact to="/">
                    Recovery Camp
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" activeClassName="active" to="/socialPrograms">
                    Social Programs
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" activeClassName="active" to="/impact">
                    Impact
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link disabled" activeClassName="active" to="/">
                    Stories
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" activeClassName="active" to="/team">
                    Join Our Team
                  </NavLink>
                </li>
              </ul>

              <button type="button" onClick={() => setButtonPopup(true)} className="btn contact-btn-header">Contact us</button>
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



              &nbsp;&nbsp;<button type="button" className="btn learn-btn-header">Login</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
