import React, { useState } from "react";
import './Style.css'
import axios from "axios";

function App() {

    const [klick, setKlick]= useState('')
    const [answar, setAnswar]= useState('')
function Ass() {
    axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
    {
        const:[{parts:[{text: klick}]}]
    },
    {
        headers:{'Content-type': 'application/json'}
    }
    )
    .then(response=> {
        setAnswar(response.data.candidates?.[0]?.context?.parts?.[0]?.text)
        console.log(response.data)
    })
    
}




 return(
    <div>
            <header>
    <div class='text-center  shadow p-4   ml-55  mr-55  pb-20   text-2xl'>

                <h1 class='text-blue-500 text-4xl'>Gemeni AI Сұрақ-Жауап</h1><br />
        <input type=""  onChange={(e)=> setKlick(e.target.value) } class=' border-blue-400  ' placeholder="Сұрағыңызды жазыңыз..." /><button onClick={Ass} class='bg-blue-400  '>Жіберу</button>

    </div>
    </header>

<div>
        <p class='text-white  ml-250 '>Ваш запрос:{klick}</p><br /><br />
        <p class='text-white  ' > Атвет:{answar}</p>
</div>



    </div>

 )

}
export default App;