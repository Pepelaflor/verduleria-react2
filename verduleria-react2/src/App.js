import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';




function App() {
  return (
    <BrowserRouter>
    
      <header className="App-header">
      <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos' element={<h1>contacto</h1>}/>
        <Route path='/productos:id' element={<h1>productos</h1>}/>
        <Route path=''/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
