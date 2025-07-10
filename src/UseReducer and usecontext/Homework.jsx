// import {useContext} from "react";
// import { createContext, useReducer } from "react";
import { useReducer } from "react"
import './Style.css'


function Homework() {
     const[gred, dispatch] = useReducer(reduse, '')

     function reduse(gred, state){
        if(state== 'green'){
            return  state='Сәтті'
        }else if(state== 'red'){
            return state="Қате!"
        }else if(state== 'net'){
            return state="  "
        }else{
            return" "
        }
     }

    return(
        <div>
            <div className="div1">
                <h1>Хабарлама жүйесі</h1>
                <p>{gred}</p>
                <button className="button1" onClick={()=> dispatch('green')}>Сәтті хабарлама</button>    
                <button className="button2" onClick={()=> dispatch('red')}>Қате хабарлама</button>
                <button className="button3" onClick={()=> dispatch('net')}>Тазарту</button>
            </div>
        </div>
    )
}

export default Homework;
