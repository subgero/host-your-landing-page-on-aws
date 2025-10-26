import React from 'react';

const Footer = () => {

    let y = new Date();
    let year = y.getFullYear();

    return (
        <footer>
            <div className="inner">
                <div className="footer">
                    <div>{process.env.REACT_APP_COMPANY_NAME} &copy; {year}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;