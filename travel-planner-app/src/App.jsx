import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ArrowButton() {
  return (
    <a href="#target-section">
      <button>→</button>
    </a>
  );
}

function App() {
  return (
    <div>
      <h1>GUARDIAN</h1>
      <p>Wander often plan just enough to brag later</p>
      <ArrowButton />
    </div>
  );
}

export default App
