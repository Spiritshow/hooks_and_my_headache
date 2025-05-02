import { useMemo } from "react";

const sumArr = (arr) => {
    if(!!arr)
    {
        let res = 0;
        arr.map(num => (res = res + num));
        return res;
    }
}

const useMemorizeSumArr = (arr) => {
    return useMemo(() => sumArr(arr), [arr]);
};

export default useMemorizeSumArr;