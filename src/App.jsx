import React from 'react'
import './style/input.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'





function App() {
  return (
    <div className='bg-slate-800'>
        <Navbar />
        <Main />
        <About />
        <Footer/>

    </div>
  )
}

export default App