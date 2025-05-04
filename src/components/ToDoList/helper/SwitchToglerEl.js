const SwitchToglerEl = (arr, id) => {
    
    return arr.map(item => 
        item.id === id ? {...item, status: !item.status} : item
    );
}

export default SwitchToglerEl;