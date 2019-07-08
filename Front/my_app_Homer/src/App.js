import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp'
import { lstat } from 'fs';

function App() {
  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
        <SignUp/>
    </div>
  );
}

export default App;
