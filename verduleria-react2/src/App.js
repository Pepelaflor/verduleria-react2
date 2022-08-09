import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Checkout from './pages/Checkout';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <header className="App-header">
        <Navbar/>
        </header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<Products/>}/>
          <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
