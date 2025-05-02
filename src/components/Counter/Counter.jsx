import React, { useCallback, useEffect, useRef, useState } from "react";
import listElements from "./helper/listElements";
import RandomName from "./helper/RandomName";
import ElementCounter from "./components/ElementCounter";

const Counter = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(count);
    const [ArrElements, setArrElements] = useState([{id: 0, name: RandomName()}])

    const handleClickIncrement = useCallback(() =>{
        setCount(count+1);
    },[count]);

    const handleClickDecrement = useCallback(() =>{
        setCount(count-1);
    },[count])

    useEffect(() => {
        const prevCount = prevCountRef.current;
        if(count > prevCount && count > 0){
            setArrElements(prev =>[ ...prev,{id:count, name: RandomName()}])
        } 
        if (count < prevCount && count >= 0){
            setArrElements(prev => prev.slice(0, -1))
        }
        prevCountRef.current = count;
    },[count])

    return(
        <>
            <ElementCounter count={count}/>
            <ol>
                {ArrElements && listElements(ArrElements)}
            </ol>
            <button onClick={handleClickIncrement}>больше</button>
            <button onClick={handleClickDecrement}>меньше</button>

        </>
    )
}

export default Counter;