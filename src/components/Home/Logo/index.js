import {  useRef } from 'react'
import logoS from  '../../../assets/images/logoFull.png';
import './index.scss';




const Logo = () => {

  const bgRef = useRef()
  const solidLogoRef = useRef()


    return (

        <div className='logo-container'ref={bgRef}>
            <img className='solid-logo' src={logoS} ref={solidLogoRef} alt='logo AM'/>
        </div>

    );
};

export default Logo;