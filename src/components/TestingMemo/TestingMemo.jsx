import React, { useCallback, useRef, useState } from "react";
import Element from "./component/element";
import ViewCount from "./component/ViewCount";
import InputName from "./component/InputName";


const TestingMemo = () => {
    const [state, setState] = useState(null);
    const [name , setName] = useState("who are you?")
    const valueInput = useRef(null);

    const handleClickCount = () => {
        setState(state+1);
    }

    const handleClickName = useCallback(() => {
        if(valueInput.current.value != "") 
        {
            setName(valueInput.current.value);
            valueInput.current.value = "";
        }
    },[]);

    return(
        <div>
            <Element prop={name}/>
            <InputName valueRef = {valueInput} onClick={handleClickName}/>
            <ViewCount prop={state}/>
            <button onClick={handleClickCount}>Click</button>
        </div>
    )

}

export default TestingMemo;