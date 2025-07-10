import React from "react";
import './Homstyl.css'
import Home2 from './Home2'
import { useState } from "react";


function Home() {

        const [items, setItems] = useState([]);
    const[name, setName] =  useState('')
    const {search, setSearch, filteredItems} = Home2(items)


   function add(){
    setItems([...items, name

    ])
   }


    return(
        <div className="div2">
            <div className="div1">
                <h1>Қолданушылар тізімі</h1>
                <input type="text" placeholder="Атыңды жаз"  onChange={(e)=> setName(e.target.value)
                } /> 
                <button onClick={add}>Қосу</button><br />
                <input type="text" placeholder="Іздеу" onChange={(e) => setSearch(e.target.value)} />
                    
            {
                filteredItems.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                }) 
            } 
            </div>
        </div>
    )

}


export default Home;










