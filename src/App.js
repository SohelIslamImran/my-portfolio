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
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Router>
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
          <Blog/>
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
    </Router>
  );
}

export default App;
