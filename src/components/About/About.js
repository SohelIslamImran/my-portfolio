import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <Container className="d-flex align-items-center">
                <Fade bottom duration={3000} distance="50px">
                    <Row>
                        <Col md={5} xs={12} className="d-flex align-items-center">
                            <Image src="https://i.ibb.co/Fb5zbDR/me.png" fluid />
                        </Col>
                        <Col md={7} xs={12} className="d-flex align-items-center">
                            <div>
                                <h1>About Me</h1>
                                <p className="pr-md-4">
                                    I am a MERN-STACK WEB Developer. I am working with React, Node.js and MongoDB.
                                    I also have experience in developing static websites using HTML5, CSS3 and JavaScript (ES6).
                                    I am a quick learner. I believe in hard work and efficiency. That's why I always ready to accomplish any task by working hard. I always focus on learning new technology.
                                    My goal is to become A World-Class Professional Web Developer.
                            </p>
                                <p className="p2">Here are a few technologies I've been working with recently :</p>
                                <div className="skills">
                                    <h5>Frontend</h5>
                                    <ul className="d-flex flex-wrap pl-0">
                                        <li><FontAwesomeIcon icon={faGenderless} /> JavaScript (ES6)</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> React.js</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Redux</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> React Bootstrap</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> HTML5</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> CSS3</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Material UI</li>
                                    </ul>
                                    <h5>Backend</h5>
                                    <ul className="d-flex flex-wrap pl-0">
                                        <li><FontAwesomeIcon icon={faGenderless} /> Node.js</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Express.js</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> MongoDB</li>
                                    </ul>
                                    <h5>Tools</h5>
                                    <ul className="d-flex flex-wrap pl-0">
                                        <li><FontAwesomeIcon icon={faGenderless} /> VS Code</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Git</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Chrome Dev Tool</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Npm & Yarn</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Firebase</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Netlify</li>
                                        <li><FontAwesomeIcon icon={faGenderless} /> Heroku</li>
                                    </ul>
                                </div>
                                <div className="social-links">
                                    <a
                                        href="https://github.com/SohelIslamImran"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/sohelislamimran"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                    <a
                                        href="https://twitter.com/SohelIslamImran"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/SohelIslamImran"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sohelislamimran@gmail.com"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </div>
    );
};

export default About;