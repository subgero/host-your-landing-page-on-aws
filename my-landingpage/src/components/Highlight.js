import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/core';

const Highlight = () => {
    return (
        <div className="highlight" id="home">
            <Splide
            options={ {
                rewind: true,
                gap   : '1rem',
                autoplay: true,
                interval: 5000,
                pauseOnHover: false
            } }
            aria-label="UsaTv La"
            >
                <SplideSlide className="splide-headline">
                    <h3>Camera lorem ipsum dolor at diem</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis efficitur sapien, et bibendum augue fermentum et. Etiam auctor nec eros egestas sodales. </span>
                    <img src="images/movie1.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide className="splide-headline">
                    <h3>Theater ipsum dolor at diem</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis efficitur sapien, et bibendum augue fermentum et. Etiam auctor nec eros egestas sodales. </span>
                    <img src="images/movie2.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide className="splide-headline">
                    <h3>Movies ipsum dolor at diem</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis efficitur sapien, et bibendum augue fermentum et. Etiam auctor nec eros egestas sodales. </span>
                    <img src="images/movie3.jpg" alt="Image 1"/>
                </SplideSlide>
                <SplideSlide className="splide-headline">
                    <h3>PopCorns ipsum dolor at diem</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis efficitur sapien, et bibendum augue fermentum et. Etiam auctor nec eros egestas sodales. </span>
                    <img src="images/movie4.jpg" alt="Image 1"/>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Highlight;