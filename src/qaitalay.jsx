import { useEffect, useState } from "react";


function Qaitalay () {
    const [state, setstate]= useState(0)

    useEffect(()=>{
        alert ('Сәтті жаңарды')
        return(()=> (
            aler('компонет өшірілді')
        ))
}, [state])
    return(
        <div>
            child
            <button onClick={()=> setstate(state+1)} >+</button>
            (state)
        </div>
    )


}

export default Qaitalay;



