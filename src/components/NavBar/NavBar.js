import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const { pathname } = useLocation();
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
            fixed="top"
            className={(isSticky || isCollapsed) ? "sticky pb-0" : "py-3"}>
            <Navbar.Brand as={Link} to="/" className="ml-md-3 py-0" onClick={() => window.scrollTo(500, 0)}>
                <span> &lt; Sohel /&gt; </span>
            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed)} aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                    <Nav.Link
                        as={Link}
                        to="/"
                        className={pathname === "/" ? "active mr-md-5" : "mr-md-5"}
                        onClick={() => window.scrollTo(500, 0)}>
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/about"
                        className={pathname === "/about" ? "active mr-md-5" : "mr-md-5"}>
                        About
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/projects"
                        className={pathname === "/projects" ? "active mr-md-5" : "mr-md-5"}>
                        Projects
                        </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/blog"
                        className={pathname === "/blog" ? "active mr-md-5" : "mr-md-5"}>
                        Blog
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                        className={pathname === "/contact" ? "active mr-md-5" : "mr-md-5"}>
                        Contact
                    </Nav.Link>
                    <Nav.Link
                        className="mr-md-5"
                        href="https://drive.google.com/u/0/uc?id=194Bn_iu-ngZgnbHeTz7yHZy9BvmCLh3A&export=download">
                        <Button variant="danger" size="sm">
                            <FontAwesomeIcon icon={faFileDownload} className="mr-1" /> Resume
                        </Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;