import React from 'react'
import { useState } from 'react'
import C1 from "./component/C1"
import Child2 from "./component/child2"
import "./style/box.css"
const App = () => {
  let [uicolor, Setuicolor] = useState('');

  function Bgcolor(value_From_Child_Prop_Color) {
    // console.log("hi");
    Setuicolor(value_From_Child_Prop_Color);



  }
  return (
    <div>
      <h1>
        Color Checker
      </h1>
      <div className="box" style={{ background: `${uicolor}` }}>

      </div>
      <C1 color={Bgcolor} />


      <Child2 colorName={uicolor} />
    </div>
  )
}

export default App;