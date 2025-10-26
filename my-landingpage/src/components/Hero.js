import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/core';

const Hero = () => {
    return (
        <div className="highlight" id="home">
            <Splide
            options={ {
                rewind: false,
                gap   : '1rem',
                autoplay: false,
                interval: 5000,
                pauseOnHover: false
            } }
            aria-label="UsaTv La"
            >
                <SplideSlide className="splide-headline">
                    <h3>Camera lorem ipsum dolor at diem</h3>
                    <img src="images/hero.jpg" alt="Image 1"/>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Hero;