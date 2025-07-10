import React, { useState } from "react";
import axios from "axios";
import './Api.css'

function Api() {
    const[userInput, setUserinput] = useState('')
    const[answer,setAnswer] = useState('')
function acs() {

    axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
        {
            contents:[{parts: [{text: userInput}] }]
        },
        {
            headers: {'Content-type': 'application/json'  }
        },

    )
    .then(response=> {
        setAnswer(response.data.candidates?.[0]?.content?.parts?.[0]?.text)
        console.log(response.data)
    })
}


axios.post(
  'https://api.deepai.org/api/text2img',
  {
    text: 'A dragon flying over mountains'
  },
  {
    headers: {
      'Api-Key': 'YOUR_DEEPAI_API_KEY'
    }
  }
).then(res => {
  console.log(res.data.output_url);
});




return(
    <div class='bg-black pt-10 '>
        <p class='text-white  ml-250 '>Ваш запрос:{userInput}</p><br /><br />
        <p class='text-white  ' > Атвет:{answer}</p>
        
        <div class='bg-black mt-130     p-5'>
           
        
           <input  class='bg-gray-700   text-white   mr-10 ml-90  pl-50 pr-50    rounded-lg '  type="text" onChange={(e)=> setUserinput(e.target.value) && setUserInput(e.target.value) } /> <button class='bg-white  w-10 h-10   rounded-full  ' onClick={acs}><img class=' w-10 h-10    rounded-full' src="data:image/png;base64,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" alt="" /></button>

        </div>

    </div>
)

}
export default Api;





