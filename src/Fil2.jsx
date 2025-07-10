import axios from "axios"
import {useState} from "react"

function Fil2() {
    const[data, setData] = useState([])

    function get() {
        axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/users',)
            .then(res=> setData(res.data))
        
    }

return(
    <div>
            <button onClick={get}>Аткрыть</button>

{ data.map((orders)=>{
return(
    <div>
        <h1>{orders.id}</h1>
        <h2>{orders.name}</h2>
        <h2>{orders.age}</h2>
        <h2>{orders.gendar}</h2>
        <h2>{orders.number}</h2>
        <h2>{orders.email}</h2>
        <h2>{orders.city}</h2>
        <h2>{orders.image}</h2>
        <h2>{orders.password}</h2>
    </div>
)
})
}
    </div>

)
}

export default Fil2