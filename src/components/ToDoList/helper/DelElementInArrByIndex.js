const DelElementInArrByIndex = (arr, id) => {

    return arr.filter(e => e.id != id);
}

export default DelElementInArrByIndex;