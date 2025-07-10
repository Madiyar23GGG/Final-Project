import React from "react";
import './Style.css'
import Apple2 from './Apple2'
import { useState } from "react";




function Apple() {

    // const [items, setItems] = useState(["jnfnvn",'fmjnojno', 'kdmoim']);

        itemss((items)=> {
            fetch(`https://68402dec5b39a8039a571bc4.mockapi.io/:endpoint/${id}`)
        }) 


    const {search, setSearch, filteredItems} = Apple2(items)








    return(
        <div>
            <div className="div1">
                <h1>Serik</h1>
                <input type="text"  onChange={(e) => setSearch(e.target.value)} />


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


export default Apple;








