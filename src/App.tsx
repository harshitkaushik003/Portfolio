import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Projects from './Components/Projects';



function App() {
  return (
    <main className='w-screen h-screen relative overflow-x-hidden lg:overflow-x-visible'>
      <Navbar/>
      <Header/>
      <Projects/>
      <Experience/>
    </main>
  );
}

export default App;
