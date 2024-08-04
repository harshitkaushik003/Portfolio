import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import { Bottom } from './Components/Bottom';



function App() {
  return (
    <main className='w-screen h-screen relative overflow-x-visible'>
      <Navbar/>
      <Header/>
      <Projects/>
      <Bottom/>
    </main>
  );
}

export default App;
