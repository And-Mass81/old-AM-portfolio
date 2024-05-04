import React from 'react';
import { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFigma, faHtml5, faJsSquare, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['Q', 'u', 'i', ' ', 's', 'u', 'i', 's', '-', 'j', 'e', '?']}
                            idx={15}
                        />
                    </h1>
                    <p>En tant que web designer j'ai acquis une bonne expérience dans la conception de sites internet de A à Z (UX/UI, charte graphique, gestion et SEO) à l'aide de CMS tels que Wordpress et Prestashop, mais ma curiosité et mon envie de m'améliorer professionnellement, m'ont m'a amené à suivre une formation d'intégrateur web.
                        Grâce à la formation openclassroms j'ai pu approfondir mes connaissances en html, css, javascript et également acquérir de nouvelles compétences avec des frameworks comme React (oui, je sais déjà, c'est une librairie !).
                    </p>
                    <p>Je m'implique dans chaque projet avec responsabilité, enthousiasme et mettant à disposition une expérience variée en communication acquise avec 6 ans du média audiovisuel et avec plus de 5 ans de E-Commerce dans la partie commerciale.
                        Ce qui m’a permis d’acquérir de très bonnes compétences telles que l’organisation, l’écoute, le conseil ainsi que des qualités relationnelles importantes.
                    </p>
                    <p>Passionné par le web, j'aime accompagner le client à transformer le besoin de son entreprise en une solution digitale construite avec les technologies les plus adaptées au projet.
                        Je propose également des compétences multiculturelles que j'ai acquises en ayant travaillé dans différents pays d'Amérique du Sud, aux États-Unis et en France.
                    </p>
                </div>
                <div className='stage-cube-count'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#fff" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#fff" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#fff" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#fff" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faFigma} color="#fff" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faWordpress} color="#fff" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type='line-scale-pulse-out'/>
        </>
    );
};

export default About;