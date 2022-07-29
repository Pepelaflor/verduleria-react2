import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <div className='main-container'>
        <ItemListContainer/>
      </div>
  
    </div>
  );
}

export default App;
