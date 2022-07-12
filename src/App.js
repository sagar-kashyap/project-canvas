import React from 'react';
import './App.css';
import CardRow from "./cardRow.jsx";


function App() {
  return (
    <div>
    <div className='header'>
      Explore my gallery
    </div>
    <div className='container'>
    <CardRow />
    
    </div>
    </div>
  );
}

export default App;
