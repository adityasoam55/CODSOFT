import React, { useState } from 'react'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AllProducts from './components/AllProducts'
import CategoryList from './components/CategoryList'
import CategoryProducts from './components/CategoryProducts'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'
import Signup from './components/Signup'
import CartPage from './components/CartPage'


function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    const newCart = ({ ...cart, [productId]: oldCount + count });

    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  console.log("cart is", cart);

  return (
    <div>
      <NavBar productCount={totalCount}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/productdetails/:id" element={<ProductDetails  handleAddCart={handleAddToCart}/>} />
        <Route path="/categorylist/" element={<CategoryList />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/cartpage/" element={<CartPage cart={cart} updateCart={updateCart}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
