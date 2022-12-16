import './App.css';
import Contact from './components/Contact';
// import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {

  return (
  <div>
    <NavBar />
    <Header />
    <Resume />
    <Skills />
    <Projects />
    <Contact />
  </div>
  );
}

export default App;
