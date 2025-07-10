import React from "react";

const Kser =() => {
    return<Grandparent/>
}
const ToyContext = React.createContext();

function Grandparent() {
    const toy = "Хими каги кагура";
    return(
        <ToyContext.Provider value={toy}>
        <Parent/>
        </ToyContext.Provider>
    )
}

function Parent() {
    return<Child/>
}

function Child() {
    const toy = React.useState(ToyContext);
    return <p>Менім техникам: {toy}</p>
}
export default Kser;