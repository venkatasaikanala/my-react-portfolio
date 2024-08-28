// import logo from './logo.svg';
// import './App.css';

import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import  Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero"; 




function App() {
 
  return ( 
    <main>
    <NavBar/>
    <Hero/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </main>
    );
  
  }

export default App;
