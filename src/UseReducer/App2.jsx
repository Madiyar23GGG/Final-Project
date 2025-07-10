import { useReducer } from "react"

function App2(){

    const[state, dispatch] =  useReducer(reduce , 0)


    function reduce(state, action){
     if(action=='plus'){
        return state+1
     }else if(action=='minus'){
        return state-1
     }else if(action=="cyb"){
        return state * state
     }else if(action=="nul"){
        return state==0
     }else {
        return 0
     }
    }
    return(
        <div>
   <button onClick={()=> dispatch('plus')}>+</button>
   <button onClick={()=> dispatch('minus')}>-</button>
   <button onClick={() => dispatch('cyb')}>^2</button>
   <button onClick={() => dispatch('nul')}>AC</button>


   <p>{state}</p>
        </div>
    )
}
export default App2