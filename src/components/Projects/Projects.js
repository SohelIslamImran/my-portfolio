import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, CardDeck, Container } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <Container>
                <h2 className="title text-center mb-5">Some of <span>My Projects</span></h2>
                <CardDeck>
                    <Card>
                        <div className="p-2 pj-img">
                            <Card.Img variant="top" src="https://i.ibb.co/2Z7G1nc/Gerez.png" />
                        </div>
                        <Card.Body>
                            <Card.Title>Gerez - Car Repair Services</Card.Title>
                            <Card.Text>
                                A full-stack single-page car repair web app where people can take and book services. Login system with firebase and private routes. Dashboard for users and admins where admins can do CRUD operations and users can give reviews and monitor their booking list.
                            </Card.Text>
                            <div className="technology">
                                <span>React.js</span>
                                <span>React Bootstrap</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Stripe.js</span>
                                <span>Firebase Authentication</span>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a
                                href="https://my-gerez.web.app"
                                className="btn btn-danger btn-sm mr-3"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon title="Visit Website" icon={faExternalLinkAlt} /> Live Link
                            </a>
                            <a
                                href="https://github.com/SohelIslamImran/gerez"
                                className="btn btn-danger btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div className="p-2 pj-img">
                            <Card.Img variant="top" src="https://i.ibb.co/X7YFcrx/Electro.png" />
                        </div>
                        <Card.Body>
                            <Card.Title>Electro Shop</Card.Title>
                            <Card.Text>
                                A full-stack single-page e-commerce electronic web app. Login system with firebase and private routes. Users can buy products and see their purchase records on the order page. Admin panel, where admin can do CRUD operations.
                            </Card.Text>
                            <div className="technology">
                                <span>React.js</span>
                                <span>React Bootstrap</span>
                                <span>Node.js</span>
                                <span>Firebase Authentication</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a
                                href="https://electro-shop-mern.web.app"
                                className="btn btn-danger btn-sm mr-3"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon title="Visit Website" icon={faExternalLinkAlt} /> Live Link
                            </a>
                            <a
                                href="https://github.com/SohelIslamImran/electro-shop"
                                className="btn btn-danger btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <div className="p-2 pj-img">
                            <Card.Img variant="top" src="https://i.ibb.co/4Z64SSh/E-Ticket.png" />
                        </div>
                        <Card.Body>
                            <Card.Title>E-Ticket</Card.Title>
                            <Card.Text>
                                A single-page e-tickets booking web app with firebase login system. There is a dynamic Google map on the booking page.
                        </Card.Text>
                            <div className="technology">
                                <span>React.js</span>
                                <span>React Bootstrap</span>
                                <span>Google Map</span>
                                <span>Firebase Authentication</span>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <a
                                href="https://e-tickets-booking.web.app"
                                className="btn btn-danger btn-sm mr-3"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon title="Visit Website" icon={faExternalLinkAlt} /> Live Link
                            </a>
                            <a
                                href="https://github.com/SohelIslamImran/e-ticket"
                                className="btn btn-danger btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <div className="text-center mt-5">
                    <Button variant="outline-danger">See More</Button>
                </div>
            </Container>
        </section>
    );
};

export default Projects;