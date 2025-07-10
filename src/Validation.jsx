import { useState } from "react"

function Validation() {
    const[email, setemail]= useState('')
    const[password, setPasword]= useState('')
    const[error, setError] =useState('')
    const[name, setName] =  useState('')
    function handleSubm(e){
        e.preventDefault()
        if(!/^[A-Za-z]+$/.test(name) ){
            setError('Текст әріп болуы тиіс')
        } else if(!email.includes('@')){
            setError('Емайл дұрыс емес')
        } else if(password.length<6)
            setError('Құпия сөз 6-әріптен тұру қажет')
            else{
                setError('')
                alert('Сәтті тіркелді')
            }
        
    }

    return(
        <form onSubmit={handleSubm}>
            <label>Email</label>
            <input type="name" onChange={(e)=> setName(e.target.value)} required/>
            <input type="email" onChange={(e) => setemail(e.target.value)} required/>
            <label>password</label>
            <input type="password"  onChange={(e)=> setPasword(e.target.value)} required />
            <button type="submit">Submit</button>
            <p style={{color : 'red'}}>{error}</p>
        </form>
        
    );
}

export default Validation;