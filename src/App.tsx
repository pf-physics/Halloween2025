import React from 'react';
import './App.css';
import './firebaseconfig';
import CodeHandler from './CodeHandler/code-handler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        dropdown
      </header>
      <div className="app-content">
        <CodeHandler/>
      </div>
    </div>
  );
}

export default App;
