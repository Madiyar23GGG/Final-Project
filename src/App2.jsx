import  React, {useEffect, useState } from "react";

function App2() {
    const [text, setText] = useState('');
    const [isloading, setIsLoading]= useState(false)


    useEffect(()=>{
        if (isloading){
                    alert('Делаем запрос');
        const timer = setTimeout(()=>{
            setText('Данные загружены!')
            setIsLoading(false);
        },2000)
        // return () => clearTimeout(timer);
        }

    },[isloading])

    return(
        <div>
            <button onClick={()=>{
                setText('');
                setIsLoading(true)
            }}>
                Загрузить данные
            </button>


                        <h1>{isloading ? 'Загруска...' : text}</h1>



        </div>
    );
}

export  default App2;




 







