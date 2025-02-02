import React from 'react'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
