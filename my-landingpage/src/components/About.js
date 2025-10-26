import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return(
        <div id="about">
            <div className="inner">
                <h2>About us</h2>
                <span>{process.env.REACT_APP_COMPANY} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium volutpat. Praesent vel bibendum nibh, vel imperdiet orci. Sed metus erat, efficitur eu cursus a, congue a elit.</span>
                <div className="canvas">
                </div>
            </div>
            <a href="https://wa.me/+123456789" className='btn btn-whatsapp'><FontAwesomeIcon className='icon' icon={faWhatsapp}></FontAwesomeIcon> Contact Us!</a>
        </div>
    )
}

export default About;