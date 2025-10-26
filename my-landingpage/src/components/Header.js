import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { MobileView } from 'react-device-detect';

const Header = () => {

    const [menu, setMenu] = useState(false);

    useEffect(() => {

        return () => {

        }

    }, [menu]);

    return (
        <header>
            <div className="inner">
                <MobileView>
                    <div className="bars">
                        <FontAwesomeIcon icon={faBars} onClick={(e) => setMenu(true)}></FontAwesomeIcon>                    
                    </div>
                </MobileView>
                {/* <BrowserView> */}
                    <div className="logo">
                        <a href="#home">
                            <FontAwesomeIcon className='icon-tv' icon={faTv}></FontAwesomeIcon>
                            UsaTv Lat
                        </a>
                    </div>
                {/* </BrowserView> */}
            </div>
            <nav onClick={(e) => setMenu(false)} className={menu ? "active" : "no-active"}>
                <MobileView>
                    <div className="fatimecircle">
                        <FontAwesomeIcon icon={faTimesCircle} onClick={(e) => setMenu(false)}></FontAwesomeIcon>
                    </div>
                </MobileView>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#partners">Partners</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </header>
    )
}

export default Header;
