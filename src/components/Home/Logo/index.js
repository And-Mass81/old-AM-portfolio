
import logoS from  '../../../assets/images/logoOpt.png';
import './index.scss';
import { PowerGlitch } from 'powerglitch'




const Logo = () => {
    PowerGlitch.glitch('.logo-container')
    return (

        <div className='logo-container'>
            <img className='solid-logo' src={logoS}  alt='logo AM'/>
        </div>

    );
};

export default Logo;