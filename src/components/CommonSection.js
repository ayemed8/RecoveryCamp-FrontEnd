import React from 'react';
import { Link } from 'react-router-dom';

function CommonSection() {
    return (
        <div>
            {/* out aim */}
      <div id='htreeImg' style={{ backgroundImage: `url(/images/tree.png)` }}>
        <div className='hmaintree'>
          <div className="container">
            <div className='row' >
              <div className='col-lg-6 col-md-6' style={{ padding: '60px' }}>
                <div style={{ display: "flex" }}>
                  <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="#fff" strokeWidth="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"></path>
                  </svg>
                  <div style={{ paddingLeft: "20px" }}>
                    <h3 className="htreeTitle">Our Aim</h3>
                    <p className="htreeP">Recovery Camp aims to improve mental health, and mental health care. We want impact now!</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6' style={{ padding: '60px' }}>
                <div style={{ display: "flex" }}>
                  <svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="7" stroke="#fff" r="1"></circle><circle cx="7" stroke="#fff" cy="7" r="1"></circle><circle fill="none" stroke="#fff" cx="10" cy="10" r="8.5"></circle>
                    <path fill="none" stroke="#fff" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4">
                    </path></svg>
                  <div style={{ paddingLeft: "20px", paddingTop: '10px' }}>
                    <h3 className="htreeTitle">Our mission is about you!</h3>
                    <p className="htreeP">Through your connection with Recovery Camp we hope you realise your personal strengths, and your contribution to the mental health and recovery of others.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recovery camp parallex */}
      <div className="hRecoveryCamp" style={{ backgroundImage: `url(/images/recovery.webp)` }}>
        <div className='mainhRecoveryCamp'>
          <div className='container'>
            <div className='row' >
              <div className='col-lg-6 col-md-12' style={{ padding: '60px' }}>
                <h2 className='hRecoveryCampTitle'>Recovery Camp</h2>
                <p className='hRecoveryCampText'>Recovery Camp has been a transformative force in the mental health landscape over the past decade. Celebrating our 40th camp in 2023, this milestone reflects our premier program’s enduring success and sustained impact.</p>
                <p className='hRecoveryCampText'>We are driven to broaden our reach and impact, to improve mental health and mental health education, nationally.</p>
                <p className='hRecoveryCampText'>Contact us for information about camps in 2024 and 2025.</p>
                <div className='recoverybtn'>  <button type="button" className="btn learn-btn-header ">Let's Get Started!</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* flag and acknowledgement section */}
      <div className='container'>
        <div className='row flagainDiv'>
          <div className='col-lg-6 col-md-12 flagDiv'>
            <img src="/images/flag1.webp" /> &nbsp;
            <img src="/images/flag2.webp" /> &nbsp;
            <img src="/images/flag3.webp" />
          </div>
          <div className='col-lg-6 col-md-12 flagDiv'>
            <h1 className='HackgTitle'>Acknowledgement of Country</h1>

            <p className='HackgText flagDiv'>
              Recovery Camp acknowledges the Traditional Owners of the land where we work and live. We pay our respects to Elders past, present and emerging. We celebrate the stories, culture and traditions of Aboriginal and Torres Strait Islander Elders of all communities who also work and live on this land.<br></br><br></br>
              Recovery Camp welcomes all people irrespective of ethnicity, lifestyle choice, faith, sexual orientation and gender identity.</p>
          </div>
        </div>
      </div>
        </div>
    );
}

export default CommonSection;
