import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoAm from '../../assets/images/logo.svg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelopesBulk,faHouseLaptop, faLaptopCode ,faScaleUnbalancedFlip,faUserNinja} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
    const [showNav, setShowNav] =useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to="/" onClick={() => setShowNav(false)}>
              <img src={LogoAm} alt='logo AM'/>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHouseLaptop} color='#61BFD3'/>
            </NavLink>  
            <NavLink exact="true" activeclassname="active" className="about-link" to="about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUserNinja} color='#61BFD3'/>
            </NavLink>   
            <NavLink exact="true" activeclassname="active" className="projects-link" to="projects" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faLaptopCode} color='#61BFD3'/>
            </NavLink> 
            <NavLink exact="true" activeclassname="active" className="contact-link" to="contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelopesBulk} color='#61BFD3'/>
            </NavLink>  
            <NavLink exact="true" activeclassname="active" className="contact-link menu-hide" to="mentions" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faScaleUnbalancedFlip} color='#61BFD3'/>
                </NavLink>  
            <FontAwesomeIcon icon={faClose} color='#EF3D5B' size='3x' className='close-icon' onClick={() => setShowNav(false)}/>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/andr%C3%A9s-massa-54308611b/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#61BFD3' href=''/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/And-Mass81'>
                        <FontAwesomeIcon icon={faGithub} color='#61BFD3' href=''/>
                    </a>
                </li>
                <li>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="mentions" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faScaleUnbalancedFlip} color='#61BFD3'/>
                </NavLink>   

                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} color='#61BFD3' size='3x' className='hamburger-icon' onClick={() => setShowNav(true)}/>
        </div>
    );
};


export default Sidebar;