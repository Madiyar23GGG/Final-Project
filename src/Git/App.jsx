import React, {createContext,useContext,useState} from "react";
import LanguageProvider from  './LanguageProvider';
// import Test from './Test';

function App(){

    // const [Test, setTest] = useState('')
    const [LanguageProvider, setLanguageProvider] = useState('')


    return(
        <div>
        <p>{LanguageProvider == "kz"?  "" :  LanguageProvider="ru"}</p>
        <select onChange={(e)=> setlang(e.target.value)}>
            <option value="kz">kz</option>
            <option value="ru">kz</option>
            <option value="ch">kz</option>
            <option value="en">kz</option>
        </select>
        </div>
    )

}


export default App;
