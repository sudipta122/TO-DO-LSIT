import React from 'react'
import { useState } from 'react'

const C1 = (prop) => {
    let [ActiveColor, SetActivecolor] = useState("")
    function colorhandel(event) {
        let value = event.target.value;
        // console.log(value);
        prop.color(value)// it is a func or Bgcolor function same as prop.color
        SetActivecolor(value);

    }
    return (
        <>
            <input type="text" onChange={colorhandel} />

        </>
    )
}

export default C1