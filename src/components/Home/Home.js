import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <About />
            <Projects />
        </div>
    );
};

export default Home;