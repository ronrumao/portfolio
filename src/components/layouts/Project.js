import React from 'react'
import { Accordion, Card } from "react-bootstrap";

const Project = ({ project }) => {
    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Card.Title>
                        {project.name}
                    </Card.Title>
                    <Card.Subtitle>
                        {project.summary.domain}
                    </Card.Subtitle>
                    <Card.Text>
                        {project.summary.short} <br />
                        {project.summary.detailed.line1} <br />
                        {project.summary.detailed.line2}
                    </Card.Text>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {project.skills && project.skills.map((sk) =>
                            <>
                                <Card.Subtitle>{sk.type}</Card.Subtitle>
                                <Card.Text>{sk.list.join()}</Card.Text>
                            </>
                        )}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Project
