import React from 'react'
import Skills from '../layouts/Skills'
import { section2title, profile } from '../../profile'

const About = () => {
    return (
        <div id="about" className="work-container">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <div className="col-12 d-none d-md-block col-md-2 Photo" id="not-dark2"></div>
                <div className="col-12 offset-md-1 col-md-9 about">
                    <div className="About-title-box">
                        <h1 id="About" className="red-line">{section2title}</h1>
                    </div>
                    <p className="lead">
                        {profile.personal.bio.short}
                    </p>
                </div>
            </div>
            <div id="Skills">
                <div className="row d-flex justify-content-center skills">
                    {profile.skills.skillsBar.map((x) =>
                        <Skills faClass={x.faClass} label={x.name} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default About
