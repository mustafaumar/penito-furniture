import React from 'react'
import HeroSection from './components/layout/Header/HeroSection';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';
import Navigation from './components/layout/Header/Navigation';

const App = () => {
  return (
    <div className='font-body'>
      <Navigation/>
      <HeroSection/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App
