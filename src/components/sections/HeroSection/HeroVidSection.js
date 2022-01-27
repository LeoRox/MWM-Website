import React from 'react';
import '../../../App.css';
import { Button } from '../../Button';
import './HeroVidSection.css';



function HeroVidSection() {

    return (
        <div className='hero-container'>
            <video src={require('../../images/video1.mp4')} autoPlay loop/>
            <div className='overlay'/>
            <h1>Durham Region Migrant Worker Ministry </h1>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--xlarge'>FIND OUT MORE <i className='far fa-play-circle'/> 
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--xlarge'>
                    SIGN-UP FOR OUR NEWSLETTER
                </Button>
            </div>
        </div>
    )
}



export default HeroVidSection;

