import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Fade from 'react-reveal/Fade';
import swal from 'sweetalert';
import './Contact.css';
import mailSent from '../../images/Mail-sent.svg';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        emailjs.send('gmail', 'portfolio_template', data, 'user_UhuudhC7XpS5QUo7xDWsT')
            .then((res) => {
                if (res.text === "OK") {
                    swal("Thank you!", "Your message was sent successfully.", "success");
                    reset();
                    return;
                }
                swal("Sorry!", "Something went wrong. Please try again later", "error");
            }, (err) => swal("Sorry!", "Something went wrong. Please try again later", "error"));
    };

    return (
        <section className="contact-form py-5">
            <Container>
                <Fade bottom duration={3000} distance="50px">
                    <h2 className="text-center">Get In Touch</h2>
                    <Row>
                        <Col className="text-center">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <h6>Call Me</h6>
                            <a href="tel:+8801910820976">+8801910820976</a>
                        </Col>
                        <Col className="text-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <h6>Location</h6>
                            <a
                                href="https://goo.gl/maps/QkBTHYCkunFxyoRf9"
                                target="_blank"
                                rel="noreferrer">
                                South Manda, Dhaka - 1214
                        </a>
                        </Col>
                        <Col className="text-center">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h6>Email</h6>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=sohelislamimran@gmail.com"
                                target="_blank"
                                rel="noreferrer">
                                sohelislamimran@gmail.com
                        </a>
                        </Col>
                    </Row>
                </Fade>
                <Row className="align-items-center">
                    <Col md={6} className="order-2 order-md-1">
                        <Fade left duration={3000} distance="50px">
                            <div className="text">
                                <p>I'd Love to hear from you. Whether you have a question or just want to say Hi, feel free to drop a message. I'll try my best to get back to you!
                            </p>
                            </div>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="email"
                                        {...register("email", { required: true })}
                                        placeholder="Your Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        type="text"
                                        {...register("message", { required: true })}
                                        placeholder="Your Message" />
                                </Form.Group>
                                <Button variant="danger" type="submit" size="lg" block>
                                    Send Message
                            </Button>
                            </Form>
                        </Fade>
                    </Col>
                    <Col md={6} className="order-1 order-md-2">
                        <Fade right duration={3000} distance="50px">
                            <Image src={mailSent} fluid />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;