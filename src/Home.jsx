import { useState } from "react"
import './Home.css'

function Home() {

    const[name, setName] =  useState('')
    const[email, setemail]= useState('')
    const[comment, setComment] =  useState('')
    const[error, setError] =useState('')
    

    function handleSubm(e){
        e.preventDefault()
        if(!/^[A-Za-z]+$/.test(name) ){
            setError('Текст әріп болуы тиіс')
        } else if(!email.includes('@')){
            setError('Емайл дұрыс емес')
        } else if(comment.length<20){
            setError('20 таңбадан кем болмауы тиіс ')
        }
             else{
                setError('')
                alert('Сәтті тіркелді')
            }
        
    }

    return(
        <div>
            <form style={{displey: !error ? 'none':'block'}} onSubmit={handleSubm}>
            <h1>Кері байланыс формасы</h1><br />
            <div className="div1">
            <label>Name</label><br />
            <input type="name" onChange={(e)=> setName(e.target.value)} required/> <br />
            <label>Email</label><br />
            <input type="email" onChange={(e) => setemail(e.target.value)} required/> <br />
            <label>Пікіріңіз:</label><br />
            <input className="input3" type="text"  onChange={(e)=> setComment(e.target.value)} required /> <br />
            <button type="submit">Жіберу</button><br />
            <p style={{color : 'red'}}>{error}</p>
            </div>

        </form>

{/* 
            <div  style={{
                displey: error ? 'none':'block'
            }}>
             <h1>Кері байланыс формасы</h1>
             <p>Рәхмет сіздің пікіріңіз маңыздв</p>
            </div> */}



        </div>

        
        
    );

}

export default Home;