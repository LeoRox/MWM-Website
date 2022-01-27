import React from 'react';
import PropTypes from 'prop-types';

function GoogleMap() {
  return (
  
    <section className='google-map'>
        <div className='map-responsive'>
            <iframe
                width='1837'
                height='400'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11484.172173909052!2d-78.6175015!3d43.9791594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x834a99c1cdd8895f!2sSt.%20Saviour&#39;s%20Anglican%20Church!5e0!3m2!1sen!2sca!4v1643166484072!5m2!1sen!2sca"
                frame border='0'
                loading='lazy'
                allowFullScreen
                />
        </div>
    </section>
    
    );
}

GoogleMap.protoTypes = {
    embedId: PropTypes.string.isRequired
};
export default GoogleMap;
