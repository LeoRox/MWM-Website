import React from 'react';
import PropTypes from 'prop-types';
import './YoutubeEmbed.css';


function YoutubeEmbed() {
    return(
        <section className='youtube-video' data-aos='fade-in' data-aos-delay='250' data-aos-easing="ease-in" data-aos-mirror="true"
        data-aos-once="false">
            <div className='video-responsive'>
            <h1 className='heading'>Learn More About Us</h1>
                <iframe
                    width='853'
                    height='460'
                    src={`https://www.youtube.com/embed/UCJXxC7zVl8`}
                    frame border='0'
                    allow='accelerometer, autoplay, encrypted-media'
                    allowFullScreen
                    title='Embedded youtube'
                    
                    
                />
            </div>
        </section>
    );
}

YoutubeEmbed.protoTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

