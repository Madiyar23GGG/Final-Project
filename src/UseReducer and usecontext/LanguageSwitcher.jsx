import {useContext} from "react";
import LanguageContext from "./LanguageContext";
 function LanguageSwitcher(){
    const {dispatch, state} = useContext(LanguageContext)
    const  translations = {
        en: 'Helle',
        kz: 'Salem',
        ru: 'Privet'
    }
    return(
        <div>
            <select onChange={(e) => dispatch({type: 'change', payload: e.target.value})}>
                <option value="en">english</option>
                <option value="ru">russion</option>
                <option value="kz">Kazakh</option>
            </select>
            <h2>{translations[state.language]}</h2>
        </div>
    )
 }

 export default LanguageSwitcher;




