import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;