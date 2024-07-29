import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import { Contact } from './Components/Contact';



function App() {
  return (
    <main className='w-screen h-screen relative overflow-x-visible'>
      <Navbar/>
      <Header/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
  );
}

export default App;
