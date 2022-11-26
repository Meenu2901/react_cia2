import { fontFamily } from '@mui/system';
import React, { useState } from 'react'
import "./cia2.css"

export default function DropDown() {
    const [color,setColor] = useState("");
  return (
    <div>
        
    <div className="meee">
        <h1 style={{color:"white",fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>COLOR PICKER</h1>
    <select onChange={e=>setColor(e.target.value)}  style={{"backgroundColor":color,width:"200px",padding:"20px"}}>
        <option value="select">DROPDOWN BOX</option>
    <option value="lime">Lime</option>
    <option value="#E6E6FA">Lavender</option>
    <option value="crimson">Crimson</option>
    <option value="lime">Lime</option>
    <option value="darkblue">Darkblue</option>
    <option value="teal">Teal</option>
   
    <option value="rebeccapurple">Rebecca Purple</option>
    <option value="ghostwhite">Ghost White</option>
    <option value="aquamarine">Aqua Marine</option>
    <option value="#f0f8ff">Alice Blue</option>

    </select>
    <div onChange={e=>setColor(e.target.value)}  style={{"backgroundColor":color,width:"200px",padding:"20px",top:"100px"}} className="des">

    </div>
    
    </div></div>
  )
}