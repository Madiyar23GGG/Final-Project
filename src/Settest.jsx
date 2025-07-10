import {useState} from 'react'

function Settest() {

    const[text, setText] = useState('')
    const[value, setValue] = useState('')

    return (
        <div>
            <input type="text" 
            valye={value}
            onChange={(e)=> {
                setValue(e.target.value)
                setText(e.target.value)}}/>
                <p>  Терілген текст: {text}</p>
        </div>
    )


}


export default Settest