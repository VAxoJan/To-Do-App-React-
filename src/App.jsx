import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainInputStyled from './components/Input/MainInputStyled';
import './responsive/responsive.css'
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <div className='mainMob'>
      <DarkMode/>
      <div className='middle'>
         <Header/>
         <MainInputStyled/>
         <input className='checkBox' type="checkbox"/>
      </div>
    </div>
  )
}

export default App;