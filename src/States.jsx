import { useState } from "react";
import './States.css'



function States(){
const [users, setUsers] = useState(['Alise', 'Abay','Aldiar'])

    return(
    <ul>
        {users.map((user,index)=> {
            return <li key = {index}>
                {user}
            </li>
        })}
    </ul>
)
};



export default States