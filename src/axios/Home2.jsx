import React, { useState } from "react";

    function Home2(items) {
        const [search, setSearch] = useState('')
        const filteredItems = items.filter(item=> item.toLowerCase().includes(search.toLowerCase()))
    
        return {search, setSearch, filteredItems}
    }


    export default Home2;