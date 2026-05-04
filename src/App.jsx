import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkmode, setDarkMode] = useState(false); 
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        toggle={handleToggleDarkMode}
      />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList />

      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
