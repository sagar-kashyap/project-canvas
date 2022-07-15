import React from 'react';
import './App.css';
import CardRow from "./cardRow.jsx";
import Panzoom from "panzoom";



function App() {
  return (
    <div>
    <div className='header'>
      Drag and Explore my gallery
    </div>
    
    <div className='container'>
    <CardRow />
    
    </div>
    
    </div>
  );
}



export default App;

document.addEventListener('readystatechange', event => { 

  
  if (event.target.readyState === "complete") {
    var element = document.querySelector(".container");

    Panzoom(element, {
        minZoom: 1,
        maxZoom: 1
    });
  }
});