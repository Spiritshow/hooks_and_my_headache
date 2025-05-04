import React from "react";

const InputName = React.memo(({valueRef, onClick}) =>{
    console.log("tyk");
    return(
        <>
            <input ref={valueRef}></input>
            <button onClick={onClick}>I am</button>
        </>
    )
});

export default InputName;