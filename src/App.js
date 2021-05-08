import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import NavBar from "./components/NavBar/NavBar";
import Preloader from "./components/Preloader/Preloader";
import Projects from "./components/Projects/Projects";

function App() {
  const [loading, setLoading] = useState(true);

  window.onload = (event) => {
    console.log('page is fully loaded');
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <Router>
      {loading ?
        <Route path="*">
          <Preloader />
        </Route>
        :
        <>
          <Switch>
            <Route path="*">
              <NavBar />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Switch>
            <Route path="*">
              <Footer />
            </Route>
          </Switch>
        </>}
    </Router>
  );
}

export default App;
