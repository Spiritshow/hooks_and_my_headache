import React, { useRef, useState } from "react";

const Inputer = () => {

    const [value, setValue] = useState("+");
    const valueRef = useRef(null);
    

    const handleClick = () => {
        setValue(valueRef.current.value);
        valueRef.current.value = "";
        valueRef.current.focus();
    }

    return(
        <>
            <h1>{value}</h1>
            <input ref={valueRef} type="text"></input>
            <button onClick={handleClick}> Фокус на input</button>
        </>
    )

}

export default Inputer;