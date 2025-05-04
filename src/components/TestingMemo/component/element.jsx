import React, { memo } from "react";

const Element = memo( function Element({prop}) {
    console.log("Element",{prop});
    return(
        <>
            <h1>Hello, {prop}</h1>
        </>
    )
});

export default Element;