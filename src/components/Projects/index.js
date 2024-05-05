import React, { useEffect, useState } from "react";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import projectsData from '../../data/projects.json'

const Projects = () => {
    const [letterClass, setletterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 3000)
    }, [])

    const renderProjects = (projects) => {
        return (
            <div className='images-container'>
                {
                    projects.map((proje, idx) => {
                        return (
                            <div className='image-frame' key={idx}>
                                <img
                                    src={proje.cover}
                                    alt={proje.title}
                                    className='project-image'
                                />
                                <div className="content">
                                    <p className="title">{proje.title}</p>
                                    <h4 className="description">{proje.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(proje.url)}
                                    >View</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
        <div className="container projects-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={15}
                />
            </h1>
            <div>{renderProjects(projectsData.project)}</div>
        </div>
        <Loader type='line-scale-pulse-out' />
    </>
    );
};

export default Projects;