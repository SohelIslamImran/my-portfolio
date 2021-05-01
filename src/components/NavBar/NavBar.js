import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            className={(isSticky||isCollapsed) ? "sticky" : "py-3"}>
            <Navbar.Brand as={Link} to="/">Sohel</Navbar.Brand>
            <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed)} aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                    <Nav.Link
                        as={Link}
                        to="/"
                        className="mr-md-5"
                        onClick={() => window.scrollTo(500, 0)}>
                        Home
                    </Nav.Link>
                    <Nav.Link className="mr-md-5" href="#about">About</Nav.Link>
                    <Nav.Link className="mr-md-5" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="mr-md-5" href="#blog">Blog</Nav.Link>
                    <Nav.Link className="mr-md-5" href="#contact">Contact</Nav.Link>
                    <Nav.Link className="mr-md-5" href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;