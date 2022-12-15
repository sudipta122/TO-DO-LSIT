import React from 'react'

const child2 = (prop) => {
    function click() {
        {
            let colorname1 = prop.colorName;
            console.log(`colorname is : ${colorname1}`);
            let para = document.querySelector(".para")
            // console.log(para);
            para.innerHTML = `color name is : ${colorname1}`;

            //    { `color name is ${prop.colorName}`}
        }





    }
    return (
        <>
            <button onClick={click}>Click</button>
            <p className='para'></p>

        </>

    )
}

export default child2