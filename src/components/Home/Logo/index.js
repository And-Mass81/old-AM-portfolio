
import logoS from  '../../../assets/images/logoFull.png';
import './index.scss';




const Logo = () => {

    return (

        <div className='logo-container'>
            <img className='solid-logo' src={logoS}  alt='logo AM'/>
        </div>

    );
};

export default Logo;