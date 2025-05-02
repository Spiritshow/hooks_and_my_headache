import React, { useCallback, useEffect } from "react";

const ElementCounter = ({count}) => {
    
    useEffect(() => {
        console.log('Счётчик обновился');
    },[count])

    return(
        <h1>Счётчик: {count}</h1>
    )
}

export default ElementCounter;