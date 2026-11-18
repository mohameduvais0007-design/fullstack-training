import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'  
import Header from './components/header.jsx'
import Buttons from './components/button.jsx'
import Profile from './components/profile.jsx'
import Professor from './components/professor.jsx'


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Buttons />
      <Profile />
      <Professor />
      </div>    
     )


    
}
export default App