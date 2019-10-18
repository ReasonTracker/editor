import React from 'react';
import './App.css';
import { newId } from '@reasonscore/core';

function App() {
  alert(newId());

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.....
        </p>
    </div>
  );
}

export default App;
