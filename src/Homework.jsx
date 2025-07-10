import React, { useReducer, useState } from "react";

function Homework() {

    const[data, setData] = useState([])
    const[name, dispatch] = useReducer(noob)


    return(
        <div>
            <div>
                <h1>Есімді сақтау</h1>
                <input type="text" onChange={(e)=> dispatch(e.target.value)} />
                <button onClick={()=> dispatch('izi')}>Сақтау</button>
                <h1>name</h1>
            </div>
        </div>
    ) 


}

export default Homework;

