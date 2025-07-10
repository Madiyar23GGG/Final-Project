import React, { useEffect } from "react";


    function App() {
        useEffect(()=> {
    const fetch_data = async() => {
        dispatch ({type:'start'})
        try{
            const response = await fetch ('https://683ffb195b39a8039a5658ce.mockapi.io/flights/1')
            const data  = await response.json()
            dispstch({type:'success', play : data})
        }catch(err){
            dispatch({type: 'error',play: "Қате сұраныс" })
        }
    }
    fetch_data()
},[])
function reduce (state, action){
    
}



    return(
        <div>
            <div>
                <h1></h1>
                <h1></h1>
            </div>
        </div>
    )

}