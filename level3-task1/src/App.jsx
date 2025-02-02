import React from 'react'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
