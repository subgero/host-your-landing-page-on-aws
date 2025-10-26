import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faLightbulb, faCube, faHeadphones } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="services">
            <h3>Services</h3>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUtensils} />
                    <h3>Food</h3>
                    <span>Aenean in suscipit lacus. Fusce rutrum pulvinar sapien ac tempor</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faLightbulb} />
                    <h3>Lightning</h3>
                    <span>Aenean in suscipit lacus. Fusce rutrum pulvinar sapien ac tempor</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCube} />
                    <h3>3D Animation</h3>
                    <span>Aenean in suscipit lacus. Fusce rutrum pulvinar sapien ac tempor</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faHeadphones} />
                    <h3>Sound System</h3>
                    <span>Aenean in suscipit lacus. Fusce rutrum pulvinar sapien ac tempor</span>
                </li>
            </ul>
        </div>
    )
}

export default Services;