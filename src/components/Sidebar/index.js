import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoAm from '../../assets/images/logo.svg'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk,faHouseLaptop, faLaptopCode ,faUserNinja} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
              <img src={LogoAm} alt='logo AM'/>
            </Link>
            <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHouseLaptop} color='#61BFD3'/>
            </NavLink>  
            <NavLink exact="true" activeclassname="active" className="about-link" to="about">
                <FontAwesomeIcon icon={faUserNinja} color='#61BFD3'/>
            </NavLink>   
            <NavLink exact="true" activeclassname="active" className="projects-link" to="projects">
                <FontAwesomeIcon icon={faLaptopCode} color='#61BFD3'/>
            </NavLink> 
            <NavLink exact="true" activeclassname="active" className="contact-link" to="contact">
                <FontAwesomeIcon icon={faEnvelopesBulk} color='#61BFD3'/>
            </NavLink>     
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
            </ul>
        </div>
    );
};

export default Sidebar;