import { useState } from 'react'
import './App.css'
import header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
 

  function app () {
  return (
    <div className='App'>
      <header />
      <MainContent />
      <Footer />  

    </div>
  );
 }
 export default app