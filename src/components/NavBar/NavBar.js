import React, { useEffect, useState } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
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
            className={(isSticky || isCollapsed) ? "sticky" : "py-3"}>
            <Navbar.Brand as={Link} to="/" className="ml-md-3">
                <Image
                    src="https://lh3.googleusercontent.com/a-/AOh14GiHJqifi7cnDIb1rrSrukfaa7xLmF_yRWgt0WgkUA=s96-c"
                    width="35"
                    height="35"
                    roundedCircle
                    className="d-inline-block align-top mr-2"
                    alt="Profile"
                />
                <p className="d-inline-block m-0">Sohel Islam Imran</p>
            </Navbar.Brand>
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
                    <Nav.Link as={Link} to="/about" className="mr-md-5">About</Nav.Link>
                    <Nav.Link as={Link} to="/projects" className="mr-md-5">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/blog" className="mr-md-5">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="mr-md-5">Contact</Nav.Link>
                    <Nav.Link className="mr-md-5">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;