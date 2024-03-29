import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';
import Particle from '../Particle/Particle';
import headerImg from '../../images/Developer.svg';
import './Header.css';

const Header = () => {
    return (
        <section className="header">
            <Particle />
            <Container className="d-flex align-items-center">
                <Row>
                    <Col md={7} xs={12} className="d-flex align-items-center">
                        <Fade left duration={2000} distance="40px">
                            <div>
                                <h1>Hi, I’m <br /> Sohel Islam Imran</h1>
                                <h3>
                                    <Typewriter
                                        options={{
                                            strings: [
                                                "JavaScript Developer",
                                                "MERN-Stack Developer",
                                                "Front End Developer",
                                                "React Developer",
                                                "Programmer"
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h3>
                                <p className="pr-md-4">A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p>
                                <a href="https://drive.google.com/u/0/uc?id=194Bn_iu-ngZgnbHeTz7yHZy9BvmCLh3A&export=download">
                                    <Button variant="danger px-4 py-2">
                                        <FontAwesomeIcon icon={faFileDownload} className="mr-1" /> Resume
                                    </Button>
                                </a>
                            </div>
                        </Fade>
                    </Col>
                    <Col md={5} xs={12}>
                        <Fade right duration={2000} distance="40px">
                            <Image src={headerImg || "https://i.ibb.co/Fb5zbDR/me.png"} fluid />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;