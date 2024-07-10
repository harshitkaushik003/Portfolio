import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Page from './components/Page';



function App() {
  return (
    <main className='w-screen h-screen relative'>
      <Navbar/>
      <Header/>
      <Page/>
    </main>
  );
}

export default App;
