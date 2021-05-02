import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollHandler = () => {
        window.scrollTo(500, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, []);

    return (
        <footer>
            <Container className="text-center">
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
                <p>
                    Designed and Developed by {" "}
                    <a
                        href="https://github.com/SohelIslamImran"
                        target="_blank"
                        rel="noreferrer">
                        Sohel Islam Imran
                    </a>
                </p>
                <p>Copyright © {new Date().getFullYear()}, All Rights Reserved</p>
            </Container>
            <div className="back-to-top">
                <Button variant="dark" onClick={scrollHandler} title="Back to Top" className={scrolled ? "d-block" : ""}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </Button>
            </div>
        </footer>
    );
};

export default Footer;