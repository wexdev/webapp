import React from 'react';
import logo from './wexfab_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>	  
    WEX Fab
    </p>
    
    <form id="form_id" method="post" name="myform">
    <label>User Name </label>
    <input type="text" name="username" id="username"/><br/>
    <label>Password </label>
    <input type="password" name="password" id="password"/><br/>
    <input type="button" value="Login" id="submit" onClick="validate()"/>
    </form>
    
    </header>
    </div>
  );
}

export default App;
