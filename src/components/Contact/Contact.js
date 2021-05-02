import emailjs from 'emailjs-com';
import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        emailjs.send('gmail', 'portfolio_template', data, 'user_UhuudhC7XpS5QUo7xDWsT')
            .then((res) => {
               console.log(res.text);
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
                <Row className="align-items-start">
                    <Col md={6} className="order-2 order-md-1">
                        <div className="section-title">
                            <h2>Hire Me.</h2>
                            <p>I am available for freelance work. Connect with me via phone: <a href="tel:+8801910820976">01910820976</a> or email:
                            <a href="mailto:admin@example.com"> admin@example.com</a> </p>
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
                            <Button variant="danger" type="submit" size="lg">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} className="order-1 order-md-2">
                        <Image src="https://i.ibb.co/gZSpVMC/bewakoof-com-official-205182.jpg" fluid />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;