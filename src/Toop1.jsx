import React from "react";

function Toop1() {

    function tik(event){
        event.preventDefult();
alert('форма өткізілді')
    }



    return(
        <form onSubmit={tik}>
            <input type="text" />
            <button type="Submit">Нажать</button>
        </form>

    )
}


export default Toop1;

