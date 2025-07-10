import { useState } from "react";
import './Register.css'
function Register() {
const [isLoggedig, setLogin ] = useState(false)
const [isRegister, setregister ] = useState (false)


    return(
        <div className="div1">

        <div style={{
            display : isRegister ? 'none' : 'block'
        }}>
        <h1> { isLoggedig ? 'Бастапқы бетке қош келдіңіз' : 'Жүеге кіру керек'} </h1>
        <button onClick={() => {setLogin(!isLoggedig)}}>{isLoggedig? 'Log out' : 'log in'}</button>
        {isLoggedig && <button onClick={() => setregister(!isRegister)}>Register</button>}  
        </div>

        <div className="div2" style={{
            display : !isRegister ?  'none' : 'block' 
            }}>
                <h1>Register Form</h1>
                <input type="text" /><br /><br />
                <input type="pasfort" /><br /><br />

                <button className="button1" onClick={() => setregister(!isLoggedig)}>Register</button>

        </div>

        
        </div>



    )
}

export default Register
