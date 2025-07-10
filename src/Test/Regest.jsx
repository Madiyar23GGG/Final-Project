import { useState } from "react";
import "./Login.css"


function Regest() {

    const [isLogeding, setLogin] = useState(false)
    const [Register, setregist] = useState(false)
    const [Good, setbagin] = useState(false)
     const[guest, setGuest] = useState(false)

    
    

    return(
        <div>
            <div style={{display : isLogeding ||Register || guest?  'none' : 'block'}}>
                <button onClick={() => {setLogin(!isLogeding)}} className="Button1">Login</button><br /><br />
                <button className="Button2" onClick={()=> setGuest(!guest)}>Login as Guest</button>
            </div>


            <div style={{display :  !isLogeding||Register || guest ?  'none' : 'block'}} className="div2">
                <h1>Login</h1>
                <input type="text" /><br /><br />
                <input type="password" /><br /><br />

                <button onClick={() => {alert("Invalid credintials")}} className="button3">Login </button><br /><br />
                <button onClick={() => {setregist(!Register)}} className="button4" >Register</button>
            </div>


            <div style={{display : !Register ?   'none' : 'block'}} className="div2">
                <h1>Register</h1>
                <input type="text" /><br /><br />
                <input type="text" /><br /><br />
                <input type="password" /><br /><br />

                <button className="button3">Register </button>
            </div>
            <div style={
                {
                    display: !guest ? 'none' : 'block'
                }
            }>
                <h1>Welcome, Guest</h1>
                <button>Log Out</button>
            </div>



        </div>
    )





}

export default Regest
