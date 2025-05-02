import React, { useEffect } from "react";

const listElements = (list) => {
    useEffect(()=>{
        console.log("обновление списка");
    },[list])
    
    if(!!list)
        return list.map(prop => (
            <li key={prop.id}>{prop.name}</li>
        ))
}

export default listElements;