import { useState } from 'react'
import './RandomColor.css'

function RandomColor() {
    
    
    const[RandomColor, setRandomColor] = useState('')
   
      function change_color(){
         setRandomColor("#" + Math.floor(Math.random()*1000000))
                document.getElementById('div1').style.backgroundColor = RandomColor    
      }
    return (
        <div>
            <div className='div1' id="div1">{RandomColor}</div>
            <button onClick={change_color}>Түсті өзгерту</button>
        </div>
    )

}


export default RandomColor


