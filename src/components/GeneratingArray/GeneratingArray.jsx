import React, { useEffect, useMemo, useState } from "react";
import RandomArr from "./helper/RandomArr";
import listArr from "./helper/listArr";
import useMemorizeSumArr from "./helper/sumArr";

const GeneratingArray = () => {
    const sizeArr = 7;
    const [arr, setArr] = useState([])


    useEffect(()=> {
        setArr(RandomArr(sizeArr));
    },[])

    // const sumArr = useMemo( () => {
    //     if(!!arr)
    //     {
    //         let res = 0;
    //         arr.map(num => (res = res + num));
    //         return res;
    //     }
    // },[arr])

    const sumArr = useMemorizeSumArr(arr);

    const handleGeneratingNewArr = () =>{
        setArr(RandomArr(sizeArr));
    }


    return(
        <>
            <ol>
               {arr && listArr(arr)}
               <ol>Сумма: {sumArr}</ol> 
            </ol>
            <button onClick={handleGeneratingNewArr}>Сгенерировать новый массив</button>
        </>
    )

}

export default GeneratingArray;