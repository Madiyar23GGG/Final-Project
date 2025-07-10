import {act, useReducer, useState} from "react"
import './imge.css'

function Imge() {

const [state, dispatch] = useReducer(reducer, 0)
const [isdispl, setDispl] = useState (false)

    function reducer(state, action){
        if(action== 'plas') {
            return state+1
        }else if (action== 'minus'){
            return state-1
        }else if (action== 'reset'){
            return 0
        }else if (action== 'sqrt'){
            return Math.sqrt(state)
        }
    } 


return(
    <div>
        <div  className="div1"   style={{
            display : isdispl ? 'none' : 'block' 
        }}>
             <p>{state}</p>
             <button onClick={(e)=> dispatch('plas')}>+</button>
             <button onClick={(e)=> dispatch('minus')}>-</button>
             <button onClick={(e)=> dispatch('reset')}>C</button>
        </div>
            <button onClick={() => setDispl(!isdispl)}>(0)</button>


        {/* <button onClick={(e)=> dispatch('chist')}></button>
        <button onClick={(e)=> dispatch('')}>-</button> */}


    </div>
)

};

export default Imge;
