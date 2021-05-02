import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;