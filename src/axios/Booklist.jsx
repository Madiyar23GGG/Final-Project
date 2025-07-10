import React from "react";
import useSearchFilter from './useSearchFilter'
import { useState } from "react";

function Booklist() {

    const [items, setItems] = useState(['Abai zholy', 'Titanik', 'Mart']);

    const {search, setSearch, filteredItems} = useSearchFilter(items)

    return(
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            {
                filteredItems.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                }) 
            }  
        </div>
    )


}

export default Booklist ;









