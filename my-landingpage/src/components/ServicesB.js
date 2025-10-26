import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/dist/css/themes/splide-skyblue.min.css';

const ServicesB = () => {
    return (
        <div id="servicesB">
            <Splide aria-label="My Favorite Images">
                <SplideSlide>
                    <div className='ul'>
                        <div className="left">
                            <h2>Food Service</h2>
                            <span>Praesent posuere, tellus ac egestas bibendum, justo massa elementum turpis, vel elementum felis mauris vel felis</span>
                        </div>
                        <div className="right demo">
                            <img src="images/food.jpg" alt=":)" />
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='ul'>
                        <div className="left">
                            <h2>Lightning</h2>
                            <span>Morbi dolor massa, sagittis consectetur hendrerit vel, varius ut felis. Maecenas vestibulum, magna sit amet vestibulum pellentesque, lorem mauris</span>
                        </div>
                        <div className="right demo">
                            <img src="images/lightning.jpg" alt=":)"></img>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='ul'>
                        <div className="left">
                            <h2>Animation</h2>
                            <span>Duis fringilla orci a porta consequat. Etiam lacinia turpis at enim mollis imperdiet. In mollis, nulla vitae bibendum lacinia</span>
                        </div>
                        <div className="right demo">
                            <img src="images/3danimation.jpg" alt=":)"></img>
                        </div>                        
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='ul'>
                        <div className="left">
                            <h2>Sound</h2>
                            <span>Donec pulvinar quam arcu. Quisque vitae varius neque. Aenean id tincidunt velit. Suspendisse in gravida velit. Sed id lacus quam. </span>
                        </div>
                        <div className="right demo">
                            <img src="images/sound.jpg" alt=":)"></img>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default ServicesB;