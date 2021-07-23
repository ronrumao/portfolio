import React from 'react'
import Project from '../layouts/Project'
import { section3Title, profile } from '../../profile'
import { Accordion, Card } from "react-bootstrap";

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aosnce="true" className="third">
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                <div className="row">
                    {profile.work.experience && profile.work.experience.map((exp) =>
                        <Card.Body>
                            <Card.Title>
                                {exp.place}
                            </Card.Title>
                            <Card.Subtitle>
                                {exp.designation}, {exp.period.start} - {exp.period.end}
                            </Card.Subtitle>
                            <Card.Text>
                            <i class="fa fa-star-o" aria-hidden="true"></i> {exp.summary.detailed.line1} <br />
                            <i class="fa fa-star-o" aria-hidden="true"></i> {exp.summary.detailed.line2} <br />
                            <i class="fa fa-star-o" aria-hidden="true"></i> {exp.summary.detailed.line3} <br />
                            <i class="fa fa-star-o" aria-hidden="true"></i> {exp.summary.detailed.line4} <br />
                            <i class="fa fa-star-o" aria-hidden="true"></i> {exp.summary.detailed.line5} <br />
                            <i class="fa fa-star-o" aria-hidden="true"></i> {exp.summary.detailed.line6} <br />
                            <i class="fa fa-star-o" aria-hidden="true"></i> {exp.summary.detailed.line7}
                            </Card.Text>

                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <Card.Subtitle>
                                            Projects
                                    </Card.Subtitle>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            {exp.projects.map((project) =>
                                                <>
                                                    <Project project={project} />
                                                </>
                                            )}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Card.Body>
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
