const RandomArr = (n) =>{
    let Arr = [];
    for (let i = 0; i < n; i++) {
        Arr.push( Math.floor(Math.random()* 100))
    }
    return Arr;
}

export default RandomArr;