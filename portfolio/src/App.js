import './App.css';
import Contact from './components/Contact';
// import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
  <div className='bg-[url("https://i.pinimg.com/564x/ce/85/7a/ce857aeeedf9046b3a3fdc9241ee05a9.jpg")] bg-cover' >
    <NavBar />
    <Header />
    <Skills />
    <Projects />
    <Contact />
  </div>
  );
}

export default App;

// className='bg-gradient-to-tr from-indigo-200 via-orange-100 to-sky-100 '
// className='bg-[url("https://i.pinimg.com/564x/ce/85/7a/ce857aeeedf9046b3a3fdc9241ee05a9.jpg")] bg-cover'


// next idea: figure out how to fade in sections and make projects a tab list.
// another idea: make videos responsive to mobile