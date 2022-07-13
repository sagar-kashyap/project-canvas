import React from "react";

import Pics from "./pics";
import './App.css';



function addLink(link){
    return(
        
        <div key={link.id} className="card" style={{background:`url(${link.link})`}}></div>
        
    )
}

function cardRow(){
    return(
        <div className='row'>
            {Pics.map(addLink)}
        </div>
    )
}
export default cardRow;