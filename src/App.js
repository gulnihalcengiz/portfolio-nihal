import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    
      

      <main className='main'>
      <Header />
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      <ScrollUp />
      </main>

      
    
  );
}

export default App;
