import React, { useState} from "react";
import qaitalay from './qaitalay'


function qay() {
    const[state, setState] = useState(false)
    function qay(){
        setState(!state)
    }
    return(
        <div>
            {
                state&& <child/>
            }

            <button onClick={qaitalay}>qaitalay</button>
        </div>
    )

}
export default qay;










