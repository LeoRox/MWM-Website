import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer-container'>
            <section
            className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe to our newsletter
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline' buttonSize='btn--large'>Subscribe</Button> 
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>Learn More</Link>
                        <Link to='/ourmission'>Our Mission</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Ministry</h2>
                        <Link to='/migrantministry'>Learn More</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Suport</h2>
                        <Link to='/about'>Give</Link>
                        <Link to='/ourmission'>Volunteer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='/about'>Contact</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            DRMWM <img src={require('./images/drmwm_logo_new.png')} alt='drmwm_logo'/>
                        </Link>
                    </div>
                    <small className='website-rights'>DRMWM © 2022</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                        to='https://www.facebook.com/nunez1982/'
                        target='_blank'
                        aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link youtube'
                        to='https://www.facebook.com/nunez1982/'
                        target='_blank'
                        aria-label='YouTube'>
                            <i className='fab fa-youtube'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
