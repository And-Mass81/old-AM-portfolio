import React, { useEffect, useState } from 'react';
import Redmap from '../../assets/images/mapRed.png'
import './index.scss';
import Loader from 'react-loaders';
import AnimatLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {

    const [letterClass, setletterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm('service_lgfname','template_eyp7b4a', form.current, 'RMuOpzQCz9WW29FtI')
        .then(
          () => {
            alert('Message envoyé avec succès!')
            window.location.reload(false)
          },
          () => {
            alert('Erreur, veuillez réessayer.')
          }
        )
    }
  

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'e', 'z', ' ', 'm', 'o', 'i']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        J'ai hâte d'en apprendre davantage sur votre projet. Prêt à commencer?, prenons un café ensemble!
                    </p>
                    <div className='contact-form'>
                     <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nom" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Sujet"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVOYER" />
                </li>
              </ul>
            </form>
                    </div>
                </div>

                <div className='info-map'>
                 Andrés Massa,
                 <br/>
                 France,
                 <br/>
                42000, Saint-Etienne
                <br/>
                 <span>andmass10@gmail.com</span>
                </div>
                <div className="map-wrap">
                <img className='map-contact' src={Redmap}  alt='logo AM'/>
                </div>
            </div>
            <Loader type='line-scale-pulse-out' />
        </>
    );
};

export default Contact;