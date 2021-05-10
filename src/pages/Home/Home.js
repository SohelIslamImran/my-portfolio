import React from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';

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