import React, { useState } from 'react'
import {send} from "../socketApi";


function Palette({activeColor}) {
    const [color,setColor] = useState('');

    const handleColor = (e) =>{
        setColor(e.target.value)
    }
  return (
    <div className='palette'>
        <input type="color" value={activeColor} onChange={handleColor}/>
        <button onClick={() => send(color)}>Click</button>
        {color}
        
    </div>
  )
}

export default Palette