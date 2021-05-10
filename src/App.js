import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Preloader from "./components/Preloader/Preloader";
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const NavBar = lazy(() => import('./components/NavBar/NavBar'));
const Projects = lazy(() => import('./components/Projects/Projects'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
