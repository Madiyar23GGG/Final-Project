import React, { useState } from "react";

function Book() {
    const[isOpen, setOpen] = useState(false)


    return(
        <div>
            <div style={{display: !isOpen ?  "none" : "block"}}>
              <h1>Қош келдіңіз онлайн кітап ханаға</h1>
              <button onClick={() => {setOpen(!isOpen)}}>Ашу</button>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>

    )

}

export default Book;