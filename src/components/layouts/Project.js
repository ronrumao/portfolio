import React from 'react'
import { Accordion, Card } from "react-bootstrap";

const Project = ({ project }) => {
    return (
        <>
            <Accordion defaultActiveKey="1" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <Card className="work-container">
                            <Card.Title>
                                {project.name}
                            </Card.Title>
                            <Card.Subtitle>
                                {project.summary.domain}
                            </Card.Subtitle>
                            <Card.Body>
                                {project.summary.short} <br />
                                {project.summary.detailed.map((line) =>
                                    <>
                                        {line} <br />
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </Accordion.Header>
                    <Accordion.Body>
                        {project.skills && project.skills.map((sk) =>
                            <>
                                <Card.Subtitle>{sk.type}</Card.Subtitle>
                                <Card.Text>{sk.list.join(', ')}</Card.Text>
                            </>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Project
