import React from 'react';
import Toggler from "./Toggler"
import SimpleFormClass from "./SimpleFormClass"
import SimpleFormHooks from "./SimpleFormHooks"
import SimpleFormInputHooks from "./SimpleFormInputHooks"
import './App.css';


function App() {
  return (
    <div className="App">
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHooks />
      <SimpleFormInputHooks />
    </div>
  );
}

export default App;
