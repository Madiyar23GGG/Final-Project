import React from "react";
import useSearchFilter from './useSearchFilter'
import { useState } from "react";

function shop() {

    const [items, setItems] = useState(['Футболка', 'Бруки', 'Свитр','Рубашка']);

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
export default shop;