import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="section">
                <div className="container footer-container">
                    <div className="grid">
                        <div className="column">
                            <div className="logo">
                                <img src="/images/logo.jpg" width="150" height="150" className="logo-img" alt="Recovery Camp Logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="heading">
                                <a href="/index.php">Our Work</a>
                            </div>
                            <ul className="list">
                                <li><a className='footerLink' href="#">Recovery Camp</a></li>
                                <li><a className='footerLink' href="#">NDIS Programs</a></li>
                                <li><a className='footerLink' href="#">Impact</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <div className="heading">
                                <a href="">Latest Stories</a>
                            </div>
                            <ul className="list">
                                <li><a href="#">Shantelle Poynter</a></li>
                                <li><a href="#">Jade Lehmann</a></li>
                                <li><a href="#">Alison Thomas</a></li>
                            </ul>
                        </div>
                        <div className="column">
                            <div className="heading">
                                <a href="">Contact Us</a>
                            </div>
                            <ul className="list">
                                <li>
                                    <div className="contact-info">
                                        <a href="mailto:recoverycamp@recoverycamp.com.au"><span className="icon"><i className="fas fa-envelope"></i></span>recoverycamp@recoverycamp.com.au</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-info">
                                        <a href="tel:02 8488 0802"><span className="icon"><i className="fas fa-phone"></i></span>02 8488 0802</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-info">
                                        <p><span className="icon"><i className="fas fa-clock"></i></span>Office Hours<br></br>9am - 5pm</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-info">
                                        <p><span className="icon"><i className="fas fa-map-marker-alt"></i></span>Building 239, iAccelerate<br></br>UOW Innovation Campus</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="social-icons">
                                <a href="" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                                <a href="" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
