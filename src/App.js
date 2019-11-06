import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Electron Boilerplate</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link className="App-link" to="/about">Link to the About Page</Link>
      </header>
      
    </div>
  );
}

export default App;
