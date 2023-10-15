import React from 'react'
import Project from '../layouts/Project'
import { section3Title, profile } from '../../profile'
import { Accordion, Card } from "react-bootstrap";

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aosnce="true" className="work-container">
                <div className="pp-head-line mx-auto text-center">
                    <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                </div>
                <div className="row">
                    {profile.work.experience && profile.work.experience.map((exp) =>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {exp.place}
                                </Card.Title>
                                <Card.Subtitle>
                                    {exp.designation}, {exp.period.start} - {exp.period.end}
                                </Card.Subtitle>
                                <Card.Body>
                                    {exp.summary.detailed.map((line) =>
                                        <>
                                            <i class="fa fa-dot-circle-o" aria-hidden="true"></i> {line} <br />
                                        </>
                                    )}
                                </Card.Body>

                                <Accordion defaultActiveKey="1" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            Projects
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {exp.projects.map((project) =>
                                                <>
                                                    <Project project={project} />
                                                </>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
