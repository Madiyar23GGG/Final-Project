import {useState} from "react"
import axios from "axios"
import React,{useEffect} from "react"

function Fil(){
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [res, setRes] = useState('')
    const [number,setNumber] = useState('')
    const [age, setage] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [image, setimage] = useState('')
    const [password, setPassword] = useState('')



    function Submit(){
        axios.post("https://683ffb195b39a8039a5658ce.mockapi.io/users", {
            name:name,
            age:age,
            gender:gender,
            number:number,
            email:email,
            city:city,
            image:image,
            password:password


        })
        .then(res=>(setRes('Data sent' + res.data)))
    }


    return(
        <div style={{display : !isRegister ?  'none' : 'block' }}>
           <input type="text"  onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
           <input type="number"  onChange={(e)=> setage(e.target.value)} placeholder="Ege"/>
           <input type="text"  onChange={(e)=> setGender(e.target.value)} placeholder="Gender"/>
           <input type="number"  onChange={(e)=> setNumber(e.target.value)} placeholder="Number"/>
           <input type="text"  onChange={(e)=> setPassword(e.target.value)} placeholder="Pasword"/>
           <input type="text"  onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
           <input type="text"  onChange={(e)=> setCity(e.target.value)} placeholder="City"/>
           <input type="text"  onChange={(e)=> setimage(e.target.value)} placeholder="image"/><br />

           <button onClick={Submit}> Атправит</button>
           


           
        </div>



    )


}

export default Fil;