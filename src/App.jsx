import React, { useState, useEffect } from "react";
import axios from "axios";

function App () {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState('')
  const [response, setResponse ] = useState('')
  const [text, setText] = useState('')
  const [red, setRed] = useState('')
  const [textt, setTextt] = useState('')

  function send() {
    axios.post(`https://683ffb195b39a8039a5658ce.mockapi.io/users`,{

          email:email,
          password:password
    })
    .then(res => setResponse('Өтінім жіберілді' + res.data))
    }

function setchotam() {
        axios.get(`https://683ffb195b39a8039a5658ce.mockapi.io/users`,{

          email:email,
          password:password
    })
    .then(res => setRed('Өтінім алынды'+' '+ res.data))
    }



        useEffect(()=>{
         setTextt('Загруска...')
         console.log(red)
      setTimeout(() => {
              alert(red, email)
                       setTextt('Өтінім алынды')


      }, 4000);
    },[red])



    useEffect(()=>{
         setText('Загруска...')
         console.log(response)
      setTimeout(() => {
              alert(response)
                       setText('Өтінім жіберілді')


      }, 4000);
    },[response])

    return(
      <div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={send}>submit</button>
        {text} <br/><br/> 
        <button onClick={setchotam}>get</button>
        {textt}
      </div>
    )

}

export default App;
