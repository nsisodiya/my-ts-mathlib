import React from 'react';
import { calRectangleArea } from 'my-ts-mathlib';
import logo from './logo.svg';
import './App.css';

function App() {
  //var rect1 = { side1: '3', side2: 4 }; This should fail in npm start and npm run build
  var rect1 = { side1: 3, side2: 4 };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Rectangle with sides 3, 4 has area = {calRectangleArea(rect1)}</p>
        {/* <p>Circle with radium 3 has area = {calCircleArea(3)}</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
