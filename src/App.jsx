import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './MainContent'
import Footer from './Footer'
import <UserProfile from './UserProfile'

 
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}