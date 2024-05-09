import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import AnimatLetters from '../AnimatedLetters/index';
import Logo from './Logo'
import Loader from 'react-loaders';



const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const firstNameArray = ['n', 'd', 'r', 'é', 's']
  const lasttNameArray = ['a', 's', 's', 'a']
  const jobArray = ['I', 'n', 't', 'e', 'g', 'r', 'a', 't', 'e', 'u', 'r', ' ', 'W', 'e', 'b']

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
        <span className={`${letterClass} _8`}>i,</span>
        <br />
        <span className={`${letterClass} _9`}>J</span>
        <span className={`${letterClass} _10`}>e</span>
        <span className={`${letterClass} _11`}> </span>
        <span className={`${letterClass} _12`}>s</span>
        <span className={`${letterClass} _13`}>u</span>
        <span className={`${letterClass} _14`}>i</span>
        <span className={`${letterClass} _15`}>s</span>
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
      <Logo />
    </div>
    <Loader type='line-scale-pulse-out'/>
    </>
  );
};

export default Home;