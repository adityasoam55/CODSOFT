import React from 'react'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AllProducts from './components/AllProducts'
import CategoryList from './components/CategoryList'
import CategoryProducts from './components/CategoryProducts'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/productdetails/:id" element={<ProductDetails  />} />
        <Route path="/categorylist/" element={<CategoryList />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
