import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import AnimatLetters from '../AnimatedLetters/index';
import logoS from  '../../assets/images/logoOpt.png';
import Loader from 'react-loaders';
import { PowerGlitch } from 'powerglitch'




const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const firstNameArray = ['n', 'd', 'r', 'é', 's']
  const lasttNameArray = ['a', 's', 's', 'a']
  const jobArray = ['I', 'n', 't', 'e', 'g', 'r', 'a', 't', 'e', 'u', 'r', ' ', 'W', 'e', 'b']
  PowerGlitch.glitch('.logo-container')

  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _2`}>o</span>
        <span className={`${letterClass} _3`}>l</span>
        <span className={`${letterClass} _4`}>a,</span>
        <br />
        <span className={`${letterClass} _5`}>J</span>
        <span className={`${letterClass} _6`}>e</span>
        <span className={`${letterClass} _7`}> </span>
        <span className={`${letterClass} _8`}>s</span>
        <span className={`${letterClass} _9`}>u</span>
        <span className={`${letterClass} _11`}>i</span>
        <span className={`${letterClass} _12`}>s</span>
          <span className='letA'>A</span>
          <AnimatLetters letterClass={letterClass}
            strArray={firstNameArray}
            idx={16}
          />
          <span className='word-block'>
          <span className='letM'>M</span>
          <AnimatLetters letterClass={letterClass}
            strArray={lasttNameArray}
            idx={21}
          />
          </span>
          
          <AnimatLetters letterClass={letterClass}
            strArray={jobArray}
            idx={27}
          />
        </h1>
        <h2>Forntend / React / Webdesign</h2>
        <Link to="/contact" className='flat-button'>ME CONTACTER</Link>
      </div>
      <div className='logo-container'>
            <img className='solid-logo' src={logoS}  alt='logo AM'/>
        </div>
    </div>
    <Loader type='line-scale-pulse-out'/>
    </>
  );
};

export default Home;