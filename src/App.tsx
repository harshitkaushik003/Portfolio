import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';



function App() {
  return (
    <main className='w-screen h-screen relative'>
      <Navbar/>
      <Header/>
      <Projects/>
      <Experience/>
    </main>
  );
}

export default App;
