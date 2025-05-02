import React from "react";

const listArr = (arr) => {
    return arr.map( num => (
            <ul>{num}</ul>
        )
    )
}

export default listArr;