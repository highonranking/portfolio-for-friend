import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Journ from './components/Journey';
import Certifications from './components/Certifications';
import Virtual from './components/Virtual';
import Projects from './components/Projects';
import { Current } from './components/Current';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-black">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Journ/>
      <Certifications/>
      <Virtual/>
      <Projects/>
      <Current/>
      <Footer/>
    </div>
  );
}

export default App;
