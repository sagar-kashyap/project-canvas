import React from 'react';
import './App.css';
import CardRow from "./cardRow.jsx";
import Panzoom from "panzoom";

var element = document.querySelector(".container");

Panzoom(element, {
    minZoom: 1,
    maxZoom: 1
});

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
